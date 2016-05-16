describe('Testing Angular JS test suite', function() {

	beforeEach(module('myApp'));

	describe('Testing Angular Js Controller', function(){
		var scope,ctrl;
		
		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();
				ctrl = $controller('testCtrl', {$scope:scope});
			}));

		afterEach(function() {
			//Cleanup Code
		});

		it('should initialize the title in the scope', function(){
			expect(scope.title).toBeDefined();
			expect(scope.title).toBe("test angular js controller with karma js and jasmine ");
		});
	});
});