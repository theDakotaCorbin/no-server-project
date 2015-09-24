var app = angular.module('mccApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/#home', {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
        
})
//        .when('/#about', {
//        templateUrl: 'home.html',
//        controller: 'homeCtrl'
//        
//})
//           .when('/#services', {
//        templateUrl: 'home.html',
//        controller: 'homeCtrl'
//        
//})
//           .when('/#contact', {
//        templateUrl: 'home.html',
//        controller: 'homeCtrl'
//        
//})
    .when('/#smallprints', {
        templateUrl: 'smallPrints.html',
        controller: 'homeCtrl'
        
})
    .when('/#mediumprints', {
        templateUrl: 'mediumPrints.html',
        controller: 'homeCtrl'
        
})
    .when('/#largeprints', {
        templateUrl: 'largePrints.html',
        controller: 'homeCtrl'
        
})
    
    
})









function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom:14,
    center: {lat: 40.124903, lng: -111.584466}
  
  });

    var marker = new google.maps.Marker({
    position: {lat: 40.124903, lng: -111.584466},
    map: map,
    title: 'Hello World!'
  });
}




