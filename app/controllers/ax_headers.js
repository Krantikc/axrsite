axrControllers
.controller('HeadersController', 
    function($scope, $rootScope,  $stateParams, axLocale, $state, productAPIService, componentsAPIService, blocksAPIService) {
        
    // Localizations    
    $scope.home = axLocale.translate('home');
    $scope.about = axLocale.translate('about');
    $scope.products = axLocale.translate('products');
    $scope.warranty = axLocale.translate('warranty');
    $scope.dealers = axLocale.translate('dealers');
    $scope.contactUs = axLocale.translate('contactUs');
    
    productAPIService.getAllProducts().success(function(response){
    	$rootScope.productsList = response.productsList;
    });
    
    componentsAPIService.getComponents().success(function(response) {
    	if (response.success) {
    		$scope.components = response.components;
    		
    		$.each($scope.components, function(index, component) {
    			if(component.name.toLowerCase() === 'header') {
    				$scope.header = component;
    			}
    			
    		});
    		var style = $scope.header;
    		
    		window.AXStyles.setHeaderStyle(style);
    	}
    });
    
   // var style = { headerFontSize: 22, headerFontFamily: 'RobotoSlab'};
    
    blocksAPIService.getBlocks().success(function(response) {
    	if(response.success) {
    		$rootScope.blocks = response.blocks;
    		window.AXStyles.setBlocksStyle($rootScope.blocks);
    	}
    });
    

});

