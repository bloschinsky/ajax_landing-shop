.component("topNav", {
    templateUrl: 'template/topnav.html',
    controllerAs: 'vm',
    controller: function(appData){
    	this.shoppingCartData = appData.shoppingCartData;
    	this.$onInit = function(){
    		$(function(){
                $('.button-collapse').sideNav(
                	{ closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                      draggable: true
                    });
                $('.tooltipped').tooltip({delay: 50});
            });
    	}
    }
})