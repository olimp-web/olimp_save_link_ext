'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.pageAction.show()
});
