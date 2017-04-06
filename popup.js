const clearFilter = (image, filterId) => {
  image.style.webkitFilter = "none";
  image.style.filter = "none";
  if (filterId) {
    document.getElementById(filterId.toLowerCase()).className = "";
  }
};

const setActive = filterId => {
  console.log(filterId);
  if (filterId) {
    document.getElementById(filterId.toLowerCase()).className = "active";
  }
};

const deactive = filterId => {
  if (filterId) {
    document.getElementById(filterId.toLowerCase()).className = "";
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let currentFilter = "";
  let list = document.getElementsByTagName('li');
  let image = document.getElementsByClassName("filter")[0];
  list = Array.prototype.slice.call(list);
  setFilter(image, currentFilter);

  list.forEach(li => {
    li.addEventListener('click', e => {
      deactive(currentFilter);
      currentFilter = e.target.textContent;
      setActive(currentFilter);
      setFilter(image, currentFilter);

      // ----- send message to content.js
      chrome.tabs.getSelected(function(tab){
        chrome.tabs.sendMessage(tab.id, {
          action: 'render',
          type: currentFilter
        });
      });
      // -----

    });
  });

  let toggleOn = document.getElementsByClassName("on")[0];
  toggleOn.addEventListener("click", () => setFilter(image, currentFilter));

  let toggleOff = document.getElementsByClassName("off")[0];
  toggleOff.addEventListener("click", () => clearFilter(image, currentFilter));
});

const setFilter = (image, filter) => {
  switch (filter) {
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
}
