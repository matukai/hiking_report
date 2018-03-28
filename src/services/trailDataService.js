const trailService = ['$http', function ($http) {

  let finalTrail = {}

this.getSingleTrail = function (name) {
  return $http.get(`/api/hikeNow/trail/fake/${name}`)
  .then(singleTrail => {
    console.log(singleTrail.data.rain.rainfall)
    let newSingleTrail = singleTrail.data;
    let kph = (newSingleTrail.weather.wind_mph * 1.60934).toFixed(2);
    let km = (newSingleTrail.length_m * 1.60934).toFixed(2);
    let elev_range_m = (newSingleTrail.elev_range * 0.3048).toFixed(2);
    let rain_cm = (singleTrail.data.rain.rainfall * 2.54).toFixed(2);
    console.log(rain_cm)
    finalTrail.name = newSingleTrail.trailname,
    finalTrail.length_m = newSingleTrail.length_m,
    finalTrail.elev = newSingleTrail.elev_range,
    finalTrail.coordinates = newSingleTrail.coordinates,
    finalTrail.standard = newSingleTrail.standard,
    finalTrail.weather = newSingleTrail.weather,
    finalTrail.rain = newSingleTrail.rain,
    finalTrail.weather.wind_kph = kph,
    finalTrail.weather.rain_cm = rain_cm,
    finalTrail.length_km = km,
    finalTrail.elev_range_m = elev_range_m
    return newSingleTrail;
  }).then(result =>{
    this.setStatus(result);
    return finalTrail;
  })
}

this.setStatus = function(trail) {
  if(trail.weather && trail.rain) {
  if (trail.weather.wind_mph < 24.9999 && trail.rain.rainfall < .4999) {
    finalTrail.status = 'GOOD'
  } 
  if (trail.weather.wind_mph >= 25 && trail.weather.wind_mph <= 46 && trail.rain.rainfall >= .5 && trail.rain.rainfall <= 1) {
    finalTrail.status = 'CAUTION'
  }
  if (trail.weather.wind_mph > 46 && trail.rain.rainfall > 1) {
    finalTrail.status = 'DANGER'
  }
  if(trail.wind_mph > 73) {
    finalTrail.status = 'HURRICANE'
  }
} else {
  finalTrail.status = 'UNKOWN'
}
  return true;
}

}]

export default trailService