$.fn.exists = function () {
    return this.length !== 0;
}

function newMenu(open, nav, main, menu, control){
	var arrow = $('.nav-control img');
	if (!menu.hasClass('nav-open')){
		/* Hide main menu control */
		control.hide();
	
		/* Hide every menu open */
		open.hide('slide', { direction: 'left' }, 500);
		open.removeClass('nav-open');
		open.addClass('nav-close');
		
		/* Shrink main menu */
		nav.animate({ 'width': '85px' }, 500);
		nav.removeClass('nav-open');
		nav.addClass('nav-close');
		nav.find('.texts').hide('slide', { direction: 'left' }, 500);
		
		/* Move main area */
		main.animate({ 'left': '225px' }, 500);
		
		/* Show new menu */
		menu.delay(500).show('slide', { direction: 'left' }, 500);
		
		/* Move main area again */
		main.delay(500).animate({ 'left': '225px' }, 500);
		
		/* Add 'open' class */
		menu.removeClass('nav-close');
		menu.addClass('nav-open');
		
		menu.find('.control').show();
	} else {
		/* Hide current menu */
		menu.hide('slide', { direction: 'left' }, 500);
		menu.removeClass('nav-open');
		menu.addClass('nav-close');
		
		/* Move main area */
		main.animate({ 'left': '85px' }, 500); 
		
		/* Show main menu */
		nav.delay(500).animate({ 'width': '155px' }, 500);
		nav.removeClass('nav-close');
		nav.addClass('nav-open');
		nav.find('.texts').delay(500).show('slide', { direction: 'left' }, 500);
		arrow.removeClass('rotate');
		
		/* Move main area */
		main.delay(500).animate({ 'left': '155px' }, 500);
		
		/* Show main menu control */
		control.show();
		
		menu.find('.control').hide();
	}
}

function newTool(tool){
	var control = tool.find('.tool-control');
	if (!tool.hasClass('nav-open')){
		var tools = $('.tool.nav-open');
		tools.hide('slide', { direction: 'left' }, 500);
		tools.removeClass('nav-open');
		tools.addClass('nav-close');
	
		tool.show('slide', { direction: 'left' }, 500);
		tool.removeClass('nav-close');
		tool.addClass('nav-open');
		
		control.show();
	} else {
		tool.hide('slide', { direction: 'left' }, 500);
		tool.removeClass('nav-open');
		tool.addClass('nav-close');
		
		control.hide();
	}
}



/* Controls */
$('.control').click(function(e){
	var nav = $('#nav');
	var menu = $(this).parent();
	var main = $('#main');
	var control = $('.nav-control');
	var arrow = $('.nav-control img');
	
	if (menu.hasClass('nav-open')){
		var tools = $('.tool.nav-open');
	
		tools.hide('slide', { direction: 'left' }, 500);
		tools.removeClass('nav-open');
		tools.addClass('nav-close');
		
		tools.find('.tool-control').hide();
	
		if (tools.exists()) {	
			/* Hide current menu */
			menu.delay(500).hide('slide', { direction: 'left' }, 500);
			menu.removeClass('nav-open');
			menu.addClass('nav-close');
			
			/* Move main area */
			main.delay(500).animate({ 'left': '85px' }, 500); 
			
			/* Show main menu */
			nav.delay(1000).animate({ 'width': '155px' }, 500);
			nav.removeClass('nav-close');
			nav.addClass('nav-open');
			nav.find('.texts').delay(1000).show('slide', { direction: 'left' }, 500);
			arrow.removeClass('rotate');
			
			/* Move main area */
			main.delay(1000).animate({ 'left': '155px' }, 500);
			
			/* Show main menu control */
			control.show();
			
			menu.find('.control').hide();
		} else {
			/* Hide current menu */
			menu.hide('slide', { direction: 'left' }, 500);
			menu.removeClass('nav-open');
			menu.addClass('nav-close');
			
			/* Move main area */
			main.animate({ 'left': '85px' }, 500); 
			
			/* Show main menu */
			nav.delay(500).animate({ 'width': '155px' }, 500);
			nav.removeClass('nav-close');
			nav.addClass('nav-open');
			nav.find('.texts').delay(500).show('slide', { direction: 'left' }, 500);
			arrow.removeClass('rotate');
			
			/* Move main area */
			main.delay(500).animate({ 'left': '155px' }, 500);
			
			/* Show main menu control */
			control.show();
			
			menu.find('.control').hide();
		}
	}
});

/* Tool Controls */
$('.tool-control').click(function(e){
	var control = $(this);
	var tool = control.parent();	

	if (tool.hasClass('nav-open')){
		tool.hide('slide', { direction: 'left' }, 500);
		tool.removeClass('nav-open');
		tool.addClass('nav-close');		
		control.hide();
	}
});

/* Tool 1 */
$('.tool-1').click(function(e){
	e.preventDefault();
	var tool = $('#nav-1-tool-1');	
	newTool(tool);
});

/* Tool 2 */
$('.tool-2').click(function(e){
	e.preventDefault();
	var tool = $('#nav-1-tool-2');	
	newTool(tool);
});

/* Tool 3 */
$('.tool-3').click(function(e){
	e.preventDefault();
	var tool = $('#nav-1-tool-3');	
	newTool(tool);
});

/* Tool 4 */
$('.tool-4').click(function(e){
	e.preventDefault();
	var tool = $('#nav-1-tool-4');	
	newTool(tool);
});

/* Tool 5 */
$('.tool-5').click(function(e){
	e.preventDefault();
	var tool = $('#nav-1-tool-5');	
	newTool(tool);
});

/* Tool 6 */
$('.tool-6').click(function(e){
	e.preventDefault();
	var tool = $('#nav-1-tool-6');	
	newTool(tool);
});

/* Tool 7 */
$('.tool-7').click(function(e){
	e.preventDefault();
	var tool = $('#nav-2-tool-5');	
	newTool(tool);
});

/* Tool 8 */
$('.tool-8').click(function(e){
	e.preventDefault();
	var tool = $('#nav-2-tool-6');	
	newTool(tool);
});





/* Main Menu Control */
$('.nav-control').click(function(e){
	var nav = $('#nav');
	var main = $('#main');
	var arrow = $('.nav-control img');
		
	if (nav.hasClass('nav-open')){
		nav.animate({ 'width': '85px' }, 500).removeClass('nav-open').addClass('nav-close');
		nav.find('.texts').hide();
		arrow.addClass('rotate');
		
		/* Move main area */
		main.animate({ 'left': '85px' }, 500);
	} else {	
		nav.animate({ 'width': '155px' }, 500).removeClass('nav-close').addClass('nav-open');
		nav.find('.texts').delay(500).show();
		arrow.removeClass('rotate');
		
		/* Move main area */
		main.animate({ 'left': '155px' }, 500);
	}	
});

/* Menu-1 */
$('.menu-1').live('click',function(e){
	var open = $('.navg.nav-open');
	var nav = $('#nav');
	var main = $('#main');
	var menu = $('#nav-1');
	var control = $('.nav-control');
	
	newMenu(open, nav, main, menu, control);
});

/* Menu-2 */
$('.menu-2').live('click',function(e){
	var open = $('.navg.nav-open');
	var nav = $('#nav');
	var main = $('#main');
	var menu = $('#nav-2');
	var control = $('.nav-control');
	
	newMenu(open, nav, main, menu, control);
});

/* Menu-3 */
$('.menu-3').live('click',function(e){
	var open = $('.navg.nav-open');
	var nav = $('#nav');
	var main = $('#main');
	var menu = $('#nav-3');
	var control = $('.nav-control');
	
	newMenu(open, nav, main, menu, control);
});

/* Menu-4 */
$('.menu-4').live('click',function(e){
	var open = $('.navg.nav-open');
	var nav = $('#nav');
	var main = $('#main');
	var menu = $('#nav-4');
	var control = $('.nav-control');
	
	newMenu(open, nav, main, menu, control);
});