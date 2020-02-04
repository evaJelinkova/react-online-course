import React from "react"

function Joke(props) {
  return(
    <div>
      <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
      <p style={{color: !props.question && "red" }}>Answer: {props.punchline}</p>
      <hr/>
    </div>
  )
}

export default Joke
