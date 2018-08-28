// getting data from api

var request = new XMLHttpRequest();
request.open('GET', 'https://algaecal.com/wp-json/acf/v3/options/options', true);
request.onload = function () {

	var data = JSON.parse(this.responseText);
	if (request.status >= 200 && request.status < 400) {

		document.getElementById('phone-number').innerHTML = '<a class="text-info" href="tel:' + data.acf.default_phone_number + '">' + data.acf.default_phone_number +'</a>';
		document.getElementById('modal-body').innerHTML = data.acf['7yr_full_copy'];

	}
}
request.send();

// Show "Speak to our Bone Health Specialists"		
var now = new Date();
var today = now.getUTCDay();
var time = now.getUTCHours();
if ( ((today == 1 || today == 2 || today == 3 || today == 4 || today == 5) && time > 14 && time < 23) || (today == 6 && time > 15 && time < 23) || (today == 0 && time > 15 && time < 21) ) {
	document.getElementById('speak').classList.remove('hidden');
}

// Revealing bundles during playback
// id = cecdwaq3dz
window._wq = window._wq || [];
_wq.push({ id: 'cecdwaq3dz', onReady: function(video) {
	video.bind('timechange', function(t) {

		if (t >= 134) {
			document.getElementById('bundles').classList.remove('hidden');
		}
  });
}});

// Put current year in the footer
var d = new Date();
var n = d.getFullYear();
document.getElementById('footer-year').innerHTML = n;