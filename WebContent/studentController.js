mainApp.controller("studentController", function($scope) {
	$scope.student = {
			firstName: "DarioTek",
			lastName: "Montecastro",
			fees:500,
			subjects:[
				{name:'Physics',marks:95},
				{name:'Chemistry',marks:95},
				{name:'Math',marks:100},
				{name:'English',marks:87},
				{name:'Tagalog',marks:90}
				],
			fullName: function() {
				//alert('test');
				
				var studentObject;
				studentObject = $scope.student;				
				return studentObject.firstName + " " + studentObject.lastName;
				
				//return $scope.student.firstName + " " + $scope.student.lastName;
			}
	};
});