.factory("appData", function($http){
  
    var shoppingCart = [];

	  var shoppingCartData = {
    		                    shoppingCart: shoppingCart,
    		                    cartSize: 0,
    		                    fullCost: 0,
    		                    recountCart: recountCart
    		                   }

  	//get products part

  	var products = [];

  	function getProducts(){
  		return $http.get("products.json").then(function(response){
  		        return response.data;
                });
  		
            //return $http.get("products.json").then(function(response){
              //setTimeout(pasteProd, 1000, response);
                //pasteProd(response);
              //console.log(response.data);
              //return response.data;
                //products = products.splice(0, products.length, ...response.data);
                //products = response.data.slice();
                //console.log(products);
        //        });
  	}
  	
  	function cartItemCreate(item){
  		var cartItem = {product: item,
  		                count: 1}
  		
  		shoppingCart.push(cartItem);
  		
  	}

  	function addToCart(product){
  		let foundProduct = false;
  		
  		for (let i = 0; i < shoppingCart.length; i++){
  			
  			if (shoppingCart[i].product.title == product.title){
  				shoppingCart[i].count += 1;
  				foundProduct = true;
  				break;
  			}
  		}

  		if (!foundProduct){
  			cartItemCreate(product);
  		}

  		recountCart();
  		console.log(shoppingCart);  		
  	}

  	function removeFromCart(item){
  		console.log("init");
  		for (let i = 0; i < shoppingCart.length; i++) {
  			console.log("work");
  			if (shoppingCart[i].product.title === item.product.title) {
  				shoppingCart.splice(i, 1);
  				recountCart();
  				break;
  			}

  		}

  	}

  	function getCartSize(){
  		let cartSize = 0;
  		shoppingCart.forEach((element) => cartSize += element.count);
  		return cartSize;
  	}

  	function getFullCost(){
  		let fullCost = 0;
  		shoppingCart.forEach((element) => fullCost += element.count * element.product.price );
  		return fullCost;
  	}

  	function recountCart(){
  		shoppingCartData.cartSize = getCartSize();
  		shoppingCartData.fullCost = getFullCost();
  	}


  return {
  	products: products,
  	shoppingCartData: shoppingCartData,
  	addToCart: addToCart,
  	removeFromCart: removeFromCart,
  	getProducts: getProducts
  }

})