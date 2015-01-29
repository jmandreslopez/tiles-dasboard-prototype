var content = '';
var cont = 1;
var col = 1;
var row = 1;
var last = 1;
var cabling = '';
var first = '';
var health = '';
var tooltip = '';
var summary = '';

content = '<div class="zoom-container" style="width: 3001px; height: 2250px; background: url(images/video.png) no-repeat; background-size: 100% 100%">';

for (i=1; i<=15; i++) {
	row = 1;
	content += '<div class="row" data-row="'+row+'">';
	for (j=1; j<=20; j++) {
		
		/* First */
		if (j == 1){
			if (i != 15){
				if (i%2 == 0){
					first = '<div class="cabling first"></div>';
				} else {
					first = '';
				}
			} else {
				first = '';
			}
		} else {
			first = '';
		}
		
		col = j;
		
		/* Cabling */
		cabling = '<div class="cabling horizontal"></div>';
		if (j == 20) {
			last = 'last-col';
			if (i%2 == 0) {
				cabling = '<div class="cabling vertical"></div>';
			} else {
				cabling = '<div class="cabling none"></div>';
			}
		} else {
			last = '';
		}
		
		if (cont == 4 || cont == 25 || cont == 83 || cont == 205){							
			health = 'failure';
			//tooltip = 'Health: <span style=\'color:#F00\'>Failure</span><br />Brightness: 100';
			if (cont == 4) {
				summary = '{ "health":"failure","failure":"Device Comunication Failure" }';
			} else if (cont == 25) {
				summary = '{ "health":"failure","failure":"Power Supply Unit Failure" }';
			} else if (cont == 83) {
				summary = '{ "health":"failure","failure":"LED Module Comunication Failure" }';
			} else if (cont == 205) {
				summary = '{ "health":"failure","failure":"Corrupted Software" }';
			}
		} else if (cont == 38) {
			health = 'abnormal';
			//tooltip = 'Health: <span style=\'color:#FFFF00\'>Abnormal</span><br />Brightness: 100';			
			summary = '{ "health":"abnormal","failure":"Power Supply Unit Recovering" }';
		} else {
			health = 'active';
			//tooltip = 'Health: Good<br />Brightness: 100';
			summary = '{ "health":"active","failure":"" }';
		}
		
		content += '<div data-col="'+col+'" class="tile-general left '+health+' '+last+'">';			
			content += '<div class="tile '+health+'">';
			content += '<a href="#" title="'+tooltip+'" class="zoom-3" ';
			content += 'data-summary=\''+summary+'\''; 
			content += 'data-type="tile" data-characteristics=\'{ "product":"Tile", "id":"T'+cont+'", "manufacturer":"LiveDOTS", "serial":"T1234567890", "pitch":"10mm", "nit":"1", "sw":"1.0" }\''; 
			content += 'data-configuration=\'{ "resolution":"100x100", "dimension":"200x200", "cut":"1", "thresholds":"10F", "sample":"20F", "gamma":"10", "failsafe":"10", "color":"40F" }\''; 
			content += 'data-dynamic=\'{ "brightness":"100", "display":"20", "temperature":"50F", "runtime":"30", "mode":"Video", "health":"Good", "energy":"100W" }\'';
			content += '>T'+cont+'</a>';
			content += '</div>';
			content += '<div class="tile-content">';
			if (cont != 4) {
				content += '<div class="tile-component topleft"><a href="#"></a></div>';
				content += '<div class="tile-component topright"><a href="#"></a></div>';
				content += '<div class="tile-component bottomleft"><a href="#"></a></div>';
				content += '<div class="tile-component bottomright"><a href="#"></a></div>';
			} else {
				content += '<div class="tile-component topleft component-active"><a href="#"></a></div>';
				content += '<div class="tile-component topright component-active"><a href="#"></a></div>';
				content += '<div class="tile-component bottomleft component-active"><a href="#"></a></div>';
				content += '<div class="tile-component bottomright component-failure"><a href="#"></a></div>';
			}
			content += '</div>';
			content += cabling + first;
		content += '</div>';
		cont++;
	}
	content += '</div>';
}

content += '</div>';

$('.content-level-3 .devices').before(content);