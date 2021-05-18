(function () {
	document.addEventListener('rotarydetent', function(ev) {
		/* Get the direction value from the event */
		var direction = ev.detail.direction;
		var textbox = document.querySelector('.contents');
		box = document.querySelector('#textbox');

		if (direction == 'CW') {
			/* Add behavior for clockwise rotation */
			console.log('clockwise');
			box.innerHTML ="clockwise";
		} else if (direction == 'CCW') {
			/* Add behavior for counter-clockwise rotation */
			console.log('counter-clockwise');
			box.innerHTML ="counter-clockwise";
		}
  });

}());