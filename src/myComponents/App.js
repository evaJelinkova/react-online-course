
import React from "react"
import ToDoItem from "./ToDoItem"
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
  
}

export default App

// ------------date change--------------
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


// -------------------class based componets and state-----------

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

// -----------class components------------

// import React, {Component} from "react"

// class App extends Component {
//   constructor() {
//   super() 
//     this.state = {
//       name: "eva",
//       age: 25
//     }
//   }
//     render() {
//   return (
//     <div>
//       <h1>{this.state.name}</h1>
//       <h3>{this.state.age} years old</h3>
//     </div>
//     )
//   }
// }
// export default App


// ----------class component, boolean-------


// import React, {Component} from "react"

// class App extends Component {
//   constructor() {
//     super() 
//     this.state = {
//       isLoggedIn: false
//     }
//   }
//     render() {
//       let wordDisplay
//       if (this.state.isLoggedIn) {
//         wordDisplay = "in"
//       } else {
//         wordDisplay = "out"
//       }
//       return(
//         <div>
//           <h1>you are currently logged {wordDisplay}</h1>
//         </div>
//       ) 

      
//     }
//   }


// export default App


// --------------events------------

// import React from "react"

// function handleClick() {
//   console.log("I was clicked")
// }


// function App() {
//   return (
//     <div> 
//       <img onMouseOver={() => console.log("Hovered!")}
//       src="https://www.fillmurray.com/200/200" />
//       <br />
//       <br />
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   )
// }
// export default App


// -------------componentst change in state---------------

// import React from "react"

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1 * 3
//       }

//     })
//   }

//   render() {
//     return (
//       <div className="counting">
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//         {/* <ChildComponent count={this.state.count}/> -----------will react to change in state and render every time--- */}
//       </div>
//     )

//   }
// }
// export default App



// --------------------Lifecycle methods-------------

// import React, {Component} from "react"
// import { unstable_batchedUpdates } from "react-dom"


// class App extends Component {
//   constructor() {
//   super()
//   this.state = {}
// }

// componentDidMount() {

// }

// componentWillReceiveProps() {

// }

// shouldComponentUpdate(nextProps, nextState) {
//   return true if we want to update
//   return false if not
// }

// static getDerivedStateProps(props, state) {

// }

// getSnapshotBeforeUpdate() {

// }

// componentWillUnmount() {

// }

// render() {
//   return (
//     <div>
//       Code goes here
//     </div>
//     ) 
//   }
// }

// export default App


// ------------------------Conditionaal rendering------------------

// import React, {Component} from "react"
// import Conditional from "./Conditional"
// // import { render } from "@testing-library/react"

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentsDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false

//       })
//     }, 150)
//   }


// render() {
//   return (
//     <div>
//       <Conditional isLoading={this.state.isLoading}/>
//     </div>
//     )
//   }
// }

// export default App


// ----------logged in / out button excercise--------------

// import React from "react"

// class  App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

// handleClick() {
//   this.setState(prevState => {
//     return {
//        isLoggedIn: !prevState.isLoggedIn
//     }
//   })
// }

//   render() {
//     let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//     let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
//     return (
//       <div>
//         <button onClick={this.handleClick}>
//           {buttonText}
//         </button>
//     <h1>{displayText}</h1>
//       </div>
//     )
//   }
  
// }

// export default App
