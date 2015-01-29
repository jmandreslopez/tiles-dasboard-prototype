/*$("#foo2").carouFredSel({
	circular: false,
	infinite: false,
	auto 	: false,
	prev	: {	
		button	: "#foo2_prev",
		key		: "left"
	},
	next	: { 
		button	: "#foo2_next",
		key		: "right"
	},
	pagination	: "#foo2_pag"
});*/

$("#foo").carouFredSel({
	circular: false,
	width: 620,
	height: 360,
	items: {
		visible: 1,
		width: 560,
		height: 330
	},
	auto: false,
	prev: "#prev_btn",
	next: "#next_btn",
	pagination: "#pager_container",
	swipe: true,
	mousewheel: true
});

$('#selector-handle a').click(function(e){
	e.preventDefault();
	$('#foo').css('visibility','visible');
	if ($(this).hasClass('selector-close')) {
		$('#display-content').animate({'top':'0px'}, 500);
		$(this).parent().css('top','460px');
		$(this).removeClass('selector-close').addClass('selector-open');
	} else {
		$('#display-content').animate({'top':'-500px'}, 500);
		$(this).parent().css('top','498px');
		$(this).removeClass('selector-open').addClass('selector-close');
	}
});

$('#selector-ok').click(function(e){
	e.preventDefault();
	if ($('#selector-search input').val() != '') {
		$('#foo').html('<img src="images/display_selector_4.png" alt="" width="560" height="330" />');
		
	} else {
		$('#foo').html('<img src="images/display_selector_1.png" alt="" width="560" height="330" /><img src="images/display_selector_1.png" alt="" width="560" height="330" /><img src="images/display_selector_1.png" alt="" width="560" height="330" />');
	}
	$("#foo").carouFredSel({
		circular: false,
		width: 620,
		height: 360,
		items: {
			visible: 1,
			width: 560,
			height: 330
		},
		auto: false,
		prev: "#prev_btn",
		next: "#next_btn",
		pagination: "#pager_container",
		swipe: true,
		mousewheel: true
	});
});