.component("mainPage", {
	templateUrl: 'template/mainpage.html',
	controllerAs: 'vm',
	controller: function(appData){
		this.products = appData.products;
		this.addToCart = appData.addToCart;

		this.$onInit = function(){
    		$(function(){
    			$('.carousel.carousel-slider').carousel({fullWidth: true});
                //$('.parallax').parallax();
                $('select').material_select();
            });
    	}

    	this.$postLink = function(){
    		$(function(){
    			$('.carousel.carousel-slider').carousel({fullWidth: true});
                //$('.parallax').parallax();
                $('select').material_select();
            });
    	}

	}
})