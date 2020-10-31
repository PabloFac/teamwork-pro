// 
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

function simulateKey (keyCode, type, modifiers) {
	var evtName = (typeof(type) === "string") ? "key" + type : "keydown";	
	var modifier = (typeof(modifiers) === "object") ? modifier : {};

	var event = document.createEvent("HTMLEvents");
	event.initEvent(evtName, true, false);
	event.keyCode = keyCode;
	
	for (var i in modifiers) {
		event[i] = modifiers[i];
	}

	document.dispatchEvent(event);
}
function applySettings(settings){
  if (settings == undefined){
    // default config
    settings = {
      darkMode: true,
      autoSendMeet: true,
      autoOpenMeet: true,
      showTwMeet: true,
      meetBtnEnabled: true,
      randomMeetName: false,
      textPrefix: 'Hacemos call? ',
      textSufix: ''
    };
  }
  // Apply DarkMode theme if needed
  if (settings.darkMode == true){
    document.body.classList.add("DarkMode");
  } else {
    document.body.classList.remove("DarkMode");
  }
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (var key in changes) {
    var storageChange = changes[key];
    if (key == 'settings'){
      applySettings(storageChange.newValue);
    }
  }
});

chrome.storage.sync.get(['settings'], function(data) {
  applySettings(data.settings);
  let settings = data.settings;

  insertionQ('.s-starred-conversations-list').every(function(element){

       // Agregar menu
      let twContainer = '<div id="TwContainer" style="height:200px;display:flex;justify-content:space-between;margin:20px 15px"><div>Teamwork Chat Pro</div><div><button><img src="img/icons8-settings-16.png"></button></div></div>';
      element.insertAdjacentHTML('beforebegin', twContainer);
      
  });

  if (settings.meetBtnEnabled){
    insertionQ('.s-message-form--buttons-inside-inline').every(function(element){

    // Agregar boton
    let btn =  '<span id="btnMeetContainer"><div id="btnMeet" class="s-file-upload s-message-form__file-upload has-tooltip"> <div class="s-file-upload__controls"> <form class="has-tooltip" aria-describedby="tooltip_ap85c4o6vx"> <label> <span class="s-file-upload__attachment-button s-file-upload__attachment-button--enabled"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12pt" class="s-file-upload__attachment-icon" height="13pt" viewBox="0 0 12 13" version="1.1"> <defs> <linearGradient id="linear0" gradientUnits="userSpaceOnUse" x1="0.260701" y1="0.680422" x2="0.749491" y2="0.192792" gradientTransform="matrix(11.996094,0,0,12.960938,0,0)"> <stop offset="0" style=" stop-color: rgb(1.960784%, 54.509804%, 49.411765%); stop-opacity: 1; "></stop> <stop offset="0" style=" stop-color: rgb(1.960784%, 55.294118%, 50.196078%); stop-opacity: 1; "></stop> <stop offset="1" style=" stop-color: rgb(1.960784%, 55.294118%, 49.803922%); stop-opacity: 1; "></stop> </linearGradient> <image id="image10" width="12" height="13" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQokWNgGAWjYIAAAAJ9AAFs6DZlAAAAAElFTkSuQmCC"> </image> <image id="image18" width="12" height="13" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQokWNgGAWjYIAAAAJ9AAFs6DZlAAAAAElFTkSuQmCC"> </image> <filter id="alpha" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"> <feColorMatrix type="matrix" in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix> </filter> <image id="image23" width="12" height="13" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAABmJLR0QA/wD/AP+gvaeTAAAAj0lEQVQokWNgGHSAEcbIMjJinXnzpgBe1WxsP1lg7D8PH3Ic/PlTAZ/6Xb9+/WQixTll//+zkqQhh4HhD0ka3JiZP5GkYaKQ0EuiNUxhYXl28vnzb4zIgnN5eEQ4fv0Suvn/P4fb///sMHF7Fpbnf3/8eILXxCMsLKa8LCxGc3l4RIhywjU+PsEsIyNWdHEA3YkqN1eJz70AAAAASUVORK5CYII="> </image> <mask id="mask0"> <g filter="url(#alpha)"> <use xlink:href="#image23"></use> </g> </mask> <linearGradient id="linear1" gradientUnits="userSpaceOnUse" x1="0.300483" y1="0.273023" x2="0.819404" y2="0.846402" gradientTransform="matrix(11.886719,0,0,8.738281,2.734375,3.574219)"> <stop offset="0" style="stop-color: rgb(0%, 0%, 0%); stop-opacity: 0.211765"></stop> <stop offset="1" style=" stop-color: rgb(84.705882%, 84.705882%, 84.705882%); stop-opacity: 0; "></stop> </linearGradient> <clipPath id="clip1"> <rect width="12" height="13"></rect> </clipPath> <g id="surface25" clip-path="url(#clip1)"> <path style="stroke: none; fill-rule: nonzero; fill: url(#linear1)" d="M 2.734375 7.378906 L 7.84375 12.3125 L 14.621094 7.6875 L 9.722656 3.574219 L 8.675781 5.25 Z M 2.734375 7.378906 "> </path> </g> <image id="image30" width="12" height="13" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAABmJLR0QA/wD/AP+gvaeTAAAAJ0lEQVQokWNgGIGAEYnNzMDAwI5D3TcYgwVJkI2BgYEfn+JRQCwAAKxoAhE8vXNpAAAAAElFTkSuQmCC"> </image> </defs> <g id="surface1"> <path style="stroke: none; fill-rule: nonzero; fill: url(#linear0)" d="M 5.984375 0 C 2.679688 0 0 2.441406 0 5.453125 C 0 8.46875 2.679688 10.910156 5.984375 10.910156 L 5.996094 12.960938 C 9.074219 11.332031 11.996094 9.152344 11.996094 5.453125 C 11.996094 2.441406 9.289062 0 5.984375 0 Z M 5.984375 0 "> </path> <use xlink:href="#image10"></use> <use xlink:href="#image18"></use> <use xlink:href="#surface25" mask="url(#mask0)"></use> <use xlink:href="#image30"></use> <path style=" stroke: none; fill-rule: evenodd; fill: rgb(96.470588%, 96.470588%, 96.470588%); fill-opacity: 1; " d="M 2.605469 5.605469 L 2.605469 7.105469 C 2.605469 7.5 2.953125 7.824219 3.375 7.824219 L 7.359375 7.824219 C 7.785156 7.824219 8.132812 7.5 8.132812 7.105469 L 8.132812 6.160156 L 9.707031 7.632812 L 9.707031 5.605469 Z M 2.605469 5.605469 "> </path> <path style=" stroke: none; fill-rule: nonzero; fill: rgb(88.627451%, 88.627451%, 88.627451%); fill-opacity: 1; " d="M 9.707031 5.605469 L 9.707031 3.574219 L 8.132812 5.046875 L 8.132812 4.109375 C 8.132812 3.714844 7.785156 3.390625 7.359375 3.390625 L 3.375 3.390625 C 2.953125 3.390625 2.605469 3.714844 2.605469 4.109375 L 2.605469 5.605469 Z M 9.707031 5.605469 "> </path> </g> </svg> </span></label> </form> </div></div><span>';   
    element.insertAdjacentHTML('afterbegin', btn);
    

    // Agregar handler of click de boton
    $('#btnMeetContainer').click(function(){
      
        // Nombre de meet
        let linkMeet;
        let nombreFinal = '';
        if (settings.randomMeetName){
          nombreFinal = generateName();
        } else {
          nombreFinal = $('.s-conversation-title__title-text').text();
        }
        nombreFinal = nombreFinal.replace(/(\r\n|\n|\r)/,"");
        nombreFinal = nombreFinal.trim();
        /*
        nombreFinal = nombreFinal.replace(/[^á]/g, 'a');
        nombreFinal = nombreFinal.replace(/[^é]/g, 'e');
        nombreFinal = nombreFinal.replace(/[^í]/g, 'i');
        nombreFinal = nombreFinal.replace(/[^ó]/g, 'o');
        nombreFinal = nombreFinal.replace(/[^ú]/g, 'u');
        */
        nombreFinal = nombreFinal.replace(/[^a-zA-Z0-9]/g, '');
        linkMeet = 'https://g.co/meet/' + nombreFinal;

        // Agregar texto al campo
        let elem = document.getElementsByClassName("ql-editor")[0];
        elem.insertAdjacentHTML('beforeend', '<p>' + settings.textPrefix + ' ' + linkMeet + ' ' + settings.textSufix + '</p>');
        
        if (settings.autoSendMeet){
          setTimeout(function(){
            // Apretar boton de enviar
            $(".s-message-field__send-button").click();
            // Abrir meet en nueva tab
            if (settings.autoOpenMeet){
              window.open(linkMeet);
            }    
          }, 200)
        }

      });

    });

    // Meet Link
    /*
    insertionQ('.s-message__contents p a[href*="g.co/meet/"]').every(function(element){

      let newId = "meetLink_" + element.href.substring(element.href.lastIndexOf("/") + 1);
      let btn =  '<button data-link="{0}" class="meetButton {1}" id="{1}">Abrir en TW</button>'.format(element.href, newId);  
      element.insertAdjacentHTML('beforebegin', btn);
    
      $("." + newId).off('click').click(function(){
       
        let linkMeet = this.getAttribute('data-link') + '#?authuser=1';
        let iframe = '<iframe class="s-starred-conversations-list" id="inlineFrameExample" title="" target="_top" width="{0}" height="{1}" src="{2}"></iframe>'.format(300,200,linkMeet);
        iframe = '<script src="https://apis.google.com/js/platform.js"></script><div id="placeholder-div1"></div><script>gapi.hangout.render(\'placeholder-div1\', {\'render\': \'createhangout\',\'initial_apps\': [{\'app_id\' : \'184219133185\', \'start_data\' : \'dQw4w9WgXcQ\', \'app_type\' : \'ROOM_APP\' }]});</script>';

        let elem = document.getElementsByClassName("p-chat__left-sidebar")[0];
        elem.insertAdjacentHTML('beforebegin', iframe);

      });
    
      
    });
    */

  }

});
