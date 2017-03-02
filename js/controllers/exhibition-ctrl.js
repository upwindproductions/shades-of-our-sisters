//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory",
  'services/content-service',
  'services/tab-service',
  'directives/landing-directives'],
  function(controllersFactory) {

  controllersFactory.controller('ExhibitionCtrl',
    ['$scope',
     'ContentService',
     'TabService',

    function($scope,
      contentService,
      tabService) {

      $scope.contentService = contentService.init($scope);
      $scope.tabService = tabService.init($scope);
      $scope.tabService.setTab(3);
      $scope.slideIndex = 0;

      $scope.openModal = function() {
        document.getElementById('exhibition-modal').style.display = "block";
      };

      $scope.closeModal = function() {
        document.getElementById('exhibition-modal').style.display = "none";
      };

      $scope.plusSlides = function(n) {
        $scope.showSlides($scope.slideIndex += n);
      };

      $scope.currentSlide = function(n) {
        $scope.showSlides($scope.slideIndex = n);
      };

      $scope.showSlides = function(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n >= slides.length) {
          $scope.slideIndex = 0;
        }
        if (n < 0) {
          $scope.slideIndex = slides.length - 1;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[$scope.slideIndex].style.display = "block";
        dots[$scope.slideIndex].className += " active";
      }
  }]);
});
