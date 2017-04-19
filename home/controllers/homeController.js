app.controller('homeController',['$scope','$http','$location',function ($scope,$http,$location) {
  var getGridDetails = function () {
    $http.get('/homegrid').then(function (res) {
      $scope.activecount = res.data.activecount;
      $scope.sftpcount = res.data.sftpcount;
      var path = res.data;
      $scope.usererror = "";
      console.log(path);
      if (path == "/login") {
        //$scope.usererror = path;
        $location.path(path);
      }else {
        $location.path('/home');
      }

    })

  }
  // load this when initialize using ng init
  getGridDetails();

  $scope.destroy = function () {
    $http.get('/logout').then(function (res) {
      //console.log(res.data);
      $location.path('/login');
    })
    // LogoutService.logout();

  }

  $scope.getsentGroups = function () {
    $location.path('/sentFiles');
    // $http.get('/getSftpGroupHome').then(function (res) {
    //
    //   $location.path(res.data);
    // })
  }
  $scope.getnotsentGroups = function () {
    $location.path('/notSentFiles');
    // $http.get('/getSftpGroupHome').then(function (res) {
    //
    //   $location.path(res.data);
    // })
  }



}])
