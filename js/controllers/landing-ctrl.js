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

      // $scope.render_desktop_ui = function() {
      //   // Navbar
      //   $('.navbar').css('background-color', 'transparent');
      //   $('.nav-pills>li>a').css('color', 'white');
      //   $('#blurb').css('color', 'white');

      //   var _navbar_brand = $('.navbar-brand');
      //   var _navbar_brand_styles = {
      //     'background': 'url(../../resources/logos/navbar_logo_white.png)',
      //     'height': '100%',
      //     'background-repeat': 'no-repeat',
      //     'background-size': 'contain',
      //     'width': '270px',
      //     'padding': '0',
      //     'background-position': '0'
      //   };

      //   for (var style in _navbar_brand_styles) {
      //     _navbar_brand.css(style, _navbar_brand_styles[style]);
      //   }

      //   // footer
      //   $('footer').css('color', 'white');
      //   $('#footer-facebook').attr('src', '../../resources/icons/facebook_white.png');
      //   $('#footer-twitter').attr('src', '../../resources/icons/twitter_white.png');
      //   $('#footer-instagram').attr('src', '../../resources/icons/instagram_white.png');
      // };

      // $scope.render_mobile_ui = function() {
      //   var _maroon = '#8b181a';

      //   $('.nav-pills>li>a').css('color', _maroon);

      //   var _navbar_brand = $('.navbar-brand');
      //   var _navbar_brand_styles = {
      //     'background': 'url(../../resources/logos/navbar_logo.png)',
      //     'height': '100%',
      //     'background-repeat': 'no-repeat',
      //     'background-size': 'contain',
      //     'width': '270px',
      //     'padding': '0',
      //     'background-position': '0'
      //   };

      //   for (var style in _navbar_brand_styles) {
      //     _navbar_brand.css(style, _navbar_brand_styles[style]);
      //   }

      //   // footer
      //   $('footer').css('color', _maroon);
      //   $('#footer-facebook').attr('src', '../../resources/icons/facebook.png');
      //   $('#footer-twitter').attr('src', '../../resources/icons/twitter.png');
      //   $('#footer-instagram').attr('src', '../../resources/icons/instagram.png');
      // };

      // $(document).ready(function() {
      //   if ($(window).width() >= 1200 && $('video').css('display')) {
      //     $scope.render_desktop_ui();
      //   }

      //   $(window).resize(function() {
      //     if ($(window).width() >= 1200 && $('video').css('display')) {
      //       $scope.render_desktop_ui();
      //     } else {
      //       $scope.render_mobile_ui();
      //     }
      //   });
      // });
  }]);
});
