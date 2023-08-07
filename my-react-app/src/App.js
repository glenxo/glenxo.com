import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Music <code>from the</code> gods.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/@glencho1809"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
        <a
          className="App-link"
          href="https://open.spotify.com/artist/7C56DuVbRo9wBxT54pBl3o/discography"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
        <a
          className="App-link"
          href="https://soundcloud.com/glen-cho-406954344"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soundcloud
        </a>
      </header>
    </div>
  );
}

export default App;
