angular.module('breakroomApp', ['ngRoute', 'ui.bootstrap'])
	.config(breakroomRouter);

function breakroomRouter($routeProvider) {
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

function navController($scope, $location) {
	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	};
}

// request JSON feed from Delicious account
function deliciousController($scope, $http) {
	$http.jsonp('http://feeds.delicious.com/v2/json/modified65?count=5&callback=JSON_CALLBACK')
		.then(function (response) {
			$scope.entries = response.data;
		});
}

// request JSON feed from WordPress account
function wordpressController($scope, $http) {
	$http.jsonp('http://1.modifieddigital.com/cclark/breakroom-wp/?json=1&callback=JSON_CALLBACK')
		.then(function (response) {
			$scope.posts = response.data.posts;
		});

	$scope.toJsDate = function (str) {
		if (!str) return null;
		return new Date(str);
	}
}

function carouselController($scope) {
	$scope.myInterval = 5000;
	var slides = $scope.slides = [];
	$scope.addSlide = function () {
		slides.push({
			image: ['/images/header1.jpg', '/images/header2.jpg', '/images/header3.jpg'][slides.length % 3],
			heading1: ['Welcome to Bootstrap', 'Built With Bootstrap', 'Lorem ipsum dolor sit'][slides.length % 3],
			heading2: ['A multipurpose Bootstrap Theme', 'And 100% Responsive', 'Curabitur viverra nulla non tel'][slides.length % 3]
		});
	};
	for (var i = 0; i < 3; i++) {
		$scope.addSlide();
	}
}