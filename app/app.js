(function () {
    "use strict";
    angular.module("app",["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/home",{
                template:"<home-page></home-page>"
            })
            .when("/list",{
                template:"<movie-list></movie-list>"
            })
            .when("/manage",{
                template:"<manage-movie></manage-movie>"
            })
            .when("/about",{
                template:"<about-page></about-page>"
            })
            .otherwise({redirectTo:"/home"});
    })
    
}());