axrApp = angular.module('AXRHelmets', ['ui.router', 'AXRControllers', 'AXRServices']);

axrApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        })
        .state('products', {
            url: '/products',
            templateUrl: 'partials/products.html',
            controller: 'ProductsController'
        })
        .state('products_overview', {
            url: '/products/overview/:modelId',
            templateUrl: 'partials/products.overview.html',
            controller: 'ProductsOverviewController'
        })
        .state('products_graphics', {
            url: '/products/graphics/:modelId/:colorId/:graphicsId/:graphicsColorId',
            templateUrl: 'partials/products.graphics.html',
            controller: 'ProductsGraphicsController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html',
            controller: 'AboutController'
        })
        .state('warranty', {
            url: '/warranty',
            templateUrl: 'partials/warranty.html',
            controller: 'WarrantyController'
        })
        .state('dealers', {
            url: '/dealers',
            templateUrl: 'partials/dealers.html',
            controller: 'DealersController'
        })
        .state('contacts', {
            url: '/contacts',
            templateUrl: 'partials/contacts.html',
            controller: 'ContactsController'
        }); 
});

axrControllers = angular.module('AXRControllers', []);
axrServices = angular.module('AXRServices', []);