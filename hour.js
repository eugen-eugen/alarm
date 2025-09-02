// Hour wheel logic
var wheelHour = document.getElementById("wheel-hour");
var upHour = document.getElementById("up-hour");
var downHour = document.getElementById("down-hour");
var hours = Array.from({ length: 24 }, function (_, i) {
  return i;
});
var selectedHour = 0;
var playClickHour = false;

function renderWheelHour() {
  var html = "";
  for (var offset = -3; offset <= 3; offset++) {
    var hour = window.getWrappedValue(selectedHour, offset, 24);
    var cls = "hour";
    if (offset === 0) cls += " selected";
    else cls += " dist" + Math.abs(offset);
    html +=
      '<div class="' + cls + '">' + hour.toString().padStart(2, "0") + "</div>";
  }
  wheelHour.innerHTML = html;
  wheelHour.style.top = "0px";
  if (playClickHour) {
    window.playClickSound();
    playClickHour = false;
  }
}
function moveWheelHour(dir) {
  wheelHour.style.top = dir === "up" ? "-60px" : "60px";
  setTimeout(function () {
    selectedHour = window.getWrappedValue(
      selectedHour,
      dir === "up" ? 1 : -1,
      24
    );
    playClickHour = true;
    renderWheelHour();
  }, 150);
}
upHour.addEventListener("click", function () {
  moveWheelHour("up");
});
downHour.addEventListener("click", function () {
  moveWheelHour("down");
});

renderWheelHour();
