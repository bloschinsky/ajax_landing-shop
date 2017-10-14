.component("mainPage", {
	templateUrl: 'template/mainpage.html',
	controllerAs: 'vm',
	controller: function(appData, $timeout){
		this.products = appData.products;
		this.addToCart = appData.addToCart;
		//this.getProducts = appData.getProducts;


        this.productFilter = {type: ""};
        
        //console.log(this.products);

		this.$onInit = function(){

			function emulateResponce(){
			    function tramp(prod, products){
				    products = products.splice(0, products.length, ...prod);
			    };

			    appData.getProducts().then(products => {$timeout(function(){tramp(products, appData.products)}, 1500)});
			}


			//emulateResponce();

            // Real function >>>>

			appData.getProducts().then(products => {this.products = products});

    		$(function(){
                $('.parallax').parallax();
                $('select').material_select();
            });
    	}

	}
})