import startUrl from "../assets/sounds/start.wav";
import hitUrl from "../assets/sounds/hit.wav";
import missUrl from "../assets/sounds/miss.wav";
import winUrl from "../assets/sounds/win.wav";
import lostUrl from "../assets/sounds/lost.wav";

const sounds = {
  start: new Audio(startUrl),
  hit: new Audio(hitUrl),
  miss: new Audio(missUrl),
  win: new Audio(winUrl),
  lost: new Audio(lostUrl),
};

export function playSound(name) {
  const audio = sounds[name];
  if (!audio) return;
  audio.currentTime = 0; // restart if it's already playing
  audio.play().catch(() => {}); // ignore autoplay/interrupt rejections
}
