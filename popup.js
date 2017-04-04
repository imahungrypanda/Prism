const displayFilter = filterName => {
  let el = document.getElementsByClassName(filterName)[0];
  console.log(el);
  el.style.display = "flex";
}


document.addEventListener('DOMContentLoaded', () => {
  let list = document.getElementsByTagName('li');
  list = Array.prototype.slice.call(list);

  list.forEach(li => {
    li.addEventListener('click', e => {
      console.log(e.target.textContent);

      switch (e.target.textContent) {
        case "Protanopia":
          displayFilter("Protanopia");
          break;
        case "Protanomaly":
          displayFilter("Protanomaly");
          break;
        default:

      }

    })
  });
});
