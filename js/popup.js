function disable_css ()
{
	browser.storage.sync.set({ 'disable_css': true });
}


function enable_css ()
{
	browser.storage.sync.remove('disable_css');
}

function update_buttons_css ()
{
	browser.storage.sync.get('disable_css', function (items)
	{
		var button_css_disable = document.getElementById('button-css-disable');
		var button_css_enable  = document.getElementById('button-css-enable');

		if (items.disable_css === true)
		{
			button_css_disable.className = button_css_disable.className + ' active';
			button_css_enable.className = button_css_enable.className.replace(/active/g, '');
		}
		else
		{
			button_css_enable.className = button_css_enable.className + ' active';
			button_css_disable.className = button_css_disable.className.replace(/active/g, '');
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('button-css-disable').addEventListener('click', function()
	{
		disable_css();
		update_buttons_css();
	});

	document.getElementById('button-css-enable').addEventListener('click', function()
	{
		enable_css();
		update_buttons_css();

	});

	update_buttons_css();

	document.getElementById('ext-version').innerText += " " + browser.runtime.getManifest().version;
});