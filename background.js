

chrome.storage.sync.get("filter", savedFilter => {
  // filter = savedFilter.filter;
  console.log(savedFilter);
  // setFilter(image, filter);
  // chrome.tabs.sendMessage(tab.id, {
  //   action: 'render',
  //   type: filter
  // });
})
