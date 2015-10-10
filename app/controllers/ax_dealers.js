axrControllers
.controller('DealersController', 
    function($scope, $rootScope, axLocale, dealersAPIService) {
		// Localizations
		$scope.dealersTitle = axLocale.translate('dealers');
        
		/*$.get('data/dealers.json').success(function(response){
			$scope.dealersList = response;
		});*/
		
		$scope.loadDealers = function() {
			dealersAPIService.getDealers().success(function(response) {
				if (response.success) {
					$scope.dealersList = response.dealers;
				}
			});
		};
		
		$scope.loadDealers();
		
		$scope.createDealer = function(dealer) {
			dealersAPIService.createDealer(dealer).success(function(response) {
				if(response.success) {
					$scope.loadDealers();
				}
			});
			
		};
		
		$scope.updatecreateDealer = function(dealer) {
			dealersAPIService.updateDealer(dealer).success(function(response) {
				if(response.success) {
					$scope.loadDealers();
				}
			});
			
		};
		
		$scope.$watchCollection('blocks', function(newValue) {
        	if (newValue.length > 0) {
        		AXStyles.setBlocksStyle($rootScope.blocks);
        	}
	     });
		
		
});