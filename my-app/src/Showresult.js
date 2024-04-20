import React from 'react'
import './App.css'
const Showresult = (props) => {
  return (
    <>
    <p className='pa'>Score:{props.answer}</p>
    <p className='pa'>Total:{props.total}</p>
    </>
  )
}

export default Showresult
