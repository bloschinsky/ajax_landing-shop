.component("footerBlock", {
    templateUrl: 'template/footerblock.html',
    controllerAs: 'vm',
    controller: function(){
    	this.$onInit = function(){
    		$(function(){
                $('.button-collapse').sideNav();
            });
    	}
    }
})