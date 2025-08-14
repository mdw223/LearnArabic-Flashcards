import { useState } from 'react'
import './App.css'
import Card from './Card'
import dictionary from './assets/Dictionary.js';

function App() {
  const totalCount = dictionary.length; 
  const [isVisible, setVisibility] = useState(true);


  const toggleHide = () => {
    setVisibility(!isVisible);
  };

  
  const [unreviewedCardIndexes, setUnreviewedCardIndexes] = useState(Array.from({ length: totalCount }, (_, index) => index));
  

  const getRandomCardIndex = () => {
    if (unreviewedCardIndexes.length === 0) {
      const newIndexes = Array.from({ length: totalCount }, (_, index) => index);
      setUnreviewedCardIndexes(newIndexes);
      return Math.floor(Math.random() * (totalCount));
    } 

    let randomIndex = Math.floor(Math.random() * (unreviewedCardIndexes.length));
    let selectedCardIndex = unreviewedCardIndexes[randomIndex];

    // Remove the selected index from the unreviewed list
    const newUnreviewedCardIndexes = [...unreviewedCardIndexes];
    newUnreviewedCardIndexes.splice(randomIndex, 1);
    setUnreviewedCardIndexes(newUnreviewedCardIndexes); // Update the state

    return selectedCardIndex;
  };
  const [cardIndex, setCardIndex] = useState(0);
  const getRandomIndex = () => {
    setCardIndex(getRandomCardIndex()); // Update the card index
  };
  
  let reviewed = totalCount - unreviewedCardIndexes.length;
  
  return (
    <>
      <div className="App">
        <div className="title-container close">
          
          {isVisible && (
            <> 
              <h1 className="title">Welcome to LearnArabic!</h1>
              <h2>Understand Arabic with our fun and interactive method, just 5 mins a day.</h2>
            </>
          )}
          
          <button className='hideButton smooth-button' onClick={toggleHide}>{isVisible == true ?  "Hide Info" : "Show Info"}</button>
        </div>
        
        
        <h3>Reviewed {reviewed} cards of {totalCount}</h3>

        <div className="card-container" >
          <Card dictionaryIndex={cardIndex}/>
        </div>
        <button className="next-button" onClick={getRandomIndex}>
            {reviewed == totalCount ? "Again" : "Next"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="arrow-icon"
                viewBox="0 0 16 16"
            >
                <path fillRule="evenodd" d="M11.3 8l-4.3-4.3a.5.5 0 0 0-.7.7L9.6 8l-3.6 3.6a.5.5 0 0 0 .7.7l4.3-4.3a.5.5 0 0 0 0-.7z" />
            </svg>
        </button>
    </div>
    </>
  )
}

export default App
/* <>... </> are  react fragments allow us to return multiple elements without adding extra nodes to the DOM */