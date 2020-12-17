const Sequelize = require('sequelize');
const { db } = require('../../config/database');

const ReservationDetail = db.define('ReservationDetail', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id',
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'email',
  },
  hotel: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'hotel',
  },
  is_canceled: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'is_canceled',
  },
  arrival_date_year: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'arrival_date_year',
  },
  arrival_date_month: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'arrival_date_month',
  },
  arrival_date_week_number: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'arrival_date_week_number',
  },
  arrival_date_day_of_month: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'arrival_date_day_of_month',
  },
  meal: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'meal',
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'country',
  },
  market_segment: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'market_segment',
  },
  distribution_channel: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'distribution_channel',
  },
  is_repeated_guest: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'is_repeated_guest',
  },
  reserved_room_type: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'reserved_room_type',
  },
  assigned_room_type: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'assigned_room_type',
  },
  deposit_type: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'deposit_type',
  },
  agent: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'agent',
  },
  customer_type: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'customer_type',
  },
  reservation_status: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'reservation_status',
  },
  reservation_status_date_year: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'reservation_status_date_year',
  },
  reservation_status_date_month: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'reservation_status_date_month',
  },
  reservation_status_date_day: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'reservation_status_date_day',
  },
  lead_time: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'lead_time',
  },
  stays_in_weekend_nights: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'stays_in_weekend_nights',
  },
  stays_in_week_nights: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'stays_in_week_nights',
  },
  adults: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'adults',
  },
  children: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'children',
  },
  babies: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'babies',
  },
  previous_cancellations: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'previous_cancellations',
  },
  previous_bookings_not_canceled: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'previous_bookings_not_canceled',
  },
  days_in_waiting_list: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'days_in_waiting_list',
  },
  required_car_parking_spaces: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'required_car_parking_spaces',
  },
  total_of_special_requests: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'total_of_special_requests',
  },
  booking_changes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'booking_changes',
  },
  adr: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    field: 'adr',
  },
}, { tableName: 'reservation_detail', timestamps: false });

module.exports = {
  ReservationDetail,
};
