
checkIfLoggedIn();

function checkIfLoggedIn(){
    
    if(!sessionStorage.getItem("user")){

        window.location.href="file:///C:/Users/bilge.kurtoglu/Documents/egitim/angularjs_tutorial/tasklist/index.html#!"

    }


}

var app = angular.module('myApp', []);
        app.controller('myController', function($scope) {
            $scope.tasks = [
                {model : "Guitar", period : "7"},
                {model : "bicycle", period : "5"},
                {model : "piano", period : "3"}
            ];
        });