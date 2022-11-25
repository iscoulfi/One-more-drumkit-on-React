import { useState } from 'react';

const Drum = ({ name, letter, sound }) => {
  const [playing, setPlaying] = useState(false);

  document.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.key === letter) {
      playSound();
    }
  });

  const playSound = () => {
    setPlaying(true);

    new Audio(sound).play();

    setTimeout(() => {
      setPlaying(false);
    }, 100);
  };

  return (
    <div className={`key ${playing ? 'playing' : ''}`} onClick={playSound}>
      <h1>{letter}</h1>
      <span className="sound">{name}</span>
    </div>
  );
};

export default Drum;
