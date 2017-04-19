app.controller('addNewGroupDetails',['$scope','$http','$location',function($scope,$http,$location) {
  $scope.saveNewGroupDetails = function () {
    $scope.sub = $scope.sub==""?"":$scope.sub;
    $scope.insertdetails = { carrier:$scope.carrier,employer:$scope.employer,outbound:$scope.outbound,user:$scope.user,host:$scope.host,
      pwd:$scope.pwd,port:$scope.port,folder:$scope.folder,email:$scope.email,sub:$scope.sub,protocol:$scope.protocol,issent:$scope.issent,isActive:$scope.isActive,ismulti:$scope.ismulti};

    $http.post('/addNewGroupDetails',$scope.insertdetails).then(function (res) {
          var data = res.data;
          console.log(data);
    })
  }

}])
