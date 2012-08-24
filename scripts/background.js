function is_changba_com(tabId,changeInfo,tab)
{
    if(/^http:\/\/changba\.com\/s/.test(tab.url))
    {
        chrome.pageAction.show(tabId);
    }
}
chrome.tabs.onUpdated.addListener(is_changba_com);
