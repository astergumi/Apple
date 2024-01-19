console.log('Работает');
jQuery(document).ready(function($){
	$('<style>'+
		'.scrollTop{ display:none; z-index:9999; position:fixed;'+
			'bottom:20px; left:95%; width: 33px; height: 33px;'+
			'background:url(img/up.png) 0 0 no-repeat; }' +
		'.scrollTop:{ background-position:0 -133px;}'
	+'</style>').appendTo('body');
	var
	speed = 550,
	$scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');		
	$scrollTop.click(function(e){
		e.preventDefault();
		$( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
	});

	//появление
	function show_scrollTop(){
		( $(window).scrollTop() > 330 ) ? $scrollTop.fadeIn(700) : $scrollTop.fadeOut(700);
	}
	$(window).scroll( function(){ show_scrollTop(); } );
	show_scrollTop();

 $(function () {
        $('.switch-btn').click(function () {
        	  
            $(this).toggleClass('switch-on');
            if ($(this).hasClass('switch-on')) {
                $(this).trigger('off.switch');
            } else {
                $(this).trigger('on.switch');
            }
        });
        $('.switch-btn').on('on.switch', function () {
        	$('body').css("backgroundColor", "black");
        	$('a,h2,h1').css("color", "white");
            $($(this).attr('data-id')).removeClass('bl-hide');
            document.getElementById('logoswitch').src='img/logow.png';
            document.getElementById('shoping').src='img/shopw.png';
			document.getElementById('searching').src='img/searchw.png';
        });

        $('.switch-btn').on('off.switch', function () {
        	$('body').css("backgroundColor", "white");
        	$('a,h2,h1').css("color", "black");
            $($(this).attr('data-id')).addClass('bl-hide');
            document.getElementById('logoswitch').src='img/logo.png';
            document.getElementById('shoping').src='img/shop.png';
			document.getElementById('searching').src='img/search.png';
		});
    });


});