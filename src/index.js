// import React from "react"
// import ReactDOM from "react-dom"
//
// ReactDOM.render(<div><h1>Hello world</h1><p>this is a paragraph</p></div>,
 // document.getElementById("root"));
//
// function MyApp() {
//   return (
//     <ul>
//         <li>first</li>
//         <li>second</li>
//         <li>third</li>
//     </ul>
//     )
//   }
//
// ReactDOM.render(
//   <MyApp />,

// !!!! creating components and project file structure
//
// import React from "react"
// import ReactDOM from "react-dom"
//
// import MyInfo from "./myComponents/MyInfo.js"
//
// ReactDOM.render(
//   <MyInfo />,
//
//     document.getElementById("root")
//   )

          // !!!!!!creating components

// import React from "react"
// import ReactDOM from "react-dom"
//
// import App from "./myComponents/App.js"
//
// ReactDOM.render(<App />, document.getElementById("root"))

          // !!!! inline style = dynamic

// import React from "react"
// import ReactDOM from "react-dom"
//
// function App() {
//   const date = new Date(2020, 1, 25, 21)
//   const hours = date.getHours()
//   let timeOfDay
//   const styles = {
//     fontSize: 30
//   }
//
//   if (hours < 12) {
//     timeOfDay = "morning"
//     styles.color = "red"
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//     styles.color = "yellow"
//   } else {
//     timeOfDay = "night"
//     styles.color = "blue"
//   }
//
//
//
//   return (
//     <h1 style={styles}> Good {timeOfDay}!
//     </h1>
//
//   )
// }
//
// // import App from "./myComponents/App.js"
//
// ReactDOM.render(<App />, document.getElementById("root"))

      // !!!!! TO DO App
// import React from "react"
// import ReactDOM from "react-dom"

// import App from "./myComponents/App.js"

// ReactDOM.render(<App />, document.getElementById('root'))



// --------class components excercise----------

// import React   from "react"
// import ReactDOM from "react-dom"

// class App extends React.Component {
//       render() {
//             return (
//                   <div>
//                         <Header username="vschool"/>
//                         <Greeting />
//                   </div>
      
//             )
//       }
// }

// class Header extends React.Component {
//       render() {
//             return (
//                   <header>
//                         <p>Welcome, {this.props.username}!</p>
//                   </header>
//             )
//       }
// }

// class Greeting extends React.Component {
//       render() {
//       const date = new Date()
//       const hours = date.getHours()
//       let timeOfDay

//       if (hours < 12) {
//             timeOfDay = "morning"
//       } else if (hours >= 12 && hours < 17) {
//             timeOfDay = "afternoon"
//       } else {
//             timeOfDay = "night"
//       }
//       return (
//             <h1>
//             Good {timeOfDay} to you, sir or madam!</h1>
//             )
//       }
// }

// ReactDOM.render(<App />, document.getElementById('root'))



import React from "react"
import ReactDOM from "react-dom"

import App from "./myComponents/App.js"

ReactDOM.render (<App />, document.getElementById('root'))