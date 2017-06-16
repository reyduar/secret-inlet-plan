'use strict';

/* Services */

angular.module('myApp.services', [])
	.service('bookService', ['$http', function($http) {
		this.getBookmarks = function () {
		    return $http.get('api/bookmarks/');
		 }
	}])