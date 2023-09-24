let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let monthDisplay = document.getElementById('month');
let dayDisplay = document.getElementById('day');
let yearDisplay = document.getElementById('year');


function displayTime(){
    let date = new Date();

    // Getting hour, min, sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let month = date.toLocaleString('default', { month: 'long' });
    let day = date.getDate();
    let year = date.getFullYear();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

     // Update date display
    monthDisplay.textContent = month;
    dayDisplay.textContent = day;
    yearDisplay.textContent = year;
}

setInterval(displayTime, 1000);
