import { useState } from 'react'
import './App.css'
import Card from './Card'
import dictionary from './assets/Dictionary.js';

function App() {
  const [reviewedCount, setReviewedCount] = useState(0);
  const totalCount = dictionary.length; //const [totalCount, setTotalCount] = useState(dictionary.length);
  const [isVisible, setVisibility] = useState(true);
  
  const incrementReviewedCount = () => {
        setReviewedCount((reviewedCount + 1) % totalCount);
    };

  const toggleHide = () => {
        setVisibility(!isVisible);
  };

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
        
        
        <h3>Reviewed {reviewedCount} cards of {totalCount}</h3>

        <div className="card-container" >
          <Card dictionaryIndex={reviewedCount}/>
        </div>
        <button className="next-button" onClick={incrementReviewedCount}>
            Next
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