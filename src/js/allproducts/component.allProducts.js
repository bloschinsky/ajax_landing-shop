.component("allProducts", {
	templateUrl: 'template/allproducts.html',
	controllerAs: 'vm',
	controller: function(appData, $timeout){
		this.products = appData.products;
		this.addToCart = appData.addToCart;
	
        this.productFilter = {type: ""};
        
		this.$onInit = function(){

			appData.getProducts().then(products => {this.products = products});

    		$(function(){
    			$('.carousel.carousel-slider').carousel({fullWidth: true});
                $('select').material_select();
            });
    	}

    	this.$postLink = function(){
    		    		$(function(){
    			$('.carousel.carousel-slider').carousel({fullWidth: true});
                $('select').material_select();
            });
    	}

	}
})