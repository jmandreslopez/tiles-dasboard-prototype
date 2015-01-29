$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });

$('#tab-tiles').live('click',function(e){
	$('#filter-health').show();
	$('#filter-device').hide();
	$('#filter-failure-tiles').show();
	$('#filter-failure-other').hide();
	$('#filter-severity').show();
});
$('#tab-gremlins').live('click',function(e){
	$('#filter-health').show();
	$('#filter-device').hide();
	$('#filter-failure-tiles').show();
	$('#filter-failure-other').hide();
	$('#filter-severity').show();
});
$('#tab-peripherals').live('click',function(e){
	$('#filter-health').show();	
	$('#filter-device').show();
	$('#filter-failure-tiles').hide();
	$('#filter-failure-other').show();
	$('#filter-severity').show();
});

$('#viewport-closed a').live('click',function(e){
	e.preventDefault();
	$('#viewport-open').show('slide', { direction: 'right' }, 500);
	$('#viewport-closed').hide('slide', { direction: 'right' }, 500);
});

$('#viewport-open a').live('click',function(e){
	e.preventDefault();
	$('#viewport-open').hide('slide', { direction: 'right' }, 500);
	$('#viewport-closed').show('slide', { direction: 'right' }, 500);
});

$('.content-level-2').on('overscroll:dragend',function(){
	
	var left = $(this).scrollLeft();
	var top = $(this).scrollTop();
	var overleft = '';
	var overtop = '';
	
	if (left <= 10) {
		overleft = '10px';
	} else if (left <= 20) {
		overleft = '20px';
	} else if (left <= 30) {
		overleft = '30px';
	} else if (left <= 40) {
		overleft = '40px';
	} else if (left <= 50) {
		overleft = '50px';
	} else {
		overleft = '60px';
	}
	
	if (top <= 60) {
		overtop = '10px';
	} else if (top <= 120) {
		overtop = '20px';
	} else if (top <= 180) {
		overtop = '30px';
	} else if (top <= 240) {
		overtop = '40px';
	} else if (top <= 300) {
		overtop = '50px';
	} else {
		overtop = '60px';
	}
	
	$('#viewport-over').animate({ 'top': overtop, 'left': overleft }, 500);
	//$('#viewport-over').animate({ 'top': overtop }, 500);
});

$(document).ready(function(){

  var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
  var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
  var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

  if(isiPad > -1) {
	$('#display-title').hide();
  } else {
	$('.tile a[title]').qtip({
		position: {
			my: 'bottom left',
			target: 'mouse',
			viewport: $(window),		
		},
		style: 'ui-tooltip-shadow'
	});
  }    
});