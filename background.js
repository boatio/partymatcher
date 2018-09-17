chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "링크";
    chrome.tabs.create({ url: newURL });
});