.component("mainCarousel", {
    templateUrl: 'template/maincarousel.html',
    controllerAs: 'vm',
    controller: function(appData){
    	this.products = appData.products;
    
      this.$onInit = function(){
          appData.getProducts().then(products => {this.products = products});
              $('.parallax').parallax();
      }
    
      this.$postLink = function(){
            /* $('.carousel.carousel-slider').slick({
              dots: true, 
              infinite: true, 
              speed: 500, 
              fade: true, 
              cssEase: 'linear',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000
            });
            */
    	}
    }
})