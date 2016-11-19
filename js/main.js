/*
MAIN JAVASCRIPT FILE WHERE THE COORDINATION OF THE MAIN CONTROLLERS, SERVICES AND DIRECTIVES ARE CONFIGURED
THIS FILE SERVES AS A CONTROL PANEL FOR THE WEB APP
THIS FILE IS THE FIRST JAVASCRIPT FILE THAT IS LOADED AND CONTROLS THE INITIALALIZATION FLOW OF THE REST OF THE WEB APP
*/
(function() {

  'use strict';

  //CONFIGURE THE LIBRARIES TO BE USED
  //ASSIGN NAME ALIAS FOR DIRECTORIES AND INDICATE THEIR DIRECTORIES
  require.config({
    baseUrl: 'js',
    paths: {
      'angular': 'libs/dev/angular-1.5',
      'angularRoute': 'libs/min/angular-route-min-1.2.24',
      'bootstrapJS': 'libs/dev/bootstrap',
      'jquery': 'libs/dev/jquery-3.1.1'
    },
    shim: {
      'angular': {
        exports: 'angular'
      },
      'angularRoute': {
        deps: ['angular']
      },
      'bootstrapJS': {
        deps: ['jquery']
      },
      'jquery': {
        exports: '$'
      }
    }
  });

  //DEFINE THE MAIN MODULES TO BE LOADED
  define('controllersFactory', ['angular'], function(angular) {
    return angular.module('app.controllers', []);
  });

  define('servicesFactory', ['angular'], function(angular) {
    return angular.module('app.services', []);
  });

  define('directivesFactory', ['angular'], function(angular) {
    return angular.module('app.directives', []);
  });

  //DEFINE THE MOTHER 'APP' MODULE WHICH REQUIRES ALL THE OTHER MAIN MODULES TO BE INITIALIZED WITH IT
  define('app', [
    'angular',
    'angularRoute',
    'directivesFactory',
    'servicesFactory',
    'controllersFactory',
    ],
    function(angular) {
      return angular.module('app', ['app.directives', 'app.services', 'app.controllers', 'ngRoute']);
    }
  );

  //BOOTSTRAP ANGULARJS TO THE MOTHER 'APP'
  require(['app',
    'jquery',
    'bootstrapJS'],
    function(app,
      jquery,
      bootstrapJS) {
    require([
        'controllers/landing-ctrl',
        'controllers/about-ctrl',
        'controllers/next-ctrl',
        'controllers/patricia-ctrl',
        'controllers/sonya-ctrl'
      ],
      function() {
        app.config(['$routeProvider', function($routeProvider) {
          $routeProvider
            .when('/', {templateUrl: 'templates/landing.html', controller: "LandingCtrl"}).
            otherwise({redirectTo: '/'})

            .when('/stories', {templateUrl: 'templates/temp.html'}).
            otherwise({redirectTo: '/'})

            .when('/next', {templateUrl: 'templates/next.html', controller: "NextCtrl"}).
            otherwise({redirectTo: '/'})

            .when('/sonya', {templateUrl: 'templates/sonya.html', controller: "SonyaCtrl"}).
            otherwise({redirectTo: '/'})

            .when('/patricia', {templateUrl: 'templates/patricia.html', controller: "PatriciaCtrl"}).
            otherwise({redirectTo: '/'})

            .when('/about', {templateUrl: 'templates/about.html', controller: "AboutCtrl"}).
            otherwise({redirectTo: '/'});
        }]);

        angular.bootstrap(document, ['app']);
      }
    );
  });

})();
