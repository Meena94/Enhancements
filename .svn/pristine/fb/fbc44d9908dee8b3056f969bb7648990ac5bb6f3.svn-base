app.controller('loginController' , ['$scope','$http','$location',function ($scope,$http,$location) {
  var disableSession = function () {
    $http.get('/loginsession').then(function (res) {
      $location.path('/login');
    })
  }
  disableSession();


  $scope.auntheticateLogin = function () {
    $scope.logindetails = { username:$scope.username,password:$scope.password};
    console.log($scope.logindetails);
    $http.post('/login', $scope.logindetails).then(function (res) {
        var path = res.data;
        $scope.usererror = "";
        console.log(path);
        if (path == "Username or Password is wrong" || path == "Unauthorized Access") {
          $scope.usererror = path;
        }else {
          $location.path(path);
        }

    })


  }



}])
