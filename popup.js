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

const setFilter = (image, filter) => {
  setActive(filter);

  let filterDes = document.getElementById('filter-description');
  filterDes.innerHTML = descriptions[filter];

  // let filterURL = `url('assets/filters.svg#${filter.toLowerCase()}')`;
  let filterURL = `url('#${filter.toLowerCase()}')`;

  image.style.filter = filterURL;

  // save filter to storage
  console.log("Before save:", filter);
  chrome.storage.local.set({'filter':filter}, () => {
    console.log("saved filter");
  });

  // send message to content.js
  chrome.tabs.getSelected(function(tab){
    chrome.tabs.sendMessage(tab.id, {
      action: 'render',
      type: filter
    });
  });
}

const getCurrentFilter = image => {
  let filter = ""

  chrome.storage.local.get(["filter"], (savedFilter) => {
    console.log(savedFilter.filter);
    filter = savedFilter.filter;
    setFilter(image, filter);
  })

  return filter;
}

// chrome.runtime.onMessage.addListener((message, sender, sendReponse) => {
// 	let filter = 'normal'
// 	if (message.type === 'restoreFilter') {
// 		filter = sessionStorage.getItem('filter')
// 	}
//   // else if (message.type === 'applyFilter') {
// 	// 	filter = message.filter
// 	// 	sessionStorage.setItem('filter', message.filter)
// 	// 	if (filter !== 'normal' && svg.parentNode !== document.body) {
// 	// 		document.body.appendChild(svg)
// 	// 	} else if (filter === 'normal') {
// 	// 		svg.parentNode.removeChild(svg)
// 	// 	}
// 	// }
// 	// sendReponse(filter)
//   console.log("filter: ", filter);
// })

document.addEventListener('DOMContentLoaded', () => {
  injectSVG();
  let list = document.getElementsByTagName('li');
  list = Array.prototype.slice.call(list);
  let image = document.getElementsByTagName('body')[0];

  let currentFilter = getCurrentFilter(image);
  console.log("currentFilter: ", currentFilter);



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
      currentFilter = getCurrentFilter(image);
    }
    setFilter(image, currentFilter);
  });

  document.getElementsByClassName("off")[0].addEventListener("click", () => {
    document.getElementsByClassName("on")[0].className = "on";
    document.getElementsByClassName("off")[0].className += " active";
    clearFilter(image, currentFilter);
  });
});
