/// <reference path="../bower_components/DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../bower_components/DefinitelyTyped/d3/d3.d.ts" />
declare module Gruntstarter {
    class Grunt {
        constructor();
        static controller($scope: any, $http: any): void;
    }
    class Boxstarter {
        constructor();
        static controller($scope: any, $http: any): void;
    }
    function loadPieChart(): void;
}
declare var app: ng.IModule;
