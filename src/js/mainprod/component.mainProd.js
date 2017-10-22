.component("mainProd", {
    templateUrl: 'template/mainprod.html',
    controllerAs: 'vm',
    controller: function(appData){
    	this.products = appData.products;
      this.addToCart = appData.addToCart;
      
        this.$onInit = function(){
            appData.getProducts().then(products => {this.products = products});
            $('.parallax').parallax();

        }
    	
        this.$postLink = function(){

    	}
    }
})