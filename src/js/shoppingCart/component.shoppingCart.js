.component("shoppingCart", {
	templateUrl: 'template/shoppingcart.html',
	controllerAs: 'vm',
	controller: function(appData){
		this.shoppingCartData = appData.shoppingCartData;
		this.removeFromCart = appData.removeFromCart;
		
		this.$onInit = function(){
    		$(function(){
                $('select').material_select();
                $('.modal').modal();
            });
    	}

    	this.itemCountAdd = function(item){
    		item.count++;
    		this.shoppingCartData.recountCart();
    	}

    	this.itemCountRemove = function(item){
    		if (item.count-1){
    		  item.count--;
    		  this.shoppingCartData.recountCart();
    		} else {
    		  this.initRemoveFromCart(item);
    		}
    	}

    	this.tempItemLink = {}

    	this.initRemoveFromCart = function(item){
    		  $('#modal1').modal('open');
    		  this.tempItemLink = item;
    	}

        this.checkout = function(){
            $('#modal2').modal('open');
        }

	}
});