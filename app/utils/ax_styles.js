window.FONT_BASED_MENU_WIDTH = {'CopperPlate': 90, 'JosefinSans': 67, 'RobotoSlab': 80};

window.AXStyles = {
    
		BLOCKS : {
				productGallery: {selector: '#ax-products .product-gallery'},
				
				productDescription: {selector: '#ax-products .product-gallery .product-details'},
				
				productColor: {selector: '#ax-products .product-colors'},
				
				productGraphics: {selector: ' #ax-products .product-graphics'},
				
				productGraphicsColor: {selector: ' #ax-products .product-graphics-colors'},
				
				productFeatures: {selector: '#ax-products .product-features'},
				
				productsList: {selector: '#ax-products .products-list'},
				
				advantageAXR: {selector: '#ax-home #advantage-axr'},
				
				latestDesign: {selector: '#ax-home .latest-designs'},
				
				models: {selector: '#ax-home .models'},
				
				about: {selector: '#ax-about'},
				
				dealers: {selector: '#ax-dealers'},
				
				contacts: {selector: '#ax-contacts'},
				
				warranty: {selector: '#ax-warranty'}
		},
		

    
	setHeaderStyle: function(style) {
	    	STD_FONT_SIZE = 22;
	    	var backgroundColor = style.backgroundColor;
	    	var headerFont = 'headerFont';
	    	
	    	var fontSize = style.fontSize || STD_FONT_SIZE;
	    	
	    	//var submenuWidth = ((fontSize * standardSubmenuWidth) / STD_FONT_SIZE) ;  // 90px is default sub-menu width, 22px is default font-size, + 5px margin
	    	
	        $('header').css({'backgroundColor': backgroundColor});
	        $('#ax-header').css({'backgroundColor': backgroundColor});
	        $('.ax-navbar').css({'backgroundColor': backgroundColor});
	        $('.ax-navbar li').css({'backgroundColor': backgroundColor});
	        $('.ax-navbar li a').css({'fontFamily': headerFont, 'color': style.fontColor, 'fontSize': fontSize});
	        $('.ax-navbar li a').mouseenter(function() {
	        	$(this).css({'color': style.fontHoverColor, 'border-bottom-color': style.hoverBorderColor});
	        });
	        $('.ax-navbar li a').mouseleave(function() {
	        	$(this).css({'color': style.fontColor});
	        });
	        $('#products-menu').hover( function () {
	        	var productsMenu =  $('#products-menu').find('a');
		    	AXStyles.SUBMENU_WIDTH = productsMenu.width();
	        	$(this).css({ 'color': style.fontHoverColor});
	        	$(this).find("ul").css({'width': AXStyles.SUBMENU_WIDTH+'px'});
	        	$(this).find("li").css({'backgroundColor': backgroundColor});
	        	$(this).find("li a").css({
	        		'fontFamily': headerFont, 
	        		'color': style.fontColor, 
	        		'fontSize': (fontSize-5)
	        	});
	        	
	        });
	        
	    },
	    
	    setBlocksStyle: function(blocks) {
	    	$.each(blocks, function(index, block) {
	    		var blockSelector = AXStyles.BLOCKS[block.title].selector;
	    		$(blockSelector).css({
	    			'background-color': block.backgroundColor, 
	    			'color': block.descFontColor,
	    			'font-size': block.descFontSize,
	    		});
	    		
	    		$(blockSelector + ' .title').css({
	    			'border-bottom-color': block.borderColor, 
	    			'font-size': block.titleFontSize, 
	    			'font-family': 'titleFont', 
	    			'color': block.titleFontColor 
	    		});

	    		console.log(blockSelector);
	    	});
	    }

};