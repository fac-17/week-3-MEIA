
const intro = document.querySelector('.intro');
const introTitle = document.querySelector('.intro-title');
const introTime = document.querySelector('.intro-time');
const introDate = document.querySelector('.intro-date');
const introText = document.querySelector('.intro-text');

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
// const day = date.getDay();
// const month = date.getMonth();
const dateString = date.toLocaleDateString();
// const dateString2 =date.toDateString();
const timeString = date.toTimeString().substr(0,5)
const timeOfDay =  getTimeOfDay(hours);

introTitle.textContent = `Good ${timeOfDay}! `;
introDate.textContent = `Today is ${dateString}`;
introTime.textContent = `It's ${timeString}`;


console.log(dateString,timeString,dateString2,timeOfDay,intro,introTitle,introTime,introDate,introText);