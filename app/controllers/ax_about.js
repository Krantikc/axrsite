axrControllers
.controller('AboutController', 
    function($scope, $rootScope, axLocale) {
		// Localizations
		$scope.aboutTitle = axLocale.translate('about');
		$scope.aboutUsP1 = axLocale.translate('aboutUsP1');
		$scope.aboutUsP2 = axLocale.translate('aboutUsP2');
		
		$scope.$watchCollection('blocks', function(newValue) {
        	if (newValue.length > 0) {
        		AXStyles.setBlocksStyle($rootScope.blocks);
        	}
	     });
	
});