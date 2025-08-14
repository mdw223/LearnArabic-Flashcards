import { useState } from 'react'
import dictionary from './assets/Dictionary';
import './Card.css'; // Assuming you have a CSS file for styling the card

const Card = ({dictionaryIndex}) => {
  const [front, flip] = useState(false);
    const toggleFlip = () => {
        flip(!front);
    };
    
  return (
    /* card is the class, then using `...` allows for embedded expressions
    the condition checks if front is true, then it adds the flip as one of the classes to the div*/
    // card-back is initially hidden (making it behind the initial card). 
    // when flip is applied, the css will flip the card to make the back show and the front not be the one appearing 

    <div className={`card ${front ? 'flip' : ''}`} onClick={toggleFlip}>
            <div className="card-inner">
                <div className="card-front">
                        <h2>{dictionary[dictionaryIndex].eng}</h2>
                    </div>
                <div className="card-back">
                    
                        <h2>{dictionary[dictionaryIndex].ar}</h2>
                        <img className="image-format" src={dictionary[dictionaryIndex].pic} />
                    </div>
            </div>
        </div>
  );
}

export default Card;

