// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "extractLinks") {
    // Extract links from the current web page
    const linkList = Array.from(document.querySelectorAll('a'))
      .map(a => a.href);
    // Send the link list back to the background script
    sendResponse(linkList);
  }
});