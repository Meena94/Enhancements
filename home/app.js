var app = angular.module('benefitEnrollment',['ui.router','angularUtils.directives.dirPagination']);

app.run(function($rootScope,$state) {
  $rootScope.$state = $state;
});

// app.factory('LogoutService', function() {
//
//   return{
//     factory.logout = function() {
//       $http.get('/logout').then(function (res) {
//         //console.log(res.data);
//         $location.path('/login');
//     }
//   )}
//   }
//
// });
