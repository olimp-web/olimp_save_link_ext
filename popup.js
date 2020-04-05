

chrome.tabs.query({'active': true},
    function(tabs){
        var url_field = document.getElementById("linkUrlField");
        console.log(document)
        console.log(url_field)
        url_field.value = tabs[0].url
    }
);
