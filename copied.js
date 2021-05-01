browser.pageAction.onClicked.addListener(() => {
	var querying = browser.tabs.query({currentWindow: true, active: true});
	querying.then((tabs) => 
	{
		var promise = navigator.clipboard.writeText(tabs[0].url);
		/*
		promise.then( () => 
		{
			// copied
			browser.pageAction.setIcon({tabID: tabs[0].url, path:"icons/link-icon-red.svg"})
		}, () => 
		{
			// not copied
			browser.pageAction.setIcon({tabID: tabs[0].url, path:"icons/link-icon-red.svg"})
		} );
		*/
	})
});