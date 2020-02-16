
// import React from "react"
// import ToDoItem from "./ToDoItem"
// import todosData from "./todosData"

// function App() {
//   const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item} />)

//   return (
//     <div className="todo-list">
//       {todoItems}

//     </div>
//   )
// }

// export default App


// import React from "react"



// class App extends React.Component {
//   render() {
//     const date = new Date();
//     return (
//     <div>
//       <h1>Code goes here</h1>
//     </div>
//     )
//   }
// }


// export default App




// import React from "react"

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       answer: "yes"
//     }
//   }
//   render() {

//     return (
//       <div>
//         <h1>is state important to know? {this.state.answer}</h1>
//         <ChildComponent answer={this.state.answer}/>
//       </div>
//     )
//   }
// }

// export default App


import React, {Component} from "react"

class App extends Component {
  constructor() {
  super() 
    this.state = {
      name: "eva",
      age: 25
    }
  }
    render() {
  return (
    <div>
      <h1>{this.state.name}</h1>
      <h3>{this.state.age} years old</h3>
    </div>
  )
    }

}

export default App



