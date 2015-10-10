ax_Home = {
	SLIDER_TRANSITIONS: {
		'shiftLRF': {$Duration:1200,x:1,$Easing:{$Left:$JssorEasing$.$EaseInOutQuart,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Brother:{$Duration:1200,x:-1,$Easing:{$Left:$JssorEasing$.$EaseInOutQuart,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}}, // Shift Left to Right (fade)
		'shiftLR': {$Duration:1200,x:1,$Easing:{$Left:$JssorEasing$.$EaseInOutQuart},$Brother:{$Duration:1200,x:-1,$Easing:{$Left:$JssorEasing$.$EaseInOutQuart}}}, // Shift Left to Right
		'shiftTB': {$Duration:1200,y:1,$Easing:{$Top:$JssorEasing$.$EaseInOutQuart,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$Brother:{$Duration:1200,y:-1,$Easing:{$Top:$JssorEasing$.$EaseInOutQuart,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2}}, //  Shift Top to Bottom
		'switch': {$Duration:1400,x:0.25,$Zoom:1.5,$Easing:{$Left:$JssorEasing$.$EaseInWave,$Zoom:$JssorEasing$.$EaseInSine},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:1400,x:-0.25,$Zoom:1.5,$Easing:{$Left:$JssorEasing$.$EaseInWave,$Zoom:$JssorEasing$.$EaseInSine},$Opacity:2,$ZIndex:-10}}, //Switch
		'flyTwins': {$Duration:1500,x:0.3}, // Fly twin
		'returnLR': {$Duration:1200,x:1,$Delay:40,$Cols:6,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:{$Left:$JssorEasing$.$EaseInOutQuart,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:1200,x:1,$Delay:40,$Cols:6,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:{$Top:$JssorEasing$.$EaseInOutQuart,$Opacity:$JssorEasing$.$EaseLinear},$Opacity:2,$ZIndex:-10,$Shift:-100}}, // Return Left to Right
		'rotateAxis': {$Duration:1200,x:0.25,y:0.5,$Rotate:-0.1,$Easing:{$Left:$JssorEasing$.$EaseInQuad,$Top:$JssorEasing$.$EaseInQuad,$Opacity:$JssorEasing$.$EaseLinear,$Rotate:$JssorEasing$.$EaseInQuad},$Opacity:2,$Brother:{$Duration:1200,x:-0.1,y:-0.7,$Rotate:0.1,$Easing:{$Left:$JssorEasing$.$EaseInQuad,$Top:$JssorEasing$.$EaseInQuad,$Opacity:$JssorEasing$.$EaseLinear,$Rotate:$JssorEasing$.$EaseInQuad},$Opacity:2}}, // Rotate Axis
		'squares': {$Duration:1800,$Delay:30,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$FlyDirection:5,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Left:$JssorEasing$.$EaseInOutSine,$Top:$JssorEasing$.$EaseOutWave,$Clip:$JssorEasing$.$EaseInOutQuad},$ScaleHorizontal:1,$ScaleVertical:0.2,$Outside:true,$Round:{$Top:1.3}}, // Squares
		'fadeStairs': {$Duration:800,$Delay:30,$Cols:8,$Rows:4,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Opacity:2},
		'flutterOutsideInWind': {$Duration:1800,x:1,y:.2,$Delay:30,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[.3,.7],$Top:[.3,.7]},$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Left:$JssorEasing$.$EaseInOutSine,$Top:$JssorEasing$.$EaseOutWave,$Clip:$JssorEasing$.$EaseInOutQuad},$Outside:true,$Round:{$Top:1.3}}
	},
	CAPTION_TRANSITIONS: {
		'left': {$Duration:1200,x:0.6,$Easing:{$Left:$JssorEasing$.$EaseInOutBack},$Opacity:2},
		'right': {$Duration:1200,x:-0.6,$Easing:{$Left:$JssorEasing$.$EaseInOutBack},$Opacity:2},
		'top': {$Duration:1200,y:0.6,$Easing:{$Top:$JssorEasing$.$EaseInOutBack},$Opacity:2},
		'bottom': {$Duration:1200,y:-0.6,$Easing:{$Top:$JssorEasing$.$EaseInOutBack},$Opacity:2},
		'topLeft': {$Duration:1200,x:0.6,y:0.6,$Easing:{$Left:$JssorEasing$.$EaseInOutBack,$Top:$JssorEasing$.$EaseInOutBack},$Opacity:2},
		'topRight': {$Duration:1200,x:-0.6,y:0.6,$Easing:{$Left:$JssorEasing$.$EaseInOutBack,$Top:$JssorEasing$.$EaseInOutBack},$Opacity:2},
		'bottomLeft': {$Duration:1200,x:0.6,y:-0.6,$Easing:{$Left:$JssorEasing$.$EaseInOutBack,$Top:$JssorEasing$.$EaseInOutBack},$Opacity:2},
		'bottomRight': {$Duration:1200,x:-0.6,y:-0.6,$Easing:{$Left:$JssorEasing$.$EaseInOutBack,$Top:$JssorEasing$.$EaseInOutBack},$Opacity:2}
	},
	CAPTION_POSITIONS: {
		'bottomLeft': {marginLeft:'8%', marginTop: '30%'}, // bottom left

		'topLeft': {marginLeft:'8%', marginTop: '5%'}, // top left

		'bottomRight': {marginLeft:'80%', marginTop: '30%'},  // bottom right

		'topRight': {marginLeft:'80%', marginTop: '5%'}, // top right

		'topCenter': {marginLeft:'40%', marginTop: '5%'}, // top center

		'middleCenter': {marginLeft:'40%', marginTop: '18%'}, // middle center

		'bottomCenter': {marginLeft:'40%', marginTop: '30%'}, // bottom center
	}
};

axrControllers
.controller('HomeController', 
    function($scope, $rootScope,  $http, axLocale, homeAPIService) {
        console.log('home');
        // Localizations
        $scope.advantageAXRTitle = axLocale.translate('advantageAXR');
        $scope.advantageDescriptionText = axLocale.translate('advantageDescription');
        $scope.latestDesignsTitle = axLocale.translate('latestDesigns');
        $scope.modelsTitle = axLocale.translate('models');
               
        
        $scope.latestDesigns = [{image:'images/latest-designs/1.jpg'},{image:'images/latest-designs/2.jpg'},{image:'images/latest-designs/3.jpg'},{image:'images/latest-designs/4.jpg'}];
        
        
        
       /* $http.get('data/slider-data.json').success(function(response) {	
            $scope.slides = response;
        });*/
        
        $scope.getSlides = function() {
	        homeAPIService.getSlides().success(function(response) {
	        	if (response.success) {
	        		$scope.slidesData = response.slidesData;
	        		
	        		
	        	}
	        });
        };
        
        $scope.getSlides();
        
        $scope.scaleSlider = function() {
		  var bodyWidth = document.body.clientWidth;
		  if (bodyWidth)
			  $scope.imageSlider.$ScaleWidth(Math.min(bodyWidth, 1920));
		  else
		      window.setTimeout(ScaleSlider, 30);
        }
        
        $(window).bind("load", $scope.scaleSlider);
        $(window).bind("resize", $scope.scaleSlider);
        $(window).bind("orientationchange", $scope.scaleSlider);
        $scope.startSlider = function(slides) {
        	var _SlideshowTransitions = [];                                      
        	$.each(slides, function(index, slide){
        		_SlideshowTransitions.push(ax_Home.SLIDER_TRANSITIONS[slide.slide.transition]);
        	});
             var options = {
                 $AutoPlay: true,
                 $DragOrientation: 3,  
                 $PauseOnHover: 0,
                 $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
                     $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                     $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                     $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                     $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                 },
                 $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
                     $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
                     $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                     $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
                     $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                     $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                     $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                     $SpacingX: 20,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                     $SpacingY: 10,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                     $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                 },
                 $SlideshowOptions: {
                     $Class: $JssorSlideshowRunner$,
                     $Transitions: _SlideshowTransitions,
                     $TransitionsOrder: 1,
                     $ShowLink: true
                 },
                 $CaptionSliderOptions: {
                     $Class: $JssorCaptionSlider$,
                     $CaptionTransitions: ax_Home.CAPTION_TRANSITIONS,
                     $PlayInMode: 1,
                     $PlayOutMode: 3
                 }
             };
             $scope.imageSlider = new $JssorSlider$('image-slider', options);
             $scope.scaleSlider();
             
             $.each($scope.slidesData, function(i, slideDetails) {
     			$.each(slideDetails.captions, function(j, captionDetails) {
     				var captionPosValue = ax_Home.CAPTION_POSITIONS[captionDetails.position];
     				$scope.slidesData[i].captions[j].positionValue = captionPosValue;
     				
     				
     				$('#caption' + (j+1) + '-' + $scope.slidesData[i].slide.slideId).css(captionPosValue);
     				
     				//$('#caption1-'+$scope.slidesData[i].slide.slideId).css({marginLeft: '50%'});
     			});
     		});
        };
        
  /*      $http.get('data/latestProducts.json').success(function(response) {	
            $scope.latestProducts = response;
        });*/
        
        $scope.getLatestDesigns = function() {
			homeAPIService.getLatestDesigns().success(function(response) {
				if (response.success) {
					$scope.latestProducts = response.latestDesigns;
				}
			});
		};
		
		$scope.getLatestDesigns();
        
		$scope.$watchCollection('blocks', function(newValue) {
        	if (newValue.length > 0) {
        		AXStyles.setBlocksStyle($rootScope.blocks);
        	}
	     });
});
