.config(function($stateProvider, $urlRouterProvider, $locationProvider){
     //$locationProvider.html5Mode(true);
     $locationProvider.hashPrefix('');

     $urlRouterProvider.otherwise('/');

     $stateProvider
        .state('main',{
          url: '/',
          component: "mainPage"
        })

        .state('shoppingCart',{
          url: '/shoppingcart',
          component: "shoppingCart"
        })

        .state('products',{
          url: '/products',
          component: 'allProducts'
        })


})