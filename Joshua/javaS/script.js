function initMap() {
	var coord = {lat: -11.9940857, lng: -76.8210612};
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 16,
		center: coord,
	});
	console.log(map);

	var marker = new google.maps.Marker({
		position: coord,
		map: map,
			title: 'Instituto Misioneros Monfortianos',
	});
}