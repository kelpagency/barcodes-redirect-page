var timeleft = 60;
var downloadTimer = setInterval(function () {
	if (timeleft <= 0) {
		clearInterval(downloadTimer);
		document.getElementById('seconds').innerHTML = '0';
		window.location = 'https://www.barcodestalk.com';
	} else {
		document.getElementById('seconds').innerHTML = timeleft;
	}
	timeleft -= 1;
}, 1000);
