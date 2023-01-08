const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '24 June 2023';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)
    /1000;

    const days = Math.floor(totalSeconds /3600/24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60 ;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML =  `<b>${days}</b>`;
    hoursEl.innerHTML =  `<b>${formatTime(hours)}</b>`;
    minsEl.innerHTML =  `<b>${formatTime(mins)}</b>`;
    secondsEl.innerHTML =`<b>${formatTime(seconds)}</b>`;

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

// initial call

 countdown();
 
 setInterval(countdown,1000);