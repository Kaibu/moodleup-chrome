chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    var URL = request.url
    chrome.downloads.download({
      url: URL
    });
  });