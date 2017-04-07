const clearFilter = (image, filterId) => {
  setFilter(image, "");
  if (filterId) {
    document.getElementById(filterId.toLowerCase()).className = "";
  }
};

const setActive = filterId => {
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
      document.getElementsByClassName("off")[0].className = "off";
      document.getElementsByClassName("on")[0].className += " active";
      deactive(currentFilter);
      currentFilter = e.target.textContent;
      setFilter(image, currentFilter);

    });
  });

  document.getElementsByClassName("on")[0].addEventListener("click", () => {
    document.getElementsByClassName("off")[0].className = "off";
    document.getElementsByClassName("on")[0].className += " active";
    if (!currentFilter) {
      currentFilter = "Protanopia";
    }
    setFilter(image, currentFilter);
  });

  document.getElementsByClassName("off")[0].addEventListener("click", () => {
    document.getElementsByClassName("on")[0].className = "on";
    document.getElementsByClassName("off")[0].className += " active";
    clearFilter(image, currentFilter);
  });
});

const setFilter = (image, filter) => {
  setActive(filter);
  let filterURL = `url('#${filter.toLowerCase()}')`;
  image.style.filter = filterURL;
  // ----- send message to content.js
  chrome.tabs.getSelected(function(tab){
    chrome.tabs.sendMessage(tab.id, {
      action: 'render',
      type: filter
    });
  });
  // -----

}
