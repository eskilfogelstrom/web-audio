const run = async () => {
  const audioCtx = new AudioContext();

  const audio = document.getElementById('audio');
  const source = audioCtx.createMediaElementSource(audio);

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';

  source.connect(filter);
  filter.connect(audioCtx.destination);

  window.onmousemove = e => {
    const frequency = (e.clientX / window.innerWidth) * 10000;
    filter.frequency.setValueAtTime(frequency, audioCtx.currentTime);
  };

  window.onclick = () => {
    audioCtx.resume();
    audio.play();
  };
};

run();
