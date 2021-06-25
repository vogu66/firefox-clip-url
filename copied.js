browser.pageAction.onClicked.addListener((tab) => {
	var prom = navigator.clipboard.writeText(tab.url);
	prom.then( () =>
	{
		// copied
		browser.pageAction.setIcon({tabId: tab.id, path: "icons/like.svg"});
	}, () =>
	{
		// not copied
		browser.pageAction.setIcon({tabId: tab.id, path: "icons/unlike.svg"});
	} );
	setTimeout(function(){
		browser.pageAction.setIcon({tabId: tab.id, path: "icons/link-icon.svg"});
	},1000);
});
