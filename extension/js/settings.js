
function saveSettings(settings){
    chrome.storage.sync.set({'settings': settings}, function() {
        console.log('Settings saved');
      });
}