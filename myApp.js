// JavaScript Document
angular.module('myApp',[])
  .controller('myCtrl', ['$scope', function($scope) {
       $scope.sexes = ['Female', 'Male'];
       $scope.selection = $scope.sexes[0];
	   
	   $scope.name1='Name';
	   $scope.name2='Job Title';
	   $scope.name3='Tedious Task';
	   $scope.name4='Dirty Task';
	   $scope.name5='Celebrity';
	   $scope.name6='Useless Skill';
	   $scope.name7='Obnoxious Task';
	   $scope.name8='Huge Number';
	   $scope.name9='Objective';
  }]);