/* Data Small*/
$('#data-handle-left[class="expand"]').live('click',function(e){
	e.preventDefault();
	$('#data').animate({"width": "90%"}, 500);
	$(this).removeClass('expand').addClass('disabled');
	$('#data-handle-right[class="collapse"]').removeClass('collapse').addClass('small');
	$('#data-content').hide();
	$('#full-data-content').show();
});
$('#data-handle-right[class="collapse"]').live('click',function(e){
	e.preventDefault();
	$('#data').animate({"width": "10px"}, 500).find('#data-content').hide();
	$('#data-handle-left[class="expand"]').removeClass('expand').addClass('small');
	$(this).removeClass('collapse').addClass('disabled');
	$('#zoom-1').css('right','10px');
	$('#zoom-2').css('right','10px');
	$('#zoom-3').css('right','10px');
	$('#data-content').hide();
	$('#full-data-content').hide();
	
	$('#toolbar-content').animate({"margin-right": "50px"}, 500);
});	

/* Data Expand */
$('#data-handle-left[class="disabled"]').live('click',function(e){
	e.preventDefault();
});		
$('#data-handle-right[class="small"]').live('click',function(e){
	e.preventDefault();
	$('#data').animate({"width": "250px"}, 500);
	$('#data-handle-left[class="disabled"]').removeClass('disabled').addClass('expand');
	$(this).removeClass('small').addClass('collapse');
	$('#data-content').show();
	$('#full-data-content').hide();
});

/* Data Collapse */
$('#data-handle-left[class="small"]').live('click',function(e){
	e.preventDefault();
	$('#data').animate({"width": "250px"}, 500).find('#data-content').show();
	$(this).removeClass('small').addClass('expand');
	$('#data-handle-right[class="disabled"]').removeClass('disabled').addClass('collapse');
	$('#zoom-1').animate({'right': '250px'}, 500);
	$('#zoom-2').animate({'right': '250px'}, 500);
	$('#zoom-3').animate({'right': '250px'}, 500);
	$('#data-content').show();
	$('#full-data-content').hide();
	
	$('#toolbar-content').animate({"margin-right": "300px"}, 500);
});		
$('#data-handle-right[class="disabled"]').live('click',function(e){
	e.preventDefault();
});