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
	            $scope.name1=this.name1;
	   			$scope.name2=this.name2;
	   			$scope.name3=this.name3;
	   			$scope.name4=this.name4;
	   			$scope.name5=this.name5;
	   			$scope.name6=this.name6;
	   			$scope.name7=this.name7;
	   			$scope.name8=this.name8;
	   			$scope.name9=this.name9;
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