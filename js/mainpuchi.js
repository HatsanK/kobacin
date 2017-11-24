$(document).ready(function () {
	     browser.storage.sync.get('disable_ui', function (items){
			if (items.disable_ui === true){}else{
				var link = document.createElement('link');
				link.setAttribute("rel", "stylesheet");
				link.setAttribute("type", "text/css");
				link.setAttribute("href", browser.extension.getURL("../css/mainpuchi.css"));
				document.getElementsByTagName("head")[0].appendChild(link);
			}
		});
});



