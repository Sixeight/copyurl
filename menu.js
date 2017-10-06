
(function() {
  var parentId = chrome.contextMenus.create({
    "type"     : "normal",
    "title"    : "copyurl",
    "contexts" : ["page"]
  });

  chrome.contextMenus.create({
    "parentId" : parentId,
    "type"     : "normal",
    "title"    : "original",
    "contexts" : ["page"],
    "onclick"  : copyOriginal
  });

  chrome.contextMenus.create({
    "parentId" : parentId,
    "type"     : "normal",
    "title"    : "percent encoded",
    "contexts" : ["page"],
    "onclick"  : copyPercentEncoded
  });

  function copyOriginal(info) {
    const url = info.pageUrl;
    copyToClipBoard(url);
  }

  function copyPercentEncoded(info) {
    const url = info.pageUrl;
    copyToClipBoard(encodeURIComponent(url));
  }

  function copyToClipBoard(text) {
    const textArea = document.createElement("textarea");
    textArea.style.cssText = "visibility: none;";
    document.body.appendChild(textArea);
    textArea.value = text;
    textArea.select();
    document.execCommand("copy");
    document.removeChild(textArea);
  }
}());

