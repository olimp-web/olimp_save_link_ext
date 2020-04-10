let api_posts_url = "http://inside.olimp-union.com/api/posts/"


//url in form
chrome.tabs.query({'active': true},
    function(tabs){
        var url_field = document.getElementById("linkUrlField");
        console.log(document)
        console.log(url_field)
        url_field.value = tabs[0].url
    }
);

//sending form using fetch api requires Access-Control-Allow-Origin from server
function sendFormToAPI(e) {
    e.preventDefault();

    const formData = new FormData(e.target)

    const request_init = {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(Object.fromEntries(formData))
    };

    fetch(api_posts_url, request_init)
    .then((response)=>{
        if (!response.ok) {
            throw new Error('HTTP error! status: '+response.status+'\n'+response.body);
        }
        return response;
    })
    .then((response) => {
        alert('Sent!');
    });
};

//sending form using XMLHttpRequest
function sendFormXHR(e) {
    let formData = new FormData(e.target);
    let request = new XMLHttpRequest();


    request.addEventListener('load', alert('Данные отпрвлены! (но это не точно)'));
    request.open('post', e.target.action);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(Object.fromEntries(formData)));
};


document.addEventListener('DOMContentLoaded', (e) =>{
//    document.getElementById('saveLinkForm').addEventListener("submit", sendFormToAPI);
    document.getElementById('saveLinkForm').addEventListener("submit", sendFormXHR);
});
