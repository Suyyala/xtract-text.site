
chrome.action.onClicked.addListener(function (tab) {
    // Send a message to the content script to extract the links
    chrome.tabs.sendMessage(tab.id, { action: "extractLinks" }, function (linkList) {
        // Convert web page content to UTF-8 for text consumption
        Promise.all(linkList.map(link => {
            return fetch(link)
                .then(response => response.text())
                .then(text => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(text, "text/html");
                    const content = doc.documentElement.textContent;
                    return { link, content };
                });
        })).then(results => {
            // Store link and content information in a JSON string
            const jsonData = JSON.stringify(results);
            console.log(jsonData);
            // Store the JSON string in local storage
            localStorage.setItem("linkData", jsonData);
        });
    });
});
