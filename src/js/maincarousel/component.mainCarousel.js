.component("mainCarousel", {
    templateUrl: 'template/maincarousel.html',
    controllerAs: 'vm',
    controller: function(appData){
    	this.shoppingCartData = appData.shoppingCartData;
    	
        this.$postLink = function(){
                $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
                $('.parallax').parallax();
    	}
    }
})