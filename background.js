chrome.storage.sync.get('filter', function (obj) {
    if (obj.filter === null || obj.filter === undefined) {
        obj.filter = "normal";
        chrome.storage.sync.set({'filter': obj.filter});
    }
    addFilter(obj.filter);
});
