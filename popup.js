const descriptions = {
  ""              : "Prism allows you to view the web through the eyes of the color-blind. <br>This is an example of normal, unaltered vision.",
  "Protanopia"    : "A loss of sensitivity to red light. This is characterized by a tendency to confuse reds and greens.",
  "Protanomaly"   : "Characterized by the retina's diminished response to red light.",
  "Deuteranopia"  : "A loss of sensitivity to green light. This is characterized by a tendency to confuse blues and greens, and greens and reds.",
  "Deuteranomaly" : "Characterized by the retina's diminished response to green light.",
  "Tritanopia"    : "A loss of sensitivity to blue and yellow light. Overall, sensitivity to blue light is diminished.",
  "Tritanomaly"   : "Characterized by the retina's diminished response to blue light.",
  "Achromatopsia" : "Total color blindness, often associated with reduced visual acuity.",
  "Achromatomaly" : "Diminished sensitivity to overall visible light."
};

const clearFilter = (image, filterId) => {
  setFilter(image, "");
  deactive(filterId);
};

const setActive = filterId => {
  if (filterId) {
    document.getElementById(filterId).className = "active";
  }
};

const deactive = filterId => {
  if (filterId) {
    document.getElementById(filterId).className = "";
  }
};



document.addEventListener('DOMContentLoaded', () => {
  injectSVG();
  let currentFilter = "";
  let list = document.getElementsByTagName('li');
  let image = document.getElementsByTagName('body')[0];
  list = Array.prototype.slice.call(list);
  setFilter(image, currentFilter);


  document.getElementById('about').addEventListener("click", e => {
    e.preventDefault();
    let newURL = "https://imahungrypanda.github.io/Prism/";
    chrome.tabs.create({ url: newURL });
  });


  list.forEach(li => {
    li.addEventListener('click', e => {
      document.getElementsByClassName("off")[0].className = "off";
      document.getElementsByClassName("on")[0].className += " active";
      deactive(currentFilter);
      currentFilter = e.target.textContent;
      setFilter(image, currentFilter);
      // filterDes.innerHTML = descriptions[currentFilter];

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

  let filterDes = document.getElementById('filter-description');
  filterDes.innerHTML = descriptions[filter];

  // let filterURL = `url('assets/filters.svg#${filter.toLowerCase()}')`;

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
