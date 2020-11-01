console.log('Start of popup.js');

let defaultConfig = {
  meetButton: 3,
  linkName: 0,
  color: '#fff',
  theme: 'dark'
};

let colorSelected, themeSelected;

function getSelectedConfig(){

  let extensionSettings = defaultConfig;
  extensionSettings.color = colorSelected;
  extensionSettings.theme = themeSelected;
 
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

  return extensionSettings;
}

function guardarConfiguracionActual(){

  saveSettings(getSelectedConfig());

}

function saveSettings(settings){
  chrome.storage.sync.set({'settings': settings}, function() {
      mostrarConfiguracionActual();
  });
}

function mostrarConfiguracionActual(){ 

  chrome.storage.sync.get(['settings'], function(data) {
    
    let settings = data.settings;
    console.log("TW-CHAT-PRO", settings);

    if (settings == undefined){
      settings == defaultConfig
    };

    // Boton de Meet
    $('#meetDesactivado').prop('checked', settings.meetButton == 0);
    $('#meetLink').prop('checked', settings.meetButton == 1);
    $('#meetLinkSend').prop('checked', settings.meetButton == 2);
    $('#meetSendOpen').prop('checked', settings.meetButton == 3);
    // Nombre de Meet
    $('#linkAleatorio').prop('checked', settings.linkName == 0);
    $('#linkChat').prop('checked', settings.linkName == 1);
    $('#linkPreguntar').prop('checked', settings.linkName == 2);

    // Botones
    let classSelector = "border";
    $('.color-btn').removeClass(classSelector);
    $('.theme-btn').removeClass(classSelector);
    // Color
    if (settings.color == 'rgb(29, 28, 57)'){ $('#classicColor').addClass(classSelector); }
    else if (settings.color == '#0066CC'){ $('#blueColor').addClass(classSelector); }
    else if (settings.color == '#FF0000'){ $('#redColor').addClass(classSelector); }
    else if (settings.color == '#9933FF'){ $('#purpleColor').addClass(classSelector); }
    else { $('#customColor').addClass(classSelector); }
    // Tema
    if (settings.theme == 'dark'){ $('#darkTheme').addClass(classSelector); }
    else if (settings.theme == 'black'){ $('#blackTheme').addClass(classSelector); }
    else { $('#classicTheme').addClass(classSelector); }

    colorSelected = settings.color;
    themeSelected = settings.theme;

  });

}


$('.theme-btn').click(function(event){
  themeSelected = $(event.target).attr('data-theme');
  guardarConfiguracionActual();
});
$('.color-btn').click(function(event){
  colorSelected = $(event.target).attr('data-color');
  guardarConfiguracionActual();
});
$('#customColor').click(function(event){
  let color = prompt('Color code:', colorSelected)
  colorSelected = color;
  guardarConfiguracionActual();
});



$('.inputControl').on('change', function(){
  guardarConfiguracionActual();
});



mostrarConfiguracionActual();
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