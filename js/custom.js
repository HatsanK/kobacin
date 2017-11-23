$(document).ready(function () {
	     chrome.storage.sync.get('disable_ui', function (items){
			if (items.disable_ui === true){}else{
				var link = document.createElement('link');
				link.setAttribute("rel", "stylesheet");
				link.setAttribute("type", "text/css");
				link.setAttribute("href", chrome.extension.getURL("../css/custom.css"));
				document.getElementsByTagName("head")[0].appendChild(link);
			}
		});
});



