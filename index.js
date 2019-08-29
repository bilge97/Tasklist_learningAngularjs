var app = angular.module('myApp', []);
    app.controller('controller', function($scope , $http , $location) {
        
        $scope.user={};
        $scope.handleRegister = function(){
            console.log("heey");
            console.log($scope.user);
            $http({
                method  : 'POST',
                url     : 'http://localhost:8080/user',
                data    :  JSON.stringify($scope.user),
                headers : { 'Content-Type': 'application/json' } 
          }).then(function mySuccess(response) {
                console.log(response);
            }, function myError(response) {
                    console.log(response);
            })
       
         }

         $scope.handleLogin = function(){
             $http.get("http://localhost:8080/user/"+ $scope.user.username )
            .then(function(response) {
                if(response.data.length==0)
                {
                    alert("wrong")
                }
                //console.log(response)
                else{

                    sessionStorage.setItem("user",response.username);
                    alert("true")
                    window.location.href = "file:///C:/Users/bilge.kurtoglu/Documents/egitim/angularjs_tutorial/tasklist/home.html#!"
                    
                }
            }).catch((response)=>{
                console.log(response)
                alert("session closed")
                
            });

         }
    });