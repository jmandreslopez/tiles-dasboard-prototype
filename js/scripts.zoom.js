$('#zoom-in').click(function(e){
	e.preventDefault();
	$('#summary-failures').html(defaultSummary());
	$('#details-content').html(defaultData());
	if (!$(this).hasClass('no-zoom')){
		if ($(this).hasClass('zoom-2')){
			$('#zoom-1').hide();			
			$('#zoom-2').show();
			$('#zoom-3').hide();
			$('.content-level-2').overscroll({dragHold: true, showThumbs: false});
			$(this).removeClass('zoom-2').addClass('zoom-3');
			$('#zoom-out').removeClass('no-zoom').addClass('zoom-1');
			$('#viewport-closed').show('slide', { direction: 'right' }, 500);
			$('#viewport-open').hide('slide', { direction: 'right' }, 500);
		} else if ($(this).hasClass('zoom-3')){
			$('#zoom-1').hide();
			$('#zoom-2').hide();
			$('#zoom-3').show();
			$('.content-level-3').overscroll({dragHold: true, showThumbs: false});
			$(this).removeClass('zoom-3').addClass('no-zoom');
			$('#zoom-out').removeClass('zoom-1').addClass('zoom-2');
			$('#viewport-closed').hide('slide', { direction: 'right' }, 500);
			$('#viewport-open').hide('slide', { direction: 'right' }, 500);
		}
	}
});

$('#zoom-out').click(function(e){
	e.preventDefault();
	$('#summary-failures').html(defaultSummary());
	$('#details-content').html(defaultData());
	if (!$(this).hasClass('no-zoom')){
		if ($(this).hasClass('zoom-2')){
			$('#zoom-1').hide();
			$('#zoom-2').show();
			$('#zoom-3').hide();			
			$('.content-level-2').overscroll({dragHold: true, showThumbs: false});
			$('#zoom-in').removeClass('no-zoom').addClass('zoom-3');
			$(this).removeClass('zoom-2').addClass('zoom-1');
			$('#viewport-closed').show('slide', { direction: 'right' }, 500);
			$('#viewport-open').hide('slide', { direction: 'right' }, 500);
		} else if ($(this).hasClass('zoom-1')){			
			$('#zoom-1').show();
			$('#zoom-2').hide();
			$('#zoom-3').hide();
			$('#zoom-in').removeClass('zoom-3').addClass('zoom-2');
			$(this).removeClass('zoom-1').addClass('no-zoom');
			$('#viewport-closed').hide('slide', { direction: 'right' }, 500);
			$('#viewport-open').hide('slide', { direction: 'right' }, 500);
		}
	}
});