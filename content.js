chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse){
    if( message.action === 'render' ){
      // $('*').each(() => {
        applyFilter(message.type);
      // });
      sendResponse(true);
    }
    // if( request.message === "clicked_browser_action" ) {
    //   var firstHref = $("a[href^='http']").eq(0).attr("href");
    //   console.log("FirstLink: ", firstHref);
    // }
    // console.log(request);
  }
);

function applyFilter (filter) {
  let page = document.getElementsByTagName('html')[0];

  switch (filter) {
    case "Protanopia":
    page.style.webkitFilter = "url('https://drive.google.com/file/d/0B3_JvoUZqxgRZ3JadmJxYy1yU28/view?usp=sharing')";
    page.style.filter = "url('https://drive.google.com/file/d/0B3_JvoUZqxgRZ3JadmJxYy1yU28/view?usp=sharing')";
    break;

    case "Protanomaly":
    page.style.webkitFilter = "url('assets/filters.svg#protanomaly')";
    page.style.filter = "url('assets/filters.svg#protanomaly')";
    break;

    case "Deuteranopia":
    page.style.webkitFilter = "url('assets/filters.svg#deuteranopia')";
    page.style.filter = "url('assets/filters.svg#deuteranopia')";
    break;

    case "Deuteranomaly":
    page.style.webkitFilter = "url('assets/filters.svg#deuteranomaly')";
    page.style.filter = "url('assets/filters.svg#deuteranomaly')";
    break;

    case "Tritanopia":
    page.style.webkitFilter = "url('assets/filters.svg#tritanopia')";
    page.style.filter = "url('assets/filters.svg#tritanopia')";
    break;

    case "Tritanomaly":
    page.style.webkitFilter = "url('assets/filters.svg#tritanomaly')";
    page.style.filter = "url('assets/filters.svg#tritanomaly')";
    break;

    case "Achromatopsia":
    page.style.webkitFilter = "url('assets/filters.svg#achromatopsia')";
    page.style.filter = "url('assets/filters.svg#achromatopsia')";
    break;

    case "Achromatomaly":
    page.style.webkitFilter = "url('assets/filters.svg#achromatomaly')";
    page.style.filter = "url('assets/filters.svg#achromatomaly')";
    break;

    default:
    break;
  }
}

// function getImages () {
//   let result = [];
//
//   let htmlImages = document.images;
//
//   for (let i = 0; i < htmlImages.length; i++) {
//     result.push(htmlImages[i].src);
//   }
//
//   $('*').each(function(){
//     let bgImage = $(this).css('background-image');
//     if ( bgImage && bgImage !== 'none') {
//       bgImage = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
//       result.push(bgImage);
//     }
//   });
//
//   return result;
// }
//
// content.js
// console.log("Hello from your Chrome extension!")
//
// var firstHref = $("a[href^='http']").eq(0).attr("href");
//
// console.log(firstHref);
