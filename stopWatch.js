//introduction(start)//
let [millisecond, second, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;
document.getElementById("start-btn").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(display, 10);
});
//introduction(end)//
// this code for timer display(start)//
function display() {
  millisecond += 10;
  second = millisecond == 1000 ? (second + 1) % 60 : second;
  minutes = second == 0 && second == 0 && millisecond == 0 ? hours + 1 : hours;
  millisecond = millisecond == 1000 ? 0 : millisecond;
  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(second).padStart(2, "0");
  let ms = String(millisecond).padStart(3, 0);
  timeRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}
// this code for timer display(end)//
// this code for pause btn(start)//
document.getElementById("pause-btn").addEventListener("click", () => {
  clearInterval(int);
});
// this code for pause btn(end)//
// this code for reset btn(start)//
document.getElementById("reset-btn").addEventListener("click", () => {
  clearInterval(int);
  let [millisecond, second, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = "00:00:00:000";
});
// this code for reset btn(end)//
