import LinearProgress from '@mui/material/LinearProgress'

import React from 'react'
import './Result.css'

const Result = ({ score, currentQuestion }) => {
  const getWrongAns = (score, currentQuestion) => {
    return currentQuestion - score
  }

  const normalise = (value) => value * 25

  return (
    <div className="result">
      <div className="right-ans">
        <span>Correct Ans</span>
        <LinearProgress
          color="success"
          variant="determinate"
          value={normalise(score)}
        />
      </div>
      <div className="wrong-ans">
        <span>Wrong Ans</span>
        <LinearProgress
          variant="determinate"
          color="error"
          value={normalise(getWrongAns(score, currentQuestion))}
        />
      </div>
    </div>
  )
}

export default Result
