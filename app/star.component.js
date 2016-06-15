(function(){
   "user strict";
   _controller = function(){
        var _t=this;
        _t.$onInit=function(){
             _t.stars=new Array(_t.rating);
        }
        _t.$onChanges=function(v){
            _t.stars=new Array(_t.rating);
        }
   }
   angular.module('app')
   .component("starComponent",{
       bindings:{
           rating:"<"           
       },
       transclude:true,
       templateUrl:"app/star.component.html",
       controllerAs:"vm",
       controller:_controller
   }) 
}())