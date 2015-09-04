/// <reference path='../bower_components/DefinitelyTyped/jquery/jquery.d.ts' />
/// <reference path='../bower_components/DefinitelyTyped/angularjs/angular.d.ts' />
/// <reference path='../bower_components/DefinitelyTyped/d3/d3.d.ts' />
var Gruntstarter;
(function (Gruntstarter) {
    var Grunt = (function () {
        function Grunt() {
            throw Error('Not implemented.');
        }
        Grunt.controller = function ($scope, $http) {
            $scope.info = "Grunt as an automation tool.";
        };
        return Grunt;
    })();
    Gruntstarter.Grunt = Grunt;
    var Boxstarter = (function () {
        function Boxstarter() {
            throw Error('Not implemented.');
        }
        Boxstarter.controller = function ($scope, $http) {
            $scope.info = "Boxstarter as an automation tool.";
        };
        return Boxstarter;
    })();
    Gruntstarter.Boxstarter = Boxstarter;
    function loadPieChart() {
        var data = [1, 6];
        var width = 960;
        var height = 500;
        var outerRadius = height / 2 - 30;
        var innerRadius = outerRadius / 3;
        var cornerRadius = 10;
        var pie = d3.layout.pie();
        var arc = d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius);
        var svg = d3.select("#d3").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        var path = svg.selectAll("path").data(data).enter().append("path");
        var ease = d3.ease("cubic-in-out");
        var duration = 20000;
        d3.timer(function (elapsed) {
            var t = ease(1 - Math.abs((elapsed % duration) / duration - .5) * 2);
            path.data(pie.padAngle(t * 2 * Math.PI / data.length)(data)).attr("d", arc);
        });
    }
    Gruntstarter.loadPieChart = loadPieChart;
})(Gruntstarter || (Gruntstarter = {}));
var app = angular.module('GruntstarterApp', []);
app.controller('GruntController', Gruntstarter.Grunt.controller);
app.controller('BoxstarterController', Gruntstarter.Boxstarter.controller);
$(document).ready(function () {
    Gruntstarter.loadPieChart();
});
//# sourceMappingURL=gruntstarter.js.map