$(document).ready(function () {
		browser.storage.sync.get('disable_ui', function (items){
			if (items.disable_ui === true){
				 
			} else {
				stat();
			}
	});
});

function stat(){
	browser.storage.sync.get('disable_css', function (items){
	if (items.disable_css === true){
		var link = document.createElement('link');
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", browser.extension.getURL("../css/attk.css"));
		document.getElementsByTagName("head")[0].appendChild(link);
	} else {
		var link = document.createElement('link');
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", browser.extension.getURL("../css/stam.css"));
		document.getElementsByTagName("head")[0].appendChild(link);
	}
	});
}


