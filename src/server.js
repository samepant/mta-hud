'use-strict';

require('dotenv').config();

const axios = require('axios');
// const { createClient } = require('mta-realtime-subway-departures');
const express = require('express');
const path = require('path');

const mtaKey = process.env.MTAKEY;
const busKey = process.env.BUSKEY;
const weatherKey = process.env.WEATHERKEY;

const app = express();
// const client = createClient(mtaKey);

app.use(express.static(path.join(__dirname, '../build')));

app.get('/weather', function(req, res) {
  axios
    .get('http://api.weatherbit.io/v2.0/current', {
      params: {
        postal_code: '11221',
        key: weatherKey,
      },
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

// app.get('/subway', function(req, res) {
//   // only gets trains for the J gates stop at the moment
//   client
//     .departures(95)
//     .then((responses) => {
//       res.status(200).json(responses);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send(err);
//     });
// });

// app.get('/bus', function(req, res) {
//   // takes in 'route' as query string
//   const line = req.query.route === '52' ? 'MTA NYCT_B52' : 'MTA NYCT_B38';
//   const stopId = req.query.route === '52' ? 304203 : 308229;

//   axios
//     .get('http://bustime.mta.info/api/siri/stop-monitoring.json', {
//       params: {
//         key: busKey,
//         OperatorRef: 'MTA',
//         LineRef: line,
//         MonitoringRef: stopId,
//         MaximumStopVisits: 2,
//       },
//     })
//     .then((response) => {
//       const busTrips = response.data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit;
//       res.status(200).json(busTrips);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send(err);
//     });
// });

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
