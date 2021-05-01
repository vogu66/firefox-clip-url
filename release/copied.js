browser.pageAction.onClicked.addListener(() => {
	var querying = browser.tabs.query({currentWindow: true, active: true});
	querying.then((tabs) => 
	{
		navigator.clipboard.writeText(tabs[0].url);
	})
});