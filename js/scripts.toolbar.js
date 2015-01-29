$('#mode-simple').click(function(e){
	e.preventDefault();
	$('#selector').attr('data-selection','simple');
	$('#selector-text').html('Single Tile');
});

$('#mode-adhoc').click(function(e){
	e.preventDefault();
	$('#selector').attr('data-selection','adhoc');
	$('#selector-text').html('Multi Tile');
});

$('#mode-gremlin').click(function(e){
	e.preventDefault();
	$('#selector').attr('data-selection','gremlin');
	$('#selector-text').html('All Tiles (Gremlin)');
});

$('#mode-column').click(function(e){
	e.preventDefault();
	$('#selector').attr('data-selection','column');
	$('#selector-text').html('Column Tiles');
});

$('#mode-row').click(function(e){
	e.preventDefault();
	$('#selector').attr('data-selection','row');
	$('#selector-text').html('Row Tiles');
});

$('#clear').click(function(e){
	$('.selected').removeClass('selected');
	$('#summary-failures').html(defaultSummary());
	$('#details-content').html(defaultData());
});

$('#front-view').click(function(e){
	e.preventDefault();
	$('#zoom-2 .tile').removeClass('right').addClass('left');
	$('#zoom-3 .tile-general').removeClass('right').addClass('left');
	$(this).addClass('botton-selected');
	$('#rear-view').removeClass('botton-selected');
	$('#video-view').removeClass('botton-selected');
	
	$('.video').hide();	
	$('.active').removeClass('no-background');
	
	$('#zoom-1 .gremlins').css('left','160px');
	$('#zoom-1 .peripherals').css('left','300px');
	$('#zoom-1 .arrow').css('left','185px');
	$('#zoom-1 .peripheral').css('float','left');
	
	$('#zoom-2 .gremlins').css('left','160px');
	$('#zoom-2 .peripherals').css('left','300px');
	$('#zoom-2 .arrow').css('left','185px');
	$('#zoom-2 .peripheral').css('float','left');
	
	$('#zoom-3 .gremlins').css('left','160px');
	$('#zoom-3 .peripherals').css('left','500px');
	$('#zoom-3 .arrow').css('left','240px');
	$('#zoom-3 .peripheral').css('float','left');
});

$('#rear-view').click(function(e){
	e.preventDefault();
	$('#zoom-2 .tile').removeClass('left').addClass('right');
	$('#zoom-3 .tile-general').removeClass('left').addClass('right');
	$('#front-view').removeClass('botton-selected');
	$(this).addClass('botton-selected');
	$('#video-view').removeClass('botton-selected');
	
	$('.video').hide();	
	$('.active').removeClass('no-background');
	
	$('#zoom-1 .gremlins').css('left','350px');
	$('#zoom-1 .peripherals').css('left','160px');
	$('#zoom-1 .arrow').css('left','375px');
	$('#zoom-1 .peripheral').css('float','right');
	
	$('#zoom-2 .gremlins').css('left','350px');
	$('#zoom-2 .peripherals').css('left','160px');
	$('#zoom-2 .arrow').css('left','375px');
	$('#zoom-2 .peripheral').css('float','right');
	
	$('#zoom-3 .gremlins').css('left','600px');
	$('#zoom-3 .peripherals').css('left','160px');
	$('#zoom-3 .arrow').css('left','680px');
	$('#zoom-3 .peripheral').css('float','right');
});

$('#video-view').click(function(e){
	e.preventDefault();
	$('#zoom-2 .tile').removeClass('right').addClass('left');
	$('#zoom-3 .tile-general').removeClass('right').addClass('left');
	$('#front-view').removeClass('botton-selected');
	$('#rear-view').removeClass('botton-selected');
	$(this).addClass('botton-selected');	
	
	$('.video').show();	
	$('.active').addClass('no-background');
	
	$('#zoom-1 .gremlins').css('left','160px');
	$('#zoom-1 .peripherals').css('left','300px');
	$('#zoom-1 .arrow').css('left','185px');
	$('#zoom-1 .peripheral').css('float','left');
	
	$('#zoom-2 .gremlins').css('left','160px');
	$('#zoom-2 .peripherals').css('left','300px');
	$('#zoom-2 .arrow').css('left','185px');
	$('#zoom-2 .peripheral').css('float','left');
	
	$('#zoom-3 .gremlins').css('left','160px');
	$('#zoom-3 .peripherals').css('left','500px');
	$('#zoom-3 .arrow').css('left','240px');
	$('#zoom-3 .peripheral').css('float','left');
});

$('#cabling').click(function(e){
	e.preventDefault();
	if ($(this).hasClass('cabling-on')) {
		$('.cabling').hide();
		$(this).removeClass('cabling-on').addClass('cabling-off');
	} else {
		$('.cabling').show();
		$(this).removeClass('cabling-off').addClass('cabling-on');
	}
});

$('#best-fit').click(function(e){
	e.preventDefault();
	$('#zoom-1').show();
	$('#zoom-2').hide();
	$('#zoom-3').hide();
	$('#zoom-in').removeClass('zoom-1').removeClass('zoom-3').removeClass('no-zoom').addClass('zoom-2');
	$('#zoom-out').removeClass('zoom-1').removeClass('zoom-2').removeClass('zoom-3').addClass('no-zoom');
});

$('#full-screen').click(function(e){
	e.preventDefault();
	if ($(this).hasClass('full-off')) {
		$('#header').hide('slide', { direction: 'up' }, 500);
		
		$('#nav').hide('slide', { direction: 'left' }, 500);
		$('.nav-open').hide('slide', { direction: 'left' }, 500).removeClass('nav-open').addClass('nav-close');
		
		$('#data').animate({"width": "10px"}, 500).find('#data-content').hide();
		$('#data-handle-left').removeClass('expand').addClass('small');
		$('#data-handle-right').removeClass('collapse').addClass('disabled');
		$('#zoom-1').css('right','10px');
		$('#zoom-2').css('right','10px');
		$('#zoom-3').css('right','10px');
		$('#data-content').hide();
		$('#full-data-content').hide();
		$('#toolbar-content').delay(500).animate({"margin-right": "50px"}, 500);
		
		$('#main').animate({ 'top': '0px' }, 500).animate({ 'left': '0px' }, 500);
		
		$(this).removeClass('full-off').addClass('full-on');
	} else {
		$('#main').animate({ 'left': '155px' }, 500).animate({ 'top': '95px' }, 500);
		
		$('#header').delay(500).show('slide', { direction: 'up' }, 500);
		
		$('#nav').css('width','155px').removeClass('nav-close').addClass('nav-open');
		$('.nav-control').show();
		$('.nav-control img').removeClass('rotate');
		
		$('#nav').delay(500).show('slide', { direction: 'left' }, 500);
		$('#nav').find('.texts').delay(500).show('slide', { direction: 'left' }, 500);
		
		$('#data').delay(500).animate({"width": "250px"}, 500).find('#data-content').show();
		$('#data-handle-left').removeClass('small').addClass('expand');
		$('#data-handle-right').removeClass('disabled').addClass('collapse');
		$('#zoom-1').delay(500).animate({'right': '250px'}, 500);
		$('#zoom-2').delay(500).animate({'right': '250px'}, 500);
		$('#zoom-3').delay(500).animate({'right': '250px'}, 500);
		$('#data-content').show();
		$('#full-data-content').hide();
		$('#toolbar-content').animate({"margin-right": "300px"}, 500);
		
		$(this).removeClass('full-on').addClass('full-off');
	}
});