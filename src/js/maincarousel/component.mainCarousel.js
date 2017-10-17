.component("mainCarousel", {
    templateUrl: 'template/maincarousel.html',
    controllerAs: 'vm',
    controller: function(appData){
    	this.shoppingCartData = appData.shoppingCartData;
    	
        this.$postLink = function(){
                //$('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
                $('.slider').slick({
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: true,
                    infinite: true,
                    speed: 500,
                    fade: true,
                    cssEase: 'linear'
                });
                $('.parallax').parallax();
    	}
    }
})