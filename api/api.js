const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const cors = require('cors');

const config = require('../config/index');
const PredictionController = require('./controllers/PredictionController');

const app = express();
const server = http.Server(app);

app.use(cors());

app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/public/reservation', async (req, res) => {
  try {
    const predController = new PredictionController(req, res);
    await predController.getAndStoreADR();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.name,
      detail: error.message,
    });
  }
});

app.get('/api/admin/reservation', async (req, res) => {
  try {
    const histController = new PredictionController(req, res);
    await histController.getReservationHistory();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.name,
      detail: error.message,
    });
  }
});

app.get('/api/admin/features', async (req, res) => {
  try {
    const featureController = new PredictionController(req, res);
    await featureController.getFeatureImportance();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.name,
      detail: error.message,
    });
  }
});

server.listen(config.port, () => {
  console.log('Maid cafe running on port '.concat(config.port));
});
