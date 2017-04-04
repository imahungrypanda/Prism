// content.js
// console.log("Hello from your Chrome extension!")
//
// var firstHref = $("a[href^='http']").eq(0).attr("href");
//
// console.log(firstHref);


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // if( request.message === "clicked_browser_action" ) {
    //   var firstHref = $("a[href^='http']").eq(0).attr("href");
    //   console.log("FirstLink: ", firstHref);
    // }
    console.log(request);
  }
);
