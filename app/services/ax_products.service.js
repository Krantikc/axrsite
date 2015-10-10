axrServices.
factory('productAPIService', function($http){
	
	var productAPI = {};
	
	productAPI.getAllProducts = function() {
		return $http({
			method: 'GET',
			url: 'getAllProducts.do'
		});
	}
	
	productAPI.getProductByModel = function(productId) {
		return $http({
			url: 'getProductById.do',
			method: 'GET',
			params: {productId: productId},
		});
	}
	
	productAPI.getProductByModelColor = function(productId, productColorId) {
		return $http({
			method: 'GET',
			url: 'getProductGraphicsByColor.do',
			params: {productId: productId, productColorId: productColorId},
		});
	}
	
	productAPI.getProductByModelColorNGraphics = function(productId, productColorId, productGraphicsId) {
		return $http({
			method: 'GET',
			url: 'getProductGraphicsColorsByColorNGraphics.do',
			params: {productId: productId, productColorId: productColorId, productGraphicsId: productGraphicsId},
		});
	}
	
	
	
	productAPI.getProduct = function(productId, colorId, graphicsId, graphicsColorId) {
		return $http({
			method: 'GET',
			url: 'getProduct.do',
			params: {productId: productId, colorId: colorId, graphicsId: graphicsId, graphicsColorId: graphicsColorId},
		});
	}
	
	return productAPI;
});

