var wheelMinute = document.getElementById("wheel-minute");
var upMinute = document.getElementById("up-minute");
var downMinute = document.getElementById("down-minute");

var selectedMinute = 0;
var playClickMinute = false;

function renderWheelMinute() {
  var html = "";
  for (var offset = -3; offset <= 3; offset++) {
    var minute = window.getWrappedValue(selectedMinute, offset, 60);
    var cls = "hour"; // reuse hour class for styling
    if (offset === 0) cls += " selected";
    else cls += " dist" + Math.abs(offset);
    html +=
      '<div class="' +
      cls +
      '">' +
      minute.toString().padStart(2, "0") +
      "</div>";
  }
  wheelMinute.innerHTML = html;
  wheelMinute.style.top = "0px";
  if (playClickMinute) {
    window.playClickSound();
    playClickMinute = false;
  }
}
function moveWheelMinute(dir) {
  wheelMinute.style.top = dir === "up" ? "-60px" : "60px";
  setTimeout(function () {
    selectedMinute = window.getWrappedValue(
      selectedMinute,
      dir === "up" ? 1 : -1,
      60
    );
    playClickMinute = true;
    renderWheelMinute();
  }, 150);
}
upMinute.addEventListener("click", function () {
  moveWheelMinute("up");
});
downMinute.addEventListener("click", function () {
  moveWheelMinute("down");
});

renderWheelMinute();
