const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const start = document.getElementById("start");
const reset = document.getElementById("reset");

const display = document.getElementById("display");

let interval = null;
let total = 0;

totalValue = () => {
  total =
    Number(hour.value) * 3600 +
    Number(minute.value) * 60 +
    Number(second.value);
};
Timer = () => {
  totalValue();
  total--;

  if (total >= 0) {
    let hr = Math.floor(total / 3600);
    let min = Math.floor(total / 60 - hr * 60);
    let sc = total - ((hr * 3600) + (min * 60));
    hour.value=hr;
    minute.value=min;
    second.value=sc;
  } 
  
  else {
    display.innerText = "Time's Up !!";
  }
};
start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(Timer, 1000);

  display.innerText = "Timer Started";
});

reset.addEventListener("click", () => {
    clearInterval(interval);

    hour.value=0;
    minute.value=0;
    second.value=0;

    display.innerText="Timer"
});
