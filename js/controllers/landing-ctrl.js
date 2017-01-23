//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory",
  'services/content-service',
  'services/tab-service',
  'directives/landing-directives'],
  function(controllersFactory) {

  controllersFactory.controller('LandingCtrl',
    ['$scope',
     '$location',
     'ContentService',
     'TabService',

    function($scope,
      $location,
      contentService,
      tabService) {

      $scope.contentService = contentService.init($scope);
      $scope.tabService = tabService.init($scope);
      $scope.tabService.setTab(0);
      $scope.go = function ( path ) {
        $location.path(path);
      };
  }]);
});
