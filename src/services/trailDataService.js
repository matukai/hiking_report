const trailService = ['$http', function ($http) {

  let finalTrail = {}

this.getSingleTrail = function (name) {
  return $http.get(`/api/hikeNow/trail/fake/${name}`)
  .then(singleTrail => {
    let newSingleTrail = singleTrail.data
    finalTrail.name = newSingleTrail.trailname,
    finalTrail.length = newSingleTrail.length_m,
    finalTrail.elev = newSingleTrail.elev_range,
    finalTrail.coordinates = newSingleTrail.coordinates,
    finalTrail.standard = newSingleTrail.standard
    finalTrail.weather = newSingleTrail.weather
    return newSingleTrail.weather
  }).then(result =>{
    this.setStatus(result)
    console.log(finalTrail)
    return finalTrail
  })
}

this.setStatus = function(trail) {
  if (trail.wind_mph < 24.9999) {
    finalTrail.status = 'GOOD'
  } 
  if (trail.wind_mph > 25 && trail.wind_mph < 45.999) {
    finalTrail.status = 'CAUTION'
  }
  if (trail.wind_mph > 46) {
    finalTrail.status = 'DANGER'
  }
  if(trail.wind_mph > 73) {
    finalTrail.status = 'HURRICANE'
  }
  return true;
}

}]

export default trailService