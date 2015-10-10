window.ax_utils = {
    
    zoom: function(imageClass) {

        $('.easyzoom').easyZoom();

        // Get an instance API
        var api1 = $easyzoom.filter('.' + imageClass).data('easyZoom');
    },
    scrollTop: function() {
        	$('html, body').animate({scrollTop: 0}, 600);
        	return false;
    }
};