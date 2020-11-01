console.log('Start of popup.js');

let defaultConfig = {
  meetButton: 3,
  linkName: 0,
  color: '#fff',
  theme: 'dark'
};

function resetColorSelection(){

}

function saveSettings(settings){
  chrome.storage.sync.set({'settings': settings}, function() {
      console.log('Settings saved');
    });
}

function mostrarConfiguracionActual(){ 

  chrome.storage.sync.get(['settings'], function(data) {
    
    let extensionSettings = data.settings;
    console.log("TW-CHAT-PRO", extensionSettings);

    if (extensionSettings == undefined){
      extensionSettings == defaultConfig
    };

    // Boton de Meet
    $('#meetDesactivado').prop('checked', extensionSettings.meetButton == 0);
    $('#meetLink').prop('checked', extensionSettings.meetButton == 1);
    $('#meetLinkSend').prop('checked', extensionSettings.meetButton == 2);
    $('#meetSendOpen').prop('checked', extensionSettings.meetButton == 3);
    // Nombre de Meet
    $('#linkAleatorio').prop('checked', extensionSettings.linkName == 0);
    $('#linkChat').prop('checked', extensionSettings.linkName == 1);
    $('#linkPreguntar').prop('checked', extensionSettings.linkName == 2);

   });

}

function guardarConfiguracionActual(){

  let extensionSettings = defaultConfig;
 
  // Boton de Meet
  if ($('#meetDesactivado').prop('checked')){
    extensionSettings.meetButton = 0;
  } else if ($('#meetLink').prop('checked')){
    extensionSettings.meetButton = 1;
  } else if ($('#meetLinkSend').prop('checked')){
    extensionSettings.meetButton = 2;
  } else if ($('#meetSendOpen').prop('checked')){
    extensionSettings.meetButton = 3;
  }
  // Nombre de Meet
  if ($('#linkAleatorio').prop('checked')){
    extensionSettings.linkName = 0;
  } else if ($('#linkChat').prop('checked')){
    extensionSettings.linkName = 1;
  } else if ($('#linkPreguntar').prop('checked')){
    extensionSettings.linkName = 2;
  }
  
  saveSettings(extensionSettings);
}


mostrarConfiguracionActual();

$('.inputControl').on('change', function(){
  guardarConfiguracionActual();
});


/*
  Google Analitycs
*/
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-46PK89KKLN');
gtag('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
gtag('require', 'displayfeatures');
gtag('send', 'pageview', '/options.html');
  
console.log('End of popup.js');