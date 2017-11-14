$(document).ready(function () {
    chrome.storage.sync.get('allow_stat', function(result) {
        if(result.allow_stat == "false") {
            var link = document.createElement('link');
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("type", "text/css");
            link.setAttribute("href", chrome.extension.getURL("/css/stat.css"));
            document.getElementsByTagName("head")[0].appendChild(link);
        } 
    });
});