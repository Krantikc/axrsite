
/*============================== Products List Controller ============================*/
axrControllers
.controller('ProductsController', 
    function($scope, $rootScope,  $stateParams, $http, axLocale, productAPIService) {
     // Localizations
    $scope.colorsTitle = axLocale.translate('colors');
    $scope.featuresTitle = axLocale.translate('features');
    $scope.graphicsTitle = axLocale.translate('graphics');
    $scope.graphicsColorsTitle = axLocale.translate('graphicsColors');
    
    ax_utils.scrollTop();
    
    productAPIService.getAllProducts().success(function(response){
    	$scope.productsList = response.productsList;
    }); 

	$scope.$watchCollection('blocks', function(newValue) {
    	if (newValue && newValue.length > 0) {
    		AXStyles.setBlocksStyle($rootScope.blocks);
    	}
     });
});


/*============================== Products Overview Controller ============================*/

axrControllers
.controller('ProductsOverviewController', 
    function($scope, $rootScope,  $stateParams, $http, $state, axLocale, productAPIService) {
    // Localizations
    $scope.colorsTitle = axLocale.translate('colors');
    $scope.featuresTitle = axLocale.translate('features');
    $scope.graphicsTitle = axLocale.translate('graphics');
    $scope.graphicsColorsTitle = axLocale.translate('graphicsColors');

    ax_utils.scrollTop();
    $scope.modelId = $stateParams.modelId;
    
    $scope.initMainProduct = function(product) {
    	$rootScope.selectedAngle = 'f';
        $rootScope.selectedGraphics = product.defaultGraphics;
        $rootScope.selectedGraphicsColor = product.defaultGraphicsColor;
    };
    productAPIService.getProductByModel($scope.modelId).success(function(response) {
    	$scope.product = response.product;
    	$scope.defaultProduct =  angular.copy($scope.product);
    	$scope.initMainProduct($scope.defaultProduct);
    	$scope.productColorsList = response.productColorsList;
    	
    	$.each($scope.productColorsList, function(i, productColor) {
    		if(productColor.productColorId === $scope.product.defaultColor.productColorId) {
    			$rootScope.selectedColor = productColor;
    		}
    	});
    	
        $scope.productGraphicsList = response.productGraphicsList;
    }); 
    
    $scope.productColorChange = function(productColorId) {
    	productAPIService.getProductByModelColor($scope.modelId, productColorId).success(function(response){
    		$scope.productGraphicsList = response.productGraphicsList;
    		$.each($scope.productGraphicsList, function(index, productGraphics) {
    			if (productGraphics.isDefaultGraphics) {
    				$scope.product = productGraphics;
    		    	$scope.defaultProduct =  angular.copy($scope.product);
    		    	$scope.initMainProduct($scope.defaultProduct);
    			}
    		});
        }); 
    };
    
    
    $scope.$watchCollection('blocks', function(newValue) {
    	if (newValue && newValue.length > 0) {
    		AXStyles.setBlocksStyle($rootScope.blocks);
    	}
     });
});


/*============================== Product Graphics Controller ============================*/

axrControllers
.controller('ProductsGraphicsController', 
    function($scope, $rootScope,  $stateParams, $http, $state, axLocale, productAPIService) {
    // Localizations
    $scope.colorsTitle = axLocale.translate('colors');
    $scope.featuresTitle = axLocale.translate('features');
    $scope.graphicsTitle = axLocale.translate('graphics');
    $scope.graphicsColorsTitle = axLocale.translate('graphicsColors');
    
    ax_utils.scrollTop();
    
    $scope.initMainProduct = function(product) {
    	$rootScope.selectedAngle = 'f';
        $rootScope.selectedColor = product.defaultColor;
        $rootScope.selectedGraphics = product.defaultGraphics;
        $rootScope.selectedGraphicsColor = product.defaultGraphicsColor;
    };
    
    $scope.modelId = $stateParams.modelId;
    $scope.colorId = $stateParams.colorId;
    $scope.graphicsId = $stateParams.graphicsId;
    $scope.graphicsColorId = $stateParams.graphicsColorId;

    productAPIService.getProduct($scope.modelId, $scope.colorId, $scope.graphicsId, $scope.graphicsColorId).success(function(response) {
    	$scope.product = response.product;
    	$scope.defaultProduct =  angular.copy($scope.product);
    	$scope.initMainProduct($scope.defaultProduct);
        $scope.productGraphicsList = response.productGraphicsList;
        $scope.productGraphicsColorsList = response.productGraphicsColorsList;
    }); 
    
    $scope.productGraphicsChange = function(productGraphicsId, productGraphicsColorId) {
    	productAPIService.getProduct($scope.modelId, $scope.colorId, productGraphicsId, productGraphicsColorId).success(function(response) {
        	$scope.product = response.product;
        	$scope.defaultProduct =  angular.copy($scope.product);
        	$scope.initMainProduct($scope.defaultProduct);
        	$scope.productGraphicsColorsList = response.productGraphicsColorsList;
        }); 
    };
    
    $scope.$watchCollection('blocks', function(newValue) {
    	if (newValue && newValue.length > 0) {
    		AXStyles.setBlocksStyle($rootScope.blocks);
    	}
     });
});