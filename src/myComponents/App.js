// import React from "react"
// import Header from "./Header.js"
// import Checkbox from "./Checkbox.js"
// import Textarea from "./Textarea.js"
//
// function App() {
//   return(
//     <div>
//
//       <Checkbox />
//       <Textarea />
//       <Checkbox />
//       <Textarea />
//       <Checkbox />
//       <Textarea />
//
//     </div>
//   )
// }
//
// export default App

import React from "react"
import ToDoItem from "./ToDoItem.js"
function App() {
  return (
    <div className="todo-list">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
    </div>
  )
}

export default App
