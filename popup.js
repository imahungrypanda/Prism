const clearFilter = image => {
  image.style.webkitFilter = "none";
  image.style.filter = "none";
};

// const onClick = e => {
//   let type = e.target.textContent;
//   chrome.tabs.getSelected(function(tab){
//     chrome.tabs.sendMessage(tab.id, {
//       action: 'render',
//       type: e.target.textContent
//     });
//   });
// };

document.addEventListener('DOMContentLoaded', () => {
  let list = document.getElementsByTagName('li');
  list = Array.prototype.slice.call(list);

  list.forEach(li => {
    li.addEventListener('click', e => {
      let image = document.getElementsByClassName("filter")[0];
      clearFilter(image);

      // ----- send message to content.js
      chrome.tabs.getSelected(function(tab){
        chrome.tabs.sendMessage(tab.id, {
          action: 'render',
          type: e.target.textContent
        });
      });
      // -----

      switch (e.target.textContent) {
        case "Protanopia":
          image.style.webkitFilter = "url('assets/filters.svg#protanopia')";
          image.style.filter = "url('assets/filters.svg#protanopia')";
          break;

        case "Protanomaly":
          image.style.webkitFilter = "url('assets/filters.svg#protanomaly')";
          image.style.filter = "url('assets/filters.svg#protanomaly')";
          break;

        case "Deuteranopia":
          image.style.webkitFilter = "url('assets/filters.svg#deuteranopia')";
          image.style.filter = "url('assets/filters.svg#deuteranopia')";
          break;

        case "Deuteranomaly":
          image.style.webkitFilter = "url('assets/filters.svg#deuteranomaly')";
          image.style.filter = "url('assets/filters.svg#deuteranomaly')";
          break;

        case "Tritanopia":
          image.style.webkitFilter = "url('assets/filters.svg#tritanopia')";
          image.style.filter = "url('assets/filters.svg#tritanopia')";
          break;

        case "Tritanomaly":
          image.style.webkitFilter = "url('assets/filters.svg#tritanomaly')";
          image.style.filter = "url('assets/filters.svg#tritanomaly')";
          break;

        case "Achromatopsia":
          image.style.webkitFilter = "url('assets/filters.svg#achromatopsia')";
          image.style.filter = "url('assets/filters.svg#achromatopsia')";
          break;

        case "Achromatomaly":
          image.style.webkitFilter = "url('assets/filters.svg#achromatomaly')";
          image.style.filter = "url('assets/filters.svg#achromatomaly')";
          break;

        default:
          break;
      }

    });
  });
});
