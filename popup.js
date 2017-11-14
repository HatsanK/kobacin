function saveChanges() {
    // Get a value.
    if ($('#switch-allow_stat').is(':checked')) {
        localStorage.allow_stat = true;
    } else {
        localStorage.allow_stat = false;
    }
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({
        'allow_stat': localStorage.allow_stat
    }, function () {

    });
}

$(document).ready(function () {
    if (localStorage.getItem('allow_stat')) {
        if (localStorage.allow_stat == "false") {
            $('#switch-allow_stat').prop('checked', false);
        } else {
            $('#switch-allow_stat').prop('checked', true);
        }
    } else {
        if ($('#switch-allow_stat').is(':checked')) {
            localStorage.setItem('allow_stat', true);
        } else {
            localStorage.setItem('allow_stat', false);
        }
    }

    $('#switch-allow_stat').click(function () {
        saveChanges();
    });

});