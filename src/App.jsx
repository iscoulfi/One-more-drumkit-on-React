import './App.css';
import Drum from './components/Drum';

function App() {
  const sounds = [
    { name: 'clap', sound: require('./sounds/clap.wav'), key: 'a' },
    { name: 'hihat', sound: require('./sounds/hihat.wav'), key: 's' },
    { name: 'kick', sound: require('./sounds/kick.wav'), key: 'd' },
    { name: 'openhat', sound: require('./sounds/openhat.wav'), key: 'f' },
    { name: 'boom', sound: require('./sounds/boom.wav'), key: 'g' },
    { name: 'ride', sound: require('./sounds/ride.wav'), key: 'h' },
    { name: 'snare', sound: require('./sounds/snare.wav'), key: 'j' },
    { name: 'tom', sound: require('./sounds/tom.wav'), key: 'k' },
    { name: 'tink', sound: require('./sounds/tink.wav'), key: 'l' },
  ];

  return (
    <div className="App">
      <div className="keys">
        {sounds.map((sound) => (
          <Drum
            key={sound.name}
            name={sound.name}
            letter={sound.key}
            sound={sound.sound}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
