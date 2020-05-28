// chrome.storage.local.set({key: value}, function() {
//           console.log('Value is set to ' + value);
//         });
//
//         chrome.storage.local.get(['key'], function(result) {
//         console.log('Value currently is ' + result.key);
//       });
let $save_btn = document.getElementById('saveSettingsButton'),
    $token_input = document.getElementById('APITokenInput')
$save_btn.onclick = function (e) {
  chrome.storage.local.set({
    "token_": $token_input.value
  }, function() {
    console.log('Value is set to ' + $token_input.value);
  });
}

window.onload = function () {
  chrome.storage.local.get(['token_'], function(result) {
    $token_input.value = result['token_']
         console.log('Value currently is ' + result['token_']);
  });
}
