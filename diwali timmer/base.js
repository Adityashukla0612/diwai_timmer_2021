const diwaliDate = "4 nov 2021"
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("sec");


let remTime = () => {
    const currDate = new Date()
    const diwaliDateNew = new Date(diwaliDate)
    const remtime = (diwaliDateNew - currDate)
    const totalSec = (remtime) / 1000;
    const daysLeft = Math.floor(totalSec / 60 / 60 / 24);
    const hoursLeft = Math.floor((totalSec / 3600) % 24);
    const minsLeft = Math.floor((totalSec / 60) % 60)
    const secLeft = Math.floor(totalSec % 60);
    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    mins.innerHTML = minsLeft;
    secs.innerHTML = secLeft;

    // console.log(daysLeft, hoursLeft, minsLeft, secLeft);
};
setInterval(remTime, 1000);