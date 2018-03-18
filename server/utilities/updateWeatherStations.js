const knex = require('../knex/knex');

module.exports = {
  updateWeatherStations: updateWeatherStations
}

function updateWeatherStations () {
  let arr = [

  knex('trails').where({trailname: 'Waahila Ridge Trail'}).update({weather: 'KHIHONOL27'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kamananui Valley Road'}).update({weather: 'KHIAIEA8'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kaunala Trail (West)'}).update({weather: 'KHIHALEI8'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Aiea Loop Trail'}).update({weather: 'KHIAIEA8'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kalawahine Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Puu Pia Trail'}).update({weather: 'KHIHONOL140'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Poamoho Access Road'}).update({weather: 'KHIWAHIA5'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: `Waimano Trail Access`}).update({weather: 'KHIAIEA8'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: `Kapa'ele'ele Trail`}).update({weather: 'KHIHAWAI17'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Makiki Valley Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunawili Ditch Trail'}).update({weather: 'KHIKAILU2'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kulanaahane Trail'}).update({weather: 'KHIKANEO5'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunawili Trail Pali Access'}).update({weather: 'KHIKANEO13'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maka3 Lighthouse Road'}).update({weather: 'KHIHONOL27'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maakua Ridge Trail'}).update({weather: 'KHIHALEI8'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Nahuina Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunawili Falls Trail'}).update({weather: 'KHIKAILU2'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kaena Pt. Rd. (Waianae)'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kuliouou Ridge Trail'}).update({weather: 'KHIHONOL131'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Nuuanu Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kanealole Trail'}).update({weather: 'KHIHONOL158'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Manana Trail'}).update({weather: 'KHIAIEA8'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kealia Trail'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Hauula Loop Trail'}).update({weather: 'KHIHALEI8'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Lower Waimano Trail'}).update({weather: 'KHIAIEA8'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Aihualama Trail'}).update({weather: 'KHIHONOL140'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Tantalus Arboretum and Sculpture Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kuaokala Trail'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Hawailoa Ridge Trail'}).update({weather: 'KHIHONOL135'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Manoa Falls Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Judd Memorial Loop Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  })
  ,
  knex('trails').where({trailname: 'Kealia Access Road'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    return result
  })
  ,
  knex('trails').where({trailname: 'Upper Waimano Trail'}).update({weather: 'KHIKAILU7'})
  .then(result => {
    return result
  })
  ,
  knex('trails').where({trailname: 'Schofield-Waikane Trail'}).update({weather: 'KHIMILIL19'})
  .then(result => {
    return result
  })
  ,
  knex('trails').where({trailname: 'Wiliwilinui Access Road'}).update({weather: 'KHIHONOL14'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Wiliwilinui Trail'}).update({weather: 'KHIHONOL14'})
  .then(result => {
    return result
  })
  ,
  knex('trails').where({trailname: 'Poamoho Access Road'}).update({weather: 'KHIWAHIA5'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Manoa Cliff Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Mokuleia-Kuaokala Firebreak Access Road'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Poamoho RidgeTrail'}).update({weather: 'KHIWAHIA5'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Mokuleia Forest Reserve Access Road'}).update({weather: 'PHHI'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Mokuleia Trail'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Pauoa Flats Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Puu Ohia Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunawili-Waimanalo Access Road'}).update({weather: 'KHIKAILU7'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Moleka Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kaena Pt. Rd. (Mokuleia)'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kolowalu Trail'}).update({weather: 'KHIHONOL140'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunawili Trail'}).update({weather: 'KHIKANEO13'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kaena Point Trail'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Maunalaha Trail'}).update({weather: 'KHIWAIAN3'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Ualakaa Trail'}).update({weather: 'KHIHONOL111'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Nakoa Trail'}).update({weather: 'KHIHAWAI17'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Kuliouou Valley Trail'}).update({weather: 'KHIHONOL135'})
  .then(result => {
    return result
  }),
  knex('trails').where({trailname: 'Diamond Head Trail'}).update({weather: 'KHIHONOL169'})
  .then(result => {
    return result
  })
  ]
  for(var i = 0; i < arr.length; i++){
    return arr[i]
  }
}