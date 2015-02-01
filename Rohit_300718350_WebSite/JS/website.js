var website = angular.module('website', ['ngRoute']);


website.service("patientList", function ($http, $q) {
    var defferred = $q.defer();
    $http.get('patient.json').then(function (data) {
        defferred.resolve(data);
    });
    this.getPlayers = function () {
        return defferred.promises;
    }
});
website.config(function ($routeProvider) {
    $routeProvider
    .when('/', {

        templateUrl: '../views/home.html',
    controller : 'mainController'
    })
    .when('/about', {
        
        templateUrl: '../views/about.html',
        controller : 'aboutController'
        
    })
     .when('/data', {
        
        templateUrl: '../views/patientList.html',
        controller: 'dataController'
    })
      .when('/addPatient', {
        
        templateUrl: '../views/PatientDetails.html',
        controller: 'dataController'
    })

    .otherwise({
        redirectTo: '/'
    });

});
website.controller('MainCtrl', function ($scope) {
   
    
    
  
});

website.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Home';
});
website.controller('aboutController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'About Us';
});
website.controller('dataController', function ($scope, $http) {
    
    $http.get("patient.json")
  .success(function (response) { $scope.patients = response; });
    
    $scope.addCustomer = function () {
        $scope.patients.push({ fname : $scope.newPatient.name ,  lname: $scope.newPatient.lname ,  pnumber: $scope.newPatient.number ,  date: $scope.newPatient.date ,  status: $scope.newPatient.status });
        $scope.newPatient.name = null;
        $scope.newPatient.lname = null;
        $scope.newPatient.number = null;
        $scope.newPatient.date = null;
    };
    
   
       
    
});




     