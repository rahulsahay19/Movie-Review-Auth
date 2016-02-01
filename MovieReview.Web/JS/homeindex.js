//Home-Index file

/*function homeIndexController () {
    alert("Hello Angular");
}*/

(function () {
    "use strict";

    //Creating the controller and getting the existing Module
    angular.module("movieApp").controller("homeIndexController", homeIndexController);

    function homeIndexController($scope, $http) {

        //this will return the object from the function
        var vm = this;

        //Empty Collection
        $scope.data = [];

        //Making spinner on
        $('#loader').show();

        setTimeout(function (){
        //API Call
            $http.get('http://localhost:29609/api/movies')
                .then(function(result) {
                        //Success
                        angular.copy(result.data, $scope.data);
                    },
                    function() {
                        //Error
                        console.log('Unable to Fetch Data');
                    }).then(function() {
                    $('#loader').hide();
                });
        },1000);
    };
})();