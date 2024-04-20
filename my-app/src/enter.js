import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
function OptionInput({ value, onChange }) {
  return <textarea value={value} onChange={onChange} />;
}

export default function Enter() {
  const initialQuestionData = {
    question: '',
    options: ['', '', '', ''],
    answer: '', // Initialize the answer field
  };

  const [questionData, setQuestionData] = useState(initialQuestionData);

  const handleInputChange = (inputType, value) => {
    setQuestionData((prevData) => ({
      ...prevData,
      [inputType]: value,
    }));
  };

  const handleOptionChange = (index, value) => {
    setQuestionData((prevData) => ({
      ...prevData,
      options: prevData.options.map((option, i) => (i === index ? value : option)),
    }));
  };

  const handleAnswerChange = (e) => {
    const answer = e.target.value;
    setQuestionData((prevData) => ({
      ...prevData,
      answer: answer,
    }));
  };

  const handleSubmit = async () => {

    // Validate form data before submitting
    if (questionData.question && questionData.options.filter(opt => opt !== '').length >= 2 && questionData.answer !== '') {
      try {
        const response = await axios.post("http://localhost:8000/enter", questionData);
        console.log(response.data);// Reset the form after successful submission
        alert("Question added"); // Show the alert after successful submission
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    } else {
      console.log("Please provide a question, at least two options, and select an answer.");
    }
    setQuestionData(initialQuestionData); 
    alert("Question added");
  };
  

  return (
    <>
    <h1>Enter the question</h1>
    <div className="enter-container">
      <h2>Enter New Question</h2>
      <form className="enter-form">
        <textarea
          className="question-input"
          value={questionData.question}
          onChange={(e) => handleInputChange('question', e.target.value)}
          placeholder="Enter the question..."
        />
        {questionData.options.map((option, index) => (
          <OptionInput
            key={index}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
          />
        ))}
        <label className="answer-label">Correct Answer Index:</label>
        <input
          className="answer-input"
          type="number"
          value={questionData.answer}
          onChange={handleAnswerChange}
          min="1"
          max={questionData.options.length.toString()}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Enter
        </button>
      </form>
    </div>
    </>
  );
}
