(function() {
    
    var gistBloggerPath = "https://cdn.jsdelivr.net/gh/alex-claure-m/sparkle@main/sparkle.js";
      try {
             initMiScript();
           } catch(e) {
            var scriptId = &#39;miScript&#39;;
            if (document.getElementById(scriptId) === null) {
                 var elem = document.createElement(&#39;SCRIPT&#39;);
                 elem.id = scriptId;
                  elem.onload = function() {
                    initMiScript(); // Llama la función después de que el script se cargue
                  };
                  elem.src = miScriptURL; // Cambia esto a la URL de tu script externo si lo tienes en uno
                   var theBody = document.getElementsByTagName(&#39;body&#39;)[0];
                   theBody.appendChild(elem);
             }
          }
})();
