$(document).ready(function() {
	$("a.fancypdf").fancybox({
		 openEffect  : 'none',
	    closeEffect : 'none',
	    iframe : {
	        preload: false
	    }
	});
	$(".racing, .cabinet").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none',
			helpers: {
				title	: {
				type: 'inside',
				position: 'top'
			}
		}
	});
	$(".fancybox-thumb, .cross").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'inside',
				position: 'top'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
  	$(".single").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'over',
    			position : 'top'
    		}
    	}
    });
});
