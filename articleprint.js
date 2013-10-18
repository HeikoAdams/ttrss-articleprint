function printInNewWindow(id) {
	try {
		var query = "?op=pluginhandler&plugin=articleprint&method=getInfo&id=" + param_escape(id);

		console.log(query);

		var w = window.open('backend.php?op=backend&method=loading', 'print_article',
			"status=0,toolbar=0,location=0,width=500,height=450,scrollbars=1,menubar=0");

		new Ajax.Request("backend.php",	{
			parameters: query,
			onComplete: function(transport) {
				var ti = JSON.parse(transport.responseText);
				w.location.href = ti.link;
				w.print();
			} });


	} catch (e) {
		exception_error("printprticle", e);
	}
}

