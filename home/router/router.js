app.config(['$stateProvider','$locationProvider','$urlRouterProvider',function ($stateProvider,$locationProvider,$urlRouterProvider) {

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requirebase: false
  // });
   $locationProvider.hashPrefix("");
  $stateProvider
    .state('Login',{
      url:'/login',
      templateUrl:'/views/login.html',
      controller:'loginController'
    })
    .state('Home',{
      url:'/home',
      templateUrl:'/views/home.html',
      controller:'homeController'
    })
    .state('SentFiles',{
      url:'/sentFiles',
      templateUrl:'/views/viewsftpgroups.html',
      controller:'viewSftpController'
    })
    .state('NotSentFiles',{
      url:'/notSentFiles',
      templateUrl:'/views/viewsftpgroups.html',
      controller:'viewSftpController'
    })
    .state('ProcessXml',{
      url:'/processXml',
      templateUrl:'/views/processXml.html',
      //controller:'processXmlController'
    })
    .state('Logout',{
      url:'/login',
      templateUrl:'/views/login.html',
      controller:'loginController'
    })

    $urlRouterProvider.otherwise('/login')
     $locationProvider.html5Mode(true)
}])
