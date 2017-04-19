app.controller('viewSftpController',['$scope','$http','$location', function ($scope , $http , $location) {
  //for sent groups
  var url = $location.absUrl().split('/');//$location.absUrl();
  var urllength = url.length;
  url = url[urllength-1];
  console.log(url);
  var path1 = "/sentFiles";
  var getGroup2 = function () {
    $scope.sentGroups = "";
    //url = "notSentFiles";
    $http.get('/getNotSentSftpGroups').then(function (res) {
      var path = res.data
      if (path == "/login") {

        $location.path(path);
      }
      else {
        $scope.sentGroups = res.data;
      }
    })
  }


  var getGroup1 = function () {
    $scope.sentGroups = "";
    $http.get('/getSftpGroupHome').then(function (res) {
      var path = res.data
      if (path == "/login") {

        $location.path(path);
      }
      else {
        $scope.sentGroups = res.data;
      }
    })
  }

if (url == "sentFiles") {
  getGroup1();
}
else if (url == "notSentFiles") {
  getGroup2();
}

    // $scope.destroy = function () {
    //   $http.get('/logout').then(function (res) {
    //     //console.log(res.data);
    //     $location.path('/login');
    //   })
    //   // LogoutService.logout();
    //
    // }

    $scope.sort = function(keyname){
      $scope.sortKey = keyname;   //set the sortKey to the param passed
      $scope.reverse = !$scope.reverse; //if true make it false and vice versa
  }
}]);
