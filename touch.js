// Touch gestures for hour wheel
var touchStartYHour = null;
wheelHour.parentElement.addEventListener("touchstart", function (e) {
  if (e.touches.length === 1) {
    touchStartYHour = e.touches[0].clientY;
  }
});
wheelHour.parentElement.addEventListener("touchmove", function (e) {
  if (touchStartYHour === null) return;
  var currentY = e.touches[0].clientY;
  var deltaY = currentY - touchStartYHour;
  if (Math.abs(deltaY) > 10) e.preventDefault();
});
wheelHour.parentElement.addEventListener("touchend", function (e) {
  if (touchStartYHour === null) return;
  var endY = (e.changedTouches[0] || e.touches[0]).clientY;
  var deltaY = endY - touchStartYHour;
  if (Math.abs(deltaY) > 30) {
    if (deltaY < 0) {
      moveWheelHour("up");
    } else {
      moveWheelHour("down");
    }
  }
  touchStartYHour = null;
});

// Touch gestures for minute wheel
var touchStartYMinute = null;
wheelMinute.parentElement.addEventListener("touchstart", function (e) {
  if (e.touches.length === 1) {
    touchStartYMinute = e.touches[0].clientY;
  }
});
wheelMinute.parentElement.addEventListener("touchmove", function (e) {
  if (touchStartYMinute === null) return;
  var currentY = e.touches[0].clientY;
  var deltaY = currentY - touchStartYMinute;
  if (Math.abs(deltaY) > 10) e.preventDefault();
});
wheelMinute.parentElement.addEventListener("touchend", function (e) {
  if (touchStartYMinute === null) return;
  var endY = (e.changedTouches[0] || e.touches[0]).clientY;
  var deltaY = endY - touchStartYMinute;
  if (Math.abs(deltaY) > 30) {
    if (deltaY < 0) {
      moveWheelMinute("up");
    } else {
      moveWheelMinute("down");
    }
  }
  touchStartYMinute = null;
});
