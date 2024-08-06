var colour = "#21336b"; // Color rosado pastel
var colour2 = "#665754"; // Color lila pastel
var sparkles = 150; // Número de destellos

var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var tiny = [];
var star = [];
var starv = [];
var starx = [];
var stary = [];
var tinyx = [];
var tinyy = [];
var tinyv = [];

function initializeSparks() {
    for (var i = 0; i < sparkles; i++) {
        var rats = createDiv(3, 3);
        rats.style.visibility = "hidden";
        document.body.appendChild(tiny[i] = rats);
        starv[i] = 0;
        tinyv[i] = 0;
        rats = createDiv(5, 5);
        rats.style.backgroundColor = "transparent";
        rats.style.visibility = "visible";
        var rlef = createDiv(1, 5);
        var rdow = createDiv(5, 1);
        rats.appendChild(rlef);
        rats.appendChild(rdow);
        rlef.style.top = "2px";
        rlef.style.left = "0px";
        rdow.style.top = "0px";
        rdow.style.left = "2px";
        document.body.appendChild(star[i] = rats);
    }
}

function sparkle() {
    if (x !== ox || y !== oy) {
        ox = x;
        oy = y;
        for (var c = 0; c < sparkles; c++) {
            if (!starv[c]) {
                star[c].style.left = starx[c] = x + "px";
                star[c].style.top = stary[c] = y + "px";
                star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
                star[c].style.visibility = "visible";
                starv[c] = 50;
                break;
            }
        }
    }
    for (var c = 0; c < sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
    }
    setTimeout(sparkle, 40);
}

function update_star(i) {
    starv[i]--;
    if (starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
    if (starv[i] > 0) {
        stary[i] += 1 + Math.random() * 3;
        if (stary[i] < (shigh + sdown)) {
            star[i].style.top = stary[i] + "px";
            starx[i] += (i % 5 - 2) / 5;
            star[i].style.left = starx[i] + "px";
        } else {
            star[i].style.visibility = "hidden";
            starv[i] = 0;
        }
    } else {
        tinyv[i] = 50;
        tiny[i].style.top = tinyy[i] = stary[i] + "px";
        tiny[i].style.left = tinyx[i] = starx[i] + "px";
        tiny[i].style.width = "2px";
        tiny[i].style.height = "2px";
        star[i].style.visibility = "hidden";
        tiny[i].style.visibility = "visible";
    }
}

function update_tiny(i) {
    tinyv[i]--;
    if (tinyv[i] == 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
    }
    if (tinyv[i] > 0) {
        tinyy[i] += 1 + Math.random() * 3;
        if (tinyy[i] < (shigh + sdown)) {
            tiny[i].style.top = tinyy[i] + "px";
            tinyx[i] += (i % 5 - 2) / 5;
            tiny[i].style.left = tinyx[i] + "px";
        } else {
            tiny[i].style.visibility = "hidden";
            tinyv[i] = 0;
        }
    } else {
        tiny[i].style.visibility = "hidden";
    }
}

document.onmousemove = function(e) {
    set_scroll();
    y = e.pageY || event.y + sdown;
    x = e.pageX || event.x + sleft;
};

function set_scroll() {
    sdown = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop || 0;
    sleft = self.pageXOffset || (document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft || 0;
}

window.onresize = set_width;

function set_width() {
    swide = self.innerWidth || (document.documentElement && document.documentElement.clientWidth) || document.body.clientWidth;
    shigh = self.innerHeight || (document.documentElement && document.documentElement.clientHeight) || document.body.clientHeight;
}

function createDiv(height, width) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = height + "px";
    div.style.width = width + "px";
    div.style.overflow = "hidden";
    div.style.backgroundColor = Math.random() > 0.5 ? colour : colour2; // Alterna entre los dos colores
    return div;
}
