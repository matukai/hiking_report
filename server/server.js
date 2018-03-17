//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');
const Trail = require('./db/models/Trails');
const rp = require('request-promise');
const weatherKey = require('../config/config');
const rain = require('./routes/rain');

//CONSTANTS
const PORT = process.env.PORT  || 3000;
let WEATHERAPIKEY = weatherKey.weather.apiKey2;
const WEATHER_API_ENDPOINT = `http://api.wunderground.com/api/${WEATHERAPIKEY}/conditions/q/`;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/trails', trails);
app.use('/rain', rain);
app.use(express.static('public'));

global.hikeNow = {};

global.hikeNow.rain = {
  unknown: {
    stationId: '',
    rainFall: ''
  }
}
// console.log(global.hikeNow)

global.hikeNow.weather = {
    unknown: {
      station_id: '',
      weather: '',
      temperature_string: '',
      relative_humidity: '',
      wind_dir: '',
      wind_mph: '',
      wind_gust_mph: '',
      feelslike_string: '',
      visibility_mi: '',
      precip_1hr_string: '',
      precip_today_in: '',
      observation_location_latitude: '',
      observation_location_longitude: '',
      display_location_full: ''
  }
}

function getTrailHeads () {
  let trails = [];
  new Trail()
  .fetchAll()
  .then(result => {
    result = result.toJSON()
    result.map(element => {
      if(element.trailname !== 'Ualakaa Trail'){
        trails.push(element.coordinates[0]);
      }
    })
    fireWeatherAPI(trails);
  })
}

function fireWeatherAPI (arr) {
  arr.map(element => {
    let latitude = element[1];
    let longitude = element[0];
    getWeatherData(latitude,longitude);
  })
}

function getWeatherData(lat,long){
    return rp(`${WEATHER_API_ENDPOINT}${lat},${long}.json`)
      .then(json => {
        return JSON.parse(json);
      })
      .then(data => {
        // console.log(data)
        if(data.current_observation.station_id){
          global.hikeNow[data.current_observation.station_id] = {
            city: data.current_observation.display_location.city,
            state: data.current_observation.display_location.city,
            longitude: data.current_observation.display_location.longitude,
            latitude: data.current_observation.display_location.latitude,
            observation_time: data.current_observation.observation_time,
            weather: data.current_observation.weather,
            temp_f: data.current_observation.temp_f,
            temp_c: data.current_observation.temp_c,
            relative_humidity: data.current_observation.relative_humidity,
            wind_dir: data.current_observation.wind_dir,
            wind_degrees: data.current_observation.wind_degrees,
            wind_mph: data.current_observation.wind_mph,
            wind_gust_mph: data.current_observation.wind_gust_mph,
            wind_gust_kph: data.current_observation.wind_gust_kph,
            feelslike_f: data.current_observation.feelslike_f,
            feelslike_c: data.current_observation.feelslike_c,
            visibility_mi: data.current_observation.visibility_mi,
            visibility_km: data.current_observation.visibility_km,
            UV: data.current_observation.UV
          };
        }else{
          return global.hikeNow.weather;
        }
      })

      .catch(err => {
        console.log(err)
      });
};



app.get('/api/hikeNow/fake', (req,res) => {
  return res.json(global.hikeNow)
})



app.listen(PORT, () => {
  getTrailHeads();
  console.log(`SERVER IS LISTENING ON ${PORT}`);
});