console.log('hit the alarm');


var time = document.getElementById('time');

let currentTime = setInterval(() => {
    // var dn = document.getElementById('dn');
    var date = new Date();
    let hours = date.getHours();
    console.log(hours);
    let min = date.getMinutes();
    let sec = date.getSeconds();
    var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
    if (hours > 12) {
        hours = hours - 12;
    } else if (hours == 00) {
        hours = 12
    } else {
        hours = hours;
    }

    time.textContent = addZero(hours) + ':' + addZero(min) + ':' + addZero(sec) + ' ' + ampm;

    //get recent date...
    let dt = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    document.getElementById('date').innerHTML = dt;

}, 1000)

function addZero(time) {

    return (time < 10) ? "0" + time : time;

}

function SetHours() {
    let select = document.getElementById('alarmhrs');
    let hrs = 12;

    for (i = 1; i <= hrs; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

SetHours();


function setMin() {
    let select = document.getElementById('alarmmins');
    let min = 59;

    for (i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

setMin();

function setSec() {
    let select = document.getElementById('alarmsecs');
    let sec = 59;

    for (i = 0; i <= sec; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

setSec();

let set = document.getElementById('set');

let off = document.getElementById('off');


set.addEventListener('click', setAlarm);


function setAlarm() {
    console.log('clicked');
    var hr = document.getElementById('alarmhrs');

    var min = document.getElementById('alarmmins');

    var sec = document.getElementById('alarmsecs');

    var ap = document.getElementById('ampm');


    const selHours = hr.options[hr.selectedIndex].value;

    const selMin = min.options[min.selectedIndex].value;

    const selSec = sec.options[sec.selectedIndex].value;

    const selectAp = ap.options[ap.selectedIndex].value;

    var alarmTime = addZero(selHours) + ":" + addZero(selMin) + ":" + addZero(selSec) + ' ' + selectAp;

    console.log('alarm: ' + alarmTime);


    hr.disabled = true;
    min.disabled = true;
    sec.disabled = true;
    ap.disabled = true;

    var time = document.getElementById('time');

    setInterval(() => {
        var date = new Date();
        let hours = date.getHours();
        console.log(hours);
        let min = date.getMinutes();
        let sec = date.getSeconds();
        var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
        if (hours > 12) {
            hours = hours - 12;
        } else if (hours == 00) {
            hours = 12
        } else {
            hours = hours;
        }

        let currentTime = time.textContent = addZero(hours) + ':' + addZero(min) + ':' + addZero(sec) + ' ' + ampm;
        console.log(currentTime);

        if (currentTime == alarmTime) {
            var audio = document.getElementById('audio');
            audio.loop = true;

            audio.play();
        }

    }, 1000)
}


off.addEventListener('click', removeAlarm);

function removeAlarm() {
    var hr = document.getElementById('alarmhrs');
    var min = document.getElementById('alarmmins');
    var sec = document.getElementById('alarmsecs');

    var ap = document.getElementById('ampm');
    hr.disabled = false;
    min.disabled = false;
    sec.disabled = false;
    ap.disabled = false;

    audio.pause();

    location.reload();
}