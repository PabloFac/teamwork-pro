
function guardarConfiguracionActual(){

  let extensionSettings = {
    darkMode: $('#darkMode').prop('checked'),
    autoSendMeet: $('#autoSend').prop('checked'),
    autoOpenMeet: $('#autoOpen').prop('checked'),
    showTwMeet: $('#showTwMeet').prop('checked'),
    meetBtnEnabled: $('#meetBtnEnabled').prop('checked'),
    randomMeetName: $('#meetNameRandom').prop('checked'),
    textPrefix: $('#meetMessagePrefix').val(),
    textSufix: $('#meetMessageSufix').val()
  }
  console.log('SAVE CONFIG', extensionSettings);
  saveSettings(extensionSettings);
  mostrarConfiguracionActual();
}
function mostrarConfiguracionActual(){ 

  chrome.storage.sync.get(['settings'], function(data) {
    
    let extensionSettings = data.settings;
    console.log('SHOW CONFIG', extensionSettings);
    if (extensionSettings != undefined){
      $('#darkMode').prop('checked', extensionSettings.darkMode);
      $('#autoSend').prop('checked', extensionSettings.autoSendMeet);
      $('#autoOpen').prop('checked', extensionSettings.autoOpenMeet);
      $('#showTwMeet').prop('checked', extensionSettings.showTwMeet);
      $('#meetBtnEnabled').prop('checked', extensionSettings.meetBtnEnabled);
      $('#meetNameRandom').prop('checked', extensionSettings.randomMeetName);
      $('#meetNameChat').prop('checked', !extensionSettings.randomMeetName);
      $('#meetMessagePrefix').val(extensionSettings.textPrefix);
      $('#meetMessageSufix').val(extensionSettings.textSufix);
    }


   });

}
mostrarConfiguracionActual();

$('#saveBtn').on('click', function(){
  guardarConfiguracionActual();
});
$('.inputControl').on('change', function(){
  guardarConfiguracionActual();
});
