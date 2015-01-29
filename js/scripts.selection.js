function defaultSummary() {
	var content = '';
	
	$('#keystate').removeClass('thumb-active')
				.removeClass('thumb-abnormal')
				.removeClass('thumb-warning')
				.addClass('thumb-failure')
				.removeClass('ks-failure')
				.removeClass('ks-warning')
				.removeClass('ks-abnormal')
				.removeClass('ks-active');
	
	content = '<li><span class="device">T4</span> Device Comunication Failure</li>';
	content += '<li><span class="device">T25</span> Power Supply Unit Failure</li>';
	content += '<li><span class="device">T38</span> Power Supply Unit Recovering</li>';
	content += '<li><span class="device">T83</span> LED Module Comunication Failure</li>';
	content += '<li><span class="device">T205</span> Corrupted Software</li>';
	content += '<li><span class="device">G1</span> Bus Communication Failure</li>';
	
	return content;
}

function defaultData() {
	var content = '';
	
	content = '<ul>';
	content += '<li><span class="device">ID:</span> Display System 2</li>';
	content += '<li><span class="device">Pitch:</span> 10mm</li>';
	content += '<li><span class="device">Bounding Resolution:</span> 1900px</li>';
	content += '<li><span class="device">Bounding Dimensions:</span> 100</li>';
	content += '<li><span class="device">Tile Count:</span> 300</li>';
	content += '<li><span class="device">Tile Types in the Display:</span>';
	content += '<ul>';
	content += '<li><span class="device">Product Name:</span> Tile</li>';
	content += '<li><span class="device">Pitch:</span> 10mm</li>';
	content += '<li><span class="device">Tile Resolution:</span> 100x100</li>';
	content += '<li><span class="device">Tile Dimension:</span> 200x200</li>';
	content += '</ul>';
	content += '</li>';
	content += '<li><span class="device">Gremlin Information:</span>';
	content += '<ul>';
	content += '<li><span class="device">Product Name:</span> Gremlin</li>';
	content += '<li><span class="device">ID:</span> G1</li>';
	content += '<li><span class="device">Genlock:</span> X</li>';
	content += '</ul>';
	content += '</li>';
	content += '<li><span class="device">Brightness (Tiles):</span>';
	content += '<ul>';
	content += '<li><span class="device">Min:</span> 10</li>';
	content += '<li><span class="device">Average:</span> 21.7</li>';
	content += '<li><span class="device">Hig:</span> 30</li>';
	content += '</ul>';
	content += '</li>';
	content += '<li><span class="device">Temperature (Tiles):</span>';
	content += '<ul>';
	content += '<li><span class="device">Min:</span> 10</li>';
	content += '<li><span class="device">Average:</span> 22.9</li>';
	content += '<li><span class="device">Hig:</span> 90</li>';
	content += '</ul>';
	content += '</li>';
	content += '</ul>';
	
	return content;
}

function summaryData(item) {
	var content = '';
	
	var characteristics = $.parseJSON(item.attr('data-characteristics'));
	var summary = $.parseJSON(item.attr('data-summary'));
		
	if (summary.failure != '') {
		content = '<li><span class="device">'+characteristics.id+'</span> '+summary.failure+'</li>';
	}
	
	return content;
}

function tileData(tile) {
	var content = '';

	/* Characteristics */
	var characteristics = $.parseJSON(tile.attr('data-characteristics'));
	content += '<strong><span class="device">' + characteristics.id + '</span></strong><br />';
	content += '=========================<br />';
	content += '<span class="device">Characteristics:</span><ul>'
	content += '<li><span class="device">Product Name:</span> ' + characteristics.product + '</li>';
	content += '<li><span class="device">ID:</span> ' + characteristics.id + '</li>';
	content += '<li><span class="device">Manufacturer:</span> ' + characteristics.manufacturer + '</li>';
	content += '<li><span class="device">Serial No.:</span> ' + characteristics.serial + '</li>';
	content += '<li><span class="device">Pitch:</span> ' + characteristics.pitch + '</li>';
	content += '<li><span class="device">Maximum NIT Level:</span> ' + characteristics.nit + '</li>';
	content += '<li><span class="device">Software Version:</span> ' + characteristics.sw + '</li>';
	content += '</ul><br />';
	
	/* Configuration */
	var configuration = $.parseJSON(tile.attr('data-configuration'));
	content += '<span class="device">Configuration:</span><ul>'
	content += '<li><span class="device">Tile Resolution:</span> ' + configuration.resolution + '</li>';
	content += '<li><span class="device">Tile Dimension:</span> ' + configuration.dimension + '</li>';
	content += '<li><span class="device">Cut Out:</span> ' + configuration.cut + '</li>';
	content += '<li><span class="device">Temperature Thresholds:</span> ' + configuration.thresholds + '</li>';
	content += '<li><span class="device">Temperature Sample Interval:</span> ' + configuration.sample + '</li>';
	content += '<li><span class="device">Gamma:</span> ' + configuration.gamma + '</li>';
	content += '<li><span class="device">Brigthness Failsafe Settings:</span> ' + configuration.failsafe + '</li>';
	content += '<li><span class="device">Color Temperature:</span> ' + configuration.color + '</li>';
	content += '</ul><br />';
	
	/* Dynamic State */
	var dynamic = $.parseJSON(tile.attr('data-dynamic'));
	content += '<span class="device">Dynamic State:</span><ul>'
	content += '<li><span class="device">Brightness:</span> ' + dynamic.brightness + '</li>';
	content += '<li><span class="device">Display Standby:</span> ' + dynamic.display + '</li>';
	content += '<li><span class="device">Temperature:</span> ' + dynamic.temperature + '</li>';
	content += '<li><span class="device">Run Time:</span> ' + dynamic.runtime + '</li>';
	content += '<li><span class="device">Display Mode:</span> ' + dynamic.mode + '</li>';
	content += '<li><span class="device">Sensor Health:</span> ' + dynamic.health + '</li>';
	content += '<li><span class="device">Energy Consumption:</span> ' + dynamic.energy + '</li>';
	content += '</ul>';
	
	return content;
}

function gremlinData(gremlin) {
	var content = '';
	
	/* Characteristics */
	var characteristics = $.parseJSON(gremlin.attr('data-characteristics'));
	content += '<strong><span class="device">' + characteristics.id + '</span></strong><br />';
	content += '=========================<br />';
	content += '<span class="device">Characteristics:</span><ul>'
	content += '<li><span class="device">Product Name:</span> ' + characteristics.product + '</li>';
	content += '<li><span class="device">ID:</span> ' + characteristics.id + '</li>';
	content += '<li><span class="device">Manufacturer:</span> ' + characteristics.manufacturer + '</li>';
	content += '<li><span class="device">Serial No.:</span> ' + characteristics.serial + '</li>';
	content += '<li><span class="device">Software Version:</span> ' + characteristics.sw + '</li>';
	content += '</ul><br />';
	
	/* Configuration */
	var configuration = $.parseJSON(gremlin.attr('data-configuration'));
	content += '<span class="device">Configuration:</span><ul>'
	content += '<li><span class="device">Tile Count:</span> ' + configuration.count + '</li>';
	content += '<li><span class="device">Input Signal Timings:</span> ' + configuration.input + '</li>';
	content += '<li><span class="device">Signal Input Cut Out:</span> ' + configuration.cut + '</li>';
	content += '<li><span class="device">Signal Output Windows:</span> ' + configuration.output + '</li>';
	content += '<li><span class="device">Network Information:</span> <ul>';
		content += '<li><span class="device">IP:</span> ' + configuration.ip + '</li>';
		content += '<li><span class="device">Submask:</span> ' + configuration.mask + '</li>';
		content += '<li><span class="device">Gateway:</span> ' + configuration.gateway + '</li></ul></li>';
	content += '<li><span class="device">Backup Image Settings:</span> ' + configuration.backup + '</li>';
	content += '<li><span class="device">Signal Failover Settings:</span> ' + configuration.failover + '</li>';
	content += '</ul><br />';
	
	/* Dynamic State */
	var dynamic = $.parseJSON(gremlin.attr('data-dynamic'));
	content += '<span class="device">Dynamic State:</span><ul>'
	content += '<li><span class="device">Temperature:</span> ' + dynamic.temperature + '</li>';
	content += '<li><span class="device">Display Mode:</span> ' + dynamic.mode + '</li>';		
	content += '<li><span class="device">Cable Connection:</span> ' + dynamic.cable + '</li>';
	content += '<li><span class="device">Run Time:</span> ' + dynamic.runtime + '</li>';
	content += '</ul>';
	
	return content;
}

function peripheralData(peripheral) {
	var content = '';

	/* Characteristics */
	var characteristics = $.parseJSON(peripheral.attr('data-characteristics'));
	content += '<strong><span class="device">' + characteristics.id + '</span></strong><br />';
	content += '=========================<br />';
	content += '<span class="device">Characteristics:</span><ul>'
	content += '<li><span class="device">Product Name:</span> ' + characteristics.product + '</li>';
	content += '<li><span class="device">ID:</span> ' + characteristics.id + '</li>';
	content += '<li><span class="device">Manufacturer:</span> ' + characteristics.manufacturer + '</li>';
	content += '<li><span class="device">Serial No.:</span> ' + characteristics.serial + '</li>';
	content += '<li><span class="device">Software Version:</span> ' + characteristics.sw + '</li>';
	content += '</ul><br />';
	
	/* Configuration */
	var configuration = $.parseJSON(peripheral.attr('data-configuration'));
	content += '<span class="device">Configuration:</span><ul>'
	content += '<li><span class="device">Sensor Capabilities Dependency:</span> ' + configuration.sensor + '</li>';
	content += '</ul><br />';
	
	return content;
}

function selectedDetails(type) {
	var content = '';
	var summary = '';
	var health = '';
	var json = '';
	
	if (type == 'all') {
		$('.selected').each(function(){
			var item = $(this).children();
			if (item.attr('data-type') == 'tile') {
				json = $.parseJSON(item.attr('data-summary'));
				summary += summaryData(item);
				content += tileData(item) + '<br/>';
			} else if (item.attr('data-type') == 'gremlin') {
				json = $.parseJSON(item.attr('data-summary'));
				summary += summaryData(item);
				content += gremlinData(item) + '<br/>';
			} else if (item.attr('data-type') == 'peripheral') {
				json = $.parseJSON(item.attr('data-summary'));
				summary += summaryData(item);
				content += peripheralData(item) + '<br/>';
			}
			
			if (json.health == 'failure') {
				health = 'failure';
			} else if (json.health == 'warning' && health != 'failure') {
					health = 'warning';
			} else if (json.health == 'abnormal' && (health != 'failure' && health != 'warning')) {
				health = 'abnormal';
			} else if (json.health == 'active' && (health != 'failure' && health != 'warning'&& health != 'abnormal')) {
				health = 'active';
			}
		});
	} else if (type == 'tiles') {
		$('.tile.selected a[data-type="tile"]').each(function(){
			summary += summaryData($(this));
			content += tileData($(this)) + '<br/>';
			json = $.parseJSON($(this).attr('data-summary'));
			
			if (json.health == 'failure') {
				health = 'failure';
			} else if (json.health == 'warning' && health != 'failure') {
					health = 'warning';
			} else if (json.health == 'abnormal' && (health != 'failure' && health != 'warning')) {
				health = 'abnormal';
			} else if (json.health == 'active' && (health != 'failure' && health != 'warning'&& health != 'abnormal')) {
				health = 'active';
			}
		});
	}
	
	if (content == '') {
		summary = defaultSummary();
		content = defaultData();
	}
	
	var keystate = $('#keystate');
	
	if (health == 'active') {
		keystate.removeClass('thumb-failure')
			.removeClass('thumb-warning')
			.removeClass('thumb-abnormal')
			.addClass('thumb-active')
			.removeClass('ks-failure')
			.removeClass('ks-warning')
			.removeClass('ks-abnormal')
			.addClass('ks-active');
	} else if (health == 'abnormal') {
		keystate.removeClass('thumb-failure')
			.removeClass('thumb-warning')
			.removeClass('thumb-active')
			.addClass('thumb-abnormal')
			.removeClass('ks-failure')
			.removeClass('ks-warning')
			.removeClass('ks-active')
			.addClass('ks-abnormal');
	} else if (health == 'warning') {		
		keystate.removeClass('thumb-failure')
			.removeClass('thumb-active')
			.removeClass('thumb-abnormal')
			.addClass('thumb-warning')
			.removeClass('ks-failure')
			.removeClass('ks-active')
			.removeClass('ks-abnormal')
			.addClass('ks-warning');		
	} else if (health == 'failure') {
		keystate.removeClass('thumb-warning')
			.removeClass('thumb-active')
			.removeClass('thumb-abnormal')
			.addClass('thumb-failure')
			.removeClass('ks-warning')
			.removeClass('ks-active')
			.removeClass('ks-abnormal')
			.addClass('ks-failure');
	}
		
	$('#summary-failures').html( summary );
	$('#details-content').html( content );
}

function selectionType(selection, item) {
	/* Simple */
	if (selection == 'simple') {
		if (item.parent().hasClass('selected')){
			item.parent().removeClass('selected');
		} else {
			$('.tile.selected').removeClass('selected');
			$('.tile .selected').removeClass('selected');
			$('.gremlin.selected .zoom-2').parent().removeClass('selected');
			$('.gremlin.selected .zoom-3').parent().removeClass('selected');
			$('.peripheral.selected .zoom-2').parent().removeClass('selected');
			$('.peripheral.selected .zoom-3').parent().removeClass('selected');
			item.parent().addClass('selected');
		}
		selectedDetails('all');
	}

	/* Adhoc */
	if (selection == 'adhoc') {
		$('.gremlin.selected .zoom-2').parent().removeClass('selected');
		$('.gremlin.selected .zoom-3').parent().removeClass('selected');
		$('.peripheral.selected .zoom-2').parent().removeClass('selected');
		$('.peripheral.selected .zoom-3').parent().removeClass('selected');
		
		if (item.attr('data-type') == 'tile') {
			if (item.parent().hasClass('selected')){
				item.parent().removeClass('selected');
			} else {
				item.parent().addClass('selected');
			}
			selectedDetails('all');
		}
	}

	/* Gremlin */
	if (selection == 'gremlin') {
		if (item.attr('data-type') == 'gremlin') {
			if (item.hasClass('zoom-2')) {
				$('#zoom-2 .tile').addClass('selected');
			} else if (item.hasClass('zoom-3')) {
				$('#zoom-3 .tile').addClass('selected');
			}
		}	
		selectedDetails('tiles');
	}
	
	/* Column */
	if (selection == 'column') {
		if (item.hasClass('zoom-2')) {
			var col = item.parent();
			var column = col.attr('data-col');
			var father = item.parent().parent().parent();
		
			if (col.hasClass('selected-col')) {
				father.find('div[data-col="'+column+'"]').removeClass('selected').removeClass('selected-col');
			} else {
				father.find('div[data-col="'+column+'"]').addClass('selected').addClass('selected-col');
			}
		} else if (item.hasClass('zoom-3')) {
			var col = item.parent().parent();
			var column = col.attr('data-col');
			var father = col.parent().parent();
			
			if (col.hasClass('selected-col')) {
				father.find('div[data-col="'+column+'"] .tile').removeClass('selected');
				col.removeClass('selected-col');
			} else {
				father.find('div[data-col="'+column+'"] .tile').addClass('selected');
				col.addClass('selected-col');
			}
		}
		selectedDetails('tiles');		
	}
	
	/* Row */
	if (selection == 'row') {
		if (item.hasClass('zoom-2')) {
			var row = item.parent().parent();
			if (row.hasClass('selected-row')) {
				row.find('.tile').removeClass('selected');
				row.removeClass('selected-row');
			} else {
				row.find('.tile').addClass('selected');
				row.addClass('selected-row');
			}			
		} else if (item.hasClass('zoom-3')) {
			var row = item.parent().parent().parent();
			if (row.hasClass('selected-row')) {
				row.find('.tile').removeClass('selected');
				row.removeClass('selected-row');
			} else {
				row.find('.tile').addClass('selected');
				row.addClass('selected-row');
			}
		}
		selectedDetails('tiles');
	}
}

$('.tile a').click(function(e){
	var selection = $('#selector').attr('data-selection');
	selectionType(selection, $(this));
});

$('.devices a').click(function(e){
	e.preventDefault();
	if (!$(this).hasClass('zoom-2') && !$(this).hasClass('zoom-3')) {
		var type = $(this).attr('data-type');
		var content = '';
		var keystate = $('#keystate');
		if (type == 'gremlin') {
			content = gremlinData($(this));
			keystate.removeClass('thumb-failure')
				.removeClass('thumb-active')
				.removeClass('thumb-abnormal')
				.addClass('thumb-warning')
				.removeClass('ks-failure')
				.removeClass('ks-active')
				.removeClass('ks-abnormal')
				.addClass('ks-warning');
		} else if (type == 'peripheral') {
			content = peripheralData($(this));			
			keystate.removeClass('thumb-warning')
				.removeClass('thumb-failure')
				.removeClass('thumb-abnormal')
				.addClass('thumb-active')
				.removeClass('ks-failure')
				.removeClass('ks-warning')
				.removeClass('ks-abnormal')
				.addClass('ks-active');
		}
		$('#summary-failures').html( summaryData($(this)) );
		$('#details-content').html( content );
	} else {
		var selection = $('#selector').attr('data-selection');
		selectionType(selection, $(this));
	}
});

$('#display-zoom1').click(function(e){
	e.preventDefault();
	$('#summary-failures').html(defaultSummary());
	$('#details-content').html(defaultData());
});