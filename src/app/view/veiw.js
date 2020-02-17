var app = angular.module('codeschunks',['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.
      when('/addnewuser', {
        templateUrl: 'template/add_article.html',
        controller: 'addUserCtrl'
    }).
      when('/showusers', {
        templateUrl: 'template/view.html',
        controller: 'showUserCtrl'
      }).
      otherwise({
        redirectTo: '/showusers'
      });
});

app.controller('addUserCtrl', function($scope) {
     
});
 
 
app.controller('showUserCtrl', function($scope) {
 
});