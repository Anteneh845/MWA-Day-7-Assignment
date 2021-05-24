angular
.module("musicApp",['ngRoute'])
.config(appConfig);

function appConfig($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"../templates/music.html",
        controller:"MusicController",
        controllerAs:"MusicCtrl"
    })
    .otherwise({
        redirectTo:"/"
    })
}