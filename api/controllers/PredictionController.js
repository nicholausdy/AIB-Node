const { QueryTypes } = require('sequelize');

const { publisher } = require('../services/publish.service.js');
const { db } = require('../../config/database');
const { ReservationDetail } = require('../models/ReservationDetail');

class PredictionController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  static async countPrevCancellation(email, isCanceled) {
    try {
      let val;
      if (isCanceled) {
        val = 1;
      } else {
        val = 0;
      }
      const result = await db.query(
        `select COUNT(is_canceled) as num from reservation_detail
        where email = :email AND is_canceled = :is_canceled`,
        {
          replacements: {
            email,
            is_canceled: val,
          },
          type: QueryTypes.SELECT,
        },
      );
      return parseInt(result[0].num, 10);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async isRepeatedGuest(email) {
    try {
      const result = await ReservationDetail.findAll({
        where: {
          email,
        },
      });
      if (typeof result[0] === 'undefined') {
        return 0;
      }
      return 1;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async prepareForML() {
    try {
      const { body } = this.req;
      const request = body.booking_info;
      const op1 = PredictionController.countPrevCancellation(body.email, true);
      const op2 = PredictionController.countPrevCancellation(body.email, false);
      const op3 = PredictionController.isRepeatedGuest(body.email);
      const [numPreviousCancellation, numPreviousNotCancellation, isRepeatedGuest] = await Promise.all([
        op1, op2, op3]);
      request.previous_cancellations = numPreviousCancellation;
      request.previous_bookings_not_canceled = numPreviousNotCancellation;
      request.is_repeated_guest = isRepeatedGuest;
      request.assigned_room_type = request.reserved_room_type;
      return request;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAndStoreADR() {
    try {
      const initInsertionData = this.req.body.booking_info;
      const mLRequestData = await this.prepareForML();
      const mlResponse = await publisher.request('predictorCall', mLRequestData);
      if (!(mlResponse.success)) {
        return this.res.status(400).json(mlResponse);
      }
      initInsertionData.email = this.req.body.email;
      initInsertionData.adr = mlResponse.message.adr;
      await ReservationDetail.create(initInsertionData);
      return this.res.status(200).json(mlResponse);
    } catch (error) {
      return this.res.status(500).json({
        success: false,
        message: error.name,
        detail: error.message,
      });
    }
  }

  async getReservationHistory() {
    try {
      const queryResult = await ReservationDetail.findAll();
      return this.res.status(200).json({
        success: true,
        message: queryResult,
      });
    } catch (error) {
      return this.res.status(500).json({
        success: false,
        message: error.name,
        detail: error.message,
      });
    }
  }

  async getFeatureImportance() {
    try {
      const featureResponse = await publisher.request('featureImportanceCall', 'ping');
      return this.res.status(200).json(featureResponse);
    } catch (error) {
      return this.res.status(500).json({
        success: false,
        message: error.name,
        detail: error.message,
      });
    }
  }
}

module.exports = PredictionController;

// (async () => {
//   const queryResult = await PredictionController.countPrevCancellation('nicdanyos@gmail.com', false);
//   console.log(queryResult);
// })();
