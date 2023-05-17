
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const birthDate ="8 september 2023";



function countdown() {
  const newbirthDate = new Date(birthDate);
  const currentDate = new Date();

  const allSeconds = (newbirthDate - currentDate) / 1000;

  const days = Math.floor(allSeconds / 3600 / 24);
  const hours = Math.floor(allSeconds / 3600) % 24;
  const minutes = Math.floor(allSeconds / 60) % 60;
  const seconds = Math.floor(allSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}



function show(){
  const now = new Date(2023, 8, 8);
  if (now  === birthDate)
  {
alert("Today is ur birthday");
  } 
    else{
    alert("Today is not ur birthday");
  }
}


countdown();
setInterval(countdown, 1000);

show();

// let birthday = "5 April 2023";
// countdowns = new Date(birthday).getTime(),
// x =setInterval(function (){
//   let now = new Date().getTime(),
//   distance = countdowns - now;
//   document.getElementById("days").innerText = Math.floor ((distance%days)),
//  //when date is reached 
//  if (distance < 0){
//   let headline = document.getElementById("hff"),
//   countdowns= document.getElementById ("cotbf");
//   let shown = document.getElementById("shown");
//   shown.innerText= "jffjfffk"
// clearInterval(x);
//  }
// },0);
// ();
