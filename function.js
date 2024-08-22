(function() {
    
    var gistBloggerPath = "https://cdn.jsdelivr.net/gh/alex-claure-m/sparkle@main/sparkle.js";

    // Initialize the load the main script.
    try {
        initMiScript();
    } catch(e) {
        var scriptId = 'gistPrinter';
        if (document.getElementById(scriptId) === null) {
            var elem = document.createElement('SCRIPT');
            elem.id = scriptId;
            elem.onload = function() {
              initMiScript();
            }
            elem.src = gistBloggerPath;
            var theBody = document.getElementsByTagName('body')[0];
            theBody.appendChild(elem);
        }
    }
})();
