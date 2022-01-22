let sendData = document.getElementById("sendData");

sendData.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: writeToDatabase,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function writeToDatabase() {
  (async () => {
    const rawResponse = await fetch(
      "https://safe-readable-backend.herokuapp.com/api/sentiment",
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          webData: String(document.body.innerHTML),
        }),
      }
    );
    const content = await rawResponse.json();

    console.log(content);
  })();
}
