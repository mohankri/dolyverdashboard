function MainCtrl() {
   this.userName = "MainCtr: Dolyver Inc.";
};

angular
   .module("dolyver",
   		[])
   .controller('MainCtrl', MainCtrl)
   .directive('dolyverTopnavbar', function () {
   		return {
   			restrict: 'E',
   			templateUrl: 'views/dashboard/dolyver-topnavbar.html'
   		}
   })
   .directive('dolyverContent', function() {
   		return {
   			restrict: 'E',
   			templateUrl: 'views/dashboard/dolyver-content.html'
   		}
   })
   .directive('dolyverService', function() {
   		return {
   			restrict: 'E',
   			templateUrl: 'views/dashboard/dolyver-service.html'
   		}
   })
   .directive('dolyverFooter', function() {
   		return {
   			restrict: 'E',
   			templateUrl: 'views/dashboard/dolyver-footer.html'
   		}
   })
   .directive('dolyverCarousel', function() {
   		return {
   			restrict: 'E',
   			templateUrl: 'views/dashboard/dolyver-carousel.html'
   		}
   });
