/// <reference path='../bower_components/DefinitelyTyped/jquery/jquery.d.ts' />
/// <reference path='../bower_components/DefinitelyTyped/angularjs/angular.d.ts' />
/// <reference path='../bower_components/DefinitelyTyped/d3/d3.d.ts' />

namespace Gruntstarter {
	export class Grunt {
		constructor() {
			throw Error('Not implemented.');
		}
		static controller($scope, $http): void {
			$scope.info = "Grunt as an automation tool.";
		}
	}
	export class Boxstarter {
		constructor() {
			throw Error('Not implemented.');
		}
		static controller($scope, $http): void {
			$scope.info = "Boxstarter as an automation tool.";
		}
	}
	export function loadPieChart(): void {
		var data: Array<number> = [1, 6];
		var width: number = 940;
		var height: number = 500;
		
		var outerRadius: number = height / 2 - 30;
		var innerRadius: number = outerRadius / 3;
		var cornerRadius: number = 10;
		
		var pie: d3.layout.Pie<number> = d3.layout.pie();
		var arc: any = d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius);
		
		var svg: d3.Selection<any> = d3.select("#d3").append("svg")
			.attr("width", width)
			.attr("height", height)
			.append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
		
		var path: d3.Selection<any> = svg.selectAll("path").data(data).enter().append("path");
		var ease: Function = d3.ease("cubic-in-out");
		var duration: number = 20000;
		
		d3.timer(<any>function(elapsed) {
			var t: number = ease(1 - Math.abs((elapsed % duration) / duration - .5) * 2);
			path.data(pie.padAngle(t * 2 * Math.PI / data.length)(data)).attr("d", <any>arc);
		});
	}
}

var app: ng.IModule = angular.module('GruntstarterApp', []);
app.controller('GruntController', Gruntstarter.Grunt.controller);
app.controller('BoxstarterController', Gruntstarter.Boxstarter.controller);

$(document).ready(function() {
	Gruntstarter.loadPieChart();
});
