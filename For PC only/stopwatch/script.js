var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var sta = false;


function start() {
    sta = true;
    if (document.getElementById("start").innerHTML == "Start") { //play the watch
        document.getElementById("start").innerHTML = "Pause";
        stopwatch();
    } else {
        document.getElementById("start").innerHTML = "Start"; // stop the watch
        sta = false;
    }


}

function reset() { // reset watch
    sta = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "0" + hr;
    document.getElementById("min").innerHTML = "0" + min;
    document.getElementById("sec").innerHTML = "0" + sec;
    document.getElementById("count").innerHTML = "0" + count;
    if (document.getElementById("start").innerHTML == "Pause") {
        document.getElementById("start").innerHTML = "Start";
    }

}



function stopwatch() {
    if (sta == true) {
        count += 1;
        setTimeout("stopwatch()", 10);
    }
    if (count == 100) {
        sec += 1
        count = 0
    }
    if (sec == 60) {
        min += 1
        sec = 0
        count = 0
    }
    if (min == 60) {
        hr += 1
        min = 0
        sec = 0
        count = 0
    }
    if (hr >= 10) {
        document.getElementById("hr").innerHTML = hr;
    } else {
        document.getElementById("hr").innerHTML = "0" + hr;
    }
    if (min >= 10) {
        document.getElementById("min").innerHTML = min;
    } else {
        document.getElementById("min").innerHTML = "0" + min;
    }
    if (sec >= 10) {
        document.getElementById("sec").innerHTML = sec;
    } else {
        document.getElementById("sec").innerHTML = "0" + sec;
    }
    if (count >= 10) {
        document.getElementById("count").innerHTML = count;
    } else {
        document.getElementById("count").innerHTML = "0" + count;
    }
}