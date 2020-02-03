import React from "react"

const divStyle = {
  color: 'black',
  background: 'red',
};

function MyInfo() {
  return (
    <div>
      <h1 style={divStyle}>
        EVA
      </h1>

      <p>
        This is how i became a web developer
      </p>

      <ul>
        <li>greece</li>
        <li>new zealand</li>
        <li>wales</li>
      </ul>
    </div>
  )
}

export default MyInfo
