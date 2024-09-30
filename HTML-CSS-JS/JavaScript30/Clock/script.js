const secondHand = document.querySelector('.second-hand');

function everySecond() {
  const date = new Date();
  const seconds = date.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

}

setInterval(everySecond, 1000);