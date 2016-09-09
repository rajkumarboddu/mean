angular.module('articles').controller('ArticlesController',
	['$scope','$routeParams','$location','Authentication','Articles',
		function($scope, $routeParams, $location, Authentication, Articles){
			$scope.authentication = Authentication;
		}
	]
);