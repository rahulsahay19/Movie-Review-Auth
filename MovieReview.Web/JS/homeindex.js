//Home-Index file

/*function homeIndexController () {
    alert("Hello Angular");
}*/

(function() {
    "use strict";

    //Creating the controller and getting the existing Module
    angular.module("movieApp").controller("homeIndexController", homeIndexController);

   function homeIndexController() {

       //this will return the object from the function
       var vm = this;
  
       //assign some value to the viewmodel
       vm.name = "Rahul Sahay";
   };
})();