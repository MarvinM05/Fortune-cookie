// import bgImg from './assets/fortuna-1/fondo1.jpg'
import Title from './Title'


const Phrases = ({phraseData}) => {

  return (
    <div className="phrases">
      <p>{phraseData.phrase}</p>
      <blockquote>{phraseData.author}</blockquote>
    </div>
  );

}

export default Phrases;