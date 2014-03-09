angular.module('breakroomApp', ['ngRoute','ngAnimate'])
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

// request JSON feed from delicious account
function deliciousCtrl ($scope, $http) {
    $http.jsonp('http://feeds.delicious.com/v2/json/modified65?count=5&callback=JSON_CALLBACK').then(function (response) {
          $scope.entries = response.data;
    });
}


// request JSON feed
function wordpressCtrl ($scope, $http) {
    $http.jsonp('http://localhost:8888/breakroom-wp/?json=1').then(function (response) {
          $scope.posts = response.data;
    });
}