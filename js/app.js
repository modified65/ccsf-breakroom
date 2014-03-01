angular.module('breakroomApp', ['ngRoute'])
    .config(breakroomRouter);

function breakroomRouter ($routeProvider)
{
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html'
	})
	.when('/about', {
		templateUrl: 'partials/about.html'
	})
	.when('/services', {
		templateUrl: 'partials/services.html'
	})
	.when('/portfolio', {
		templateUrl: 'partials/portfolio.html'
	})
	.when('/blog', {
		templateUrl: 'partials/blog.html'
	})
	.when('/contact', {
		templateUrl: 'partials/contact.html'
	})
}

function navController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}