import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Showresult from './Showresult';
import axios from 'axios';
const Quiz = () => {
  useEffect(() => {
    async function fetchData(){
      await axios.get("http://localhost:8000/getdata").then((response)=>{
        setquizitem(response.data)
       })
    }
    fetchData();
  },[])
  const [state, setState] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(null); // Initialize clicked state
   const[quizitem,setquizitem]=useState([])
  const next = () => {
    setState(state + 1);
    setClicked(null); // Reset clicked state when moving to the next question
  };

  const previous = () => {
    if(state>=1){
      setState(state - 1);
      setClicked(null); // Reset clicked state when moving to the previous question
    }
  };

  const handlescore = (index) => {
    setScore(prevScore => {
      if (index == quizitem[state].answer) {
        return prevScore + 1;
      }
      return prevScore;
    });
    setClicked(index); // Set clicked option index
  };
  return (
    <>
     <h1>QUIZ APP</h1>
    <div className='main'>
      {state < quizitem.length ? (
        <>
          <div className='question'>{state+1}.{quizitem[state].question}</div>
          <div className='option'>
            {quizitem[state].options.map((option, index) => (
              <button
                className={`option-item ${index + 1 === clicked ? 'checked' : ''}`}
                key={index}
                onClick={() => handlescore(index +1)}
              >
                {option}
              </button>
            ))}
          </div>
          <div>
            <button className='next' onClick={previous}>
              Previous
            </button>
            <button className='next' onClick={next}>
              Next
            </button>
          </div>
        </>
      ) : (
        <Showresult answer={score} total={quizitem.length}/> 
      )}
    </div>
    </>
  );
};

export default Quiz;
