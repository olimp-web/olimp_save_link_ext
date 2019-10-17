
let $url_field = document.getElementById("linkUrlField");

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      $url_field.value = tabs[0].url
   }
);
