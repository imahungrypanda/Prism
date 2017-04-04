const displayFilter = filterName => {
  let el = document.getElementsByClassName(filterName)[0];
  console.log(el);
  el.style.display = "flex";
};

const hideFilter = filterName => {
  let el = document.getElementsByClassName(filterName)[0];
  el.style.display = "none";
};

const clearFilter = list => () => {
  list.forEach(li => hideFilter(li.textContent));
};


document.addEventListener('DOMContentLoaded', () => {
  let list = document.getElementsByTagName('li');
  list = Array.prototype.slice.call(list);
  const clear = clearFilter(list);

  list.forEach(li => {
    li.addEventListener('click', e => {
      console.log(e.target.textContent);
      clear();

      switch (e.target.textContent) {
        case "Protanopia":
          displayFilter("Protanopia");
          break;
        case "Protanomaly":
          displayFilter("Protanomaly");
          break;
        case "Deuteranopia":
          displayFilter("Deuteranopia");
          break;
        case "Deuteranomaly":
          displayFilter("Deuteranomaly");
          break;
        case "Tritanopia":
          displayFilter("Tritanopia");
          break;
        case "Tritanomaly":
          displayFilter("Tritanomaly");
          break;
        case "Achromatopsia":
          displayFilter("Achromatopsia");
          break;
        case "Achromatomaly":
          displayFilter("Achromatomaly");
          break;

        default:
          break;
      }

    })
  });
});
