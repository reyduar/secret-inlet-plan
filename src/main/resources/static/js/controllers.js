'use strict';

/* Controllers */
angular.module('myApp.controllers', [])
  .controller('IndexCtrl', ['$scope', '$log', 'bookService', function($scope, $log,bookService) {
      $scope.now = new Date();
      
      
    	  $scope.bookmarks = [];
    	  bookService.getBookmarks().then(function(response){
    		  $scope.bookmarks = response.data._embedded.bookmarks;
    		  $log.info("Bookmarks List:" + JSON.stringify($scope.bookmarks));
  		});
  	
  }]);