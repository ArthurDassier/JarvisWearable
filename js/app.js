(function () {
	
	var sensors = tizen.sensorservice.getAvailableSensors();
	console.log('Available : ' + sensors.toString());
	
	var heart = document.getElementById('heart');
	
	function onSuccess1() {}
	function onSuccess() {

	    function onchangedCB(hrmInfo) {
	    	heart.innerHTML = hrmInfo.cumulativeTotalStepCount;
	        console.log('pedometer:' + hrmInfo.cumulativeTotalStepCount);
	       // tizen.humanactivitymonitor.stop('PEDOMETER');
	    }
	    tizen.humanactivitymonitor.start('PEDOMETER', onchangedCB);
	}
	
//	tizen.humanactivitymonitor.start('PEDOMETER', onchangeHR);
//	function onchangeHR(hrmInfo)
//	{
//		heart.innerHTML = hrmInfo.stepStatus;
//		console.log("Heart : " + hrmInfo.stepStatus);
//	}
	
	function onError(e) {
	    console.log("error " + JSON.stringify(e));
	}
	
	
	tizen.ppm.requestPermission("http://tizen.org/privilege/healthinfo",onSuccess1, onError);
	tizen.ppm.requestPermission("http://tizen.org/privilege/location",onSuccess, onError);
	
	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,
			page = null,
			pageId = "";

		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageId = page ? page.id : "";

			if (pageId === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
}());