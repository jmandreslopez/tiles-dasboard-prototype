var content = '<table class="table table-striped table-condensed">';
content += '<thead><tr>';
content += '<td>Product</td>';
content += '<td>ID</td>';
content += '<td>Manufacturer</td>';
content += '<td>Serial</td>';
content += '<td>Pitch</td>';
content += '<td>NIT</td>';
content += '<td>SW</td>';
content += '<td>Resolution</td>';
content += '<td>Dimension</td>';
content += '<td>Cut Out</td>';
content += '<td>Temperature</td>';
content += '<td>Gamma</td>';
content += '<td>Brightness</td>';
content += '<td>Color</td>';
content += '</tr></thead><tbody>';

for (i=1; i<=25; i++) {
	content += '<tr>';
	content += '<td>Tile</td>';
	content += '<td>T'+i+'</td>';
	content += '<td>Barco</td>';
	content += '<td>T1234567890</td>';
	content += '<td>10mm</td>';
	content += '<td>5</td>';
	content += '<td>1.0</td>';
	content += '<td>1920</td>';
	content += '<td>200</td>';
	content += '<td>1</td>';
	content += '<td>50F</td>';
	content += '<td>10</td>';
	content += '<td>15</td>';
	content += '<td>RGB</td>';
	content += '</tr>';
}

content += '</tbody></table>';
$('#pane1').html(content);