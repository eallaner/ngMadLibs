// JavaScript Document
angular.module('myApp',['ngMessages'])
  .controller('myCtrl', ['$scope', function($scope) {
       $scope.sexes = ['Female', 'Male'];
       $scope.selection = $scope.sexes[0];
       $scope.switchViews = true;
	   
	   $scope.name1='';
	   $scope.name2='';
	   $scope.name3='';
	   $scope.name4='';
	   $scope.name5='';
	   $scope.name6='';
	   $scope.name7='';
	   $scope.name8='';
	   $scope.name9='';
	   
	   $scope.submit = function(){
	            $scope.switchViews = false;
	   };
       
	   $scope.reset = function(){
        	    $scope.name1='';
	   			$scope.name2='';
	   			$scope.name3='';
	   			$scope.name4='';
	    	    $scope.name5='';
	   			$scope.name6='';
	   			$scope.name7='';
	   			$scope.name8='';
	   			$scope.name9='';
        	    $scope.switchViews = true;
       };
  }]);