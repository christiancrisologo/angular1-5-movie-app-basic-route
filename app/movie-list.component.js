(function () {
   "user strict";

   movieService=function($http){
       return $http.get("api/movies.json")
                .then(function(response){
                    return response.data;
                })
   } 
   
   
   mainController=function($http){
       console.log('movie list');
       var _t = this;        
        _t.$onInit=function(){
           movieService($http).then(function(movies){
               _t.movies=movies;
           })
        }
   } 
   
   angular.module('app')   
   .component('movieList',{   
       templateUrl:"app/movie-list.component.html",
       controllerAs:'vm',
       controller:["$http",mainController]
    })
}())