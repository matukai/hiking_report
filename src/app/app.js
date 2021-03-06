import angular from 'angular';
import ngRoute from 'angular-route';
import NgMap from 'ngmap';

import TrailCtrl from '../controller/trail.controller';
import trailService from '../services/trailDataService';
import HomeCtrl from '../controller/home.controller'
import homeService from '../services/homeService'
import AllTrailCtrl from '../controller/allTrails.controller';
import allTrailsService from '../services/allTrailsService';

import '../style/app.css';
import '../../node_modules/bulma/css/bulma.css'

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngRoute, NgMap])
  .controller('AppCtrl', AppCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .controller('TrailCtrl', TrailCtrl)
  .controller('AllTrailCtrl', AllTrailCtrl)
  .service('homeService', homeService)
  .service('trailService', trailService)
  .service('allTrailsService', allTrailsService)

  .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider
      .when(`/`, {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when(`/all`, {
        templateUrl: `views/allTrails.html`,
        controller: 'AllTrailCtrl'
      })
      .when(`/trail/:name`, {
        templateUrl: `views/trail.html`,
        controller: 'TrailCtrl'
      })
      .otherwise({
        templateUrl: `views/notFound.html`
      })
    $locationProvider.html5Mode(true);
  }])

export default MODULE_NAME;