chrome.runtime.onInstalled.addListener(()=> {
    console.log("asdfghjk")
})

chrome.bookmarks.onCreated.addListener(() => {
  console.log("i just booked");
});