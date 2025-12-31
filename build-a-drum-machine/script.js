const drumpads = document.querySelectorAll('.drum-pad')
const display = document.getElementById('display');

let fileNames = [
  'Heater-1.mp3',
  'Heater-2.mp3',
  'Heater-3.mp3',
  'Heater-4_1.mp3',
  'Heater-6.mp3',
  'Dsc_Oh.mp3',
  'Kick_n_Hat.mp3',
  'RP4_KICK_1.mp3',
  'Cev_H2.mp3'
]

let soundNames = [
  'Heater 1',
  'Heater 2',
  'Heater 3',
  'Heater 4',
  'Clap',
  'Open-HH',
  "Kick-n'-Hat",
  'Kick',
  'Closed-HH'
]


drumpads.forEach((pad, index) => {
  const audio = new Audio();
  audio.src = `https://cdn.freecodecamp.org/curriculum/drum/${fileNames[index]}`;
  audio.classList.add('clip');
  audio.id = pad.innerText;
  pad.appendChild(audio);
  pad.addEventListener('click', ()=> {
    audio.currentTime = 0;
    audio.play();
    display.innerText = pad.id;
  })
})

document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    display.innerText = audio.parentElement.id;
  }
});
