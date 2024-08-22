(function() {
    
    var gistBloggerPath = "https://cdn.jsdelivr.net/gh/alex-claure-m/sparkle@main/sparkle.js";
      try {
             initMiScript();
           } catch(e) {
            var scriptId = 'miScript';
            if (document.getElementById(scriptId) === null) {
                 var elem = document.createElement('SCRIPT');
                 elem.id = scriptId;
                  elem.onload = function() {
                    initMiScript(); // Llama la función después de que el script se cargue
                  };
                  elem.src = miScriptURL; // Cambia esto a la URL de tu script externo si lo tienes en uno
                   var theBody = document.getElementsByTagName('body')[0];
                   theBody.appendChild(elem);
             }
          }
})();
