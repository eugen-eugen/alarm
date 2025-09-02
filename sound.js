function playClickSound() {
  var ctx = new (window.AudioContext || window.webkitAudioContext)();
  var buffer = ctx.createBuffer(1, ctx.sampleRate * 0.02, ctx.sampleRate); // 20ms
  var data = buffer.getChannelData(0);
  for (var i = 0; i < data.length; i++) {
    // White noise, fade out quickly
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  }
  var source = ctx.createBufferSource();
  source.buffer = buffer;
  var gain = ctx.createGain();
  gain.gain.value = 0.3;
  source.connect(gain);
  gain.connect(ctx.destination);
  source.start();
  source.onended = function () {
    ctx.close();
  };
}
// Make globally available
window.playClickSound = playClickSound;
