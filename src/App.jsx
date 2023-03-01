import './App.css'
import Phrases from './components/Phrases';
import phrases from "./data/phrases.json";
import Title from './components/Title';
import { useState } from 'react';

function App() {

  const img = [
    "url(/fondo1.jpg)",
    "url(/fondo2.jpg)",
    "url(/fondo3.jpg)",
    "url(/fondo4.jpg)",
  ];

  const [phrase, setPhrase] = useState(0)
  const [bgImg, setBgImg] = useState(0)

  const changePhrase = () => {
    if (phrase === phrases.length - 1 && bgImg === img.length) {
      setPhrase(0);
      setBgImg(0)
    } else {
      setPhrase(Math.floor(Math.random() * phrases.length));
      setBgImg(Math.floor(Math.random() * img.length));
    }
  }

  return (
    <div className="App" style={{ backgroundImage: img[bgImg] }}>
      <Title />
      <Phrases phraseData={phrases[phrase]} />
      <button onClick={changePhrase}>Otra frase</button>
    </div>
  );
}

export default App
