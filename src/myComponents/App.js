
// --------checkbox & textarea excercise----------


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

// ----------------contact card components--------------
//
// import React from "react"
// import ContactCard from "./ContactCard.js"
//
// function App() {
//   return (
//     <div className="contacts">
//
//     <ContactCard
//         name="Mr. Whiskerson"
//         imgUrl="http://placekitten.com/300/200/"
//         phone="(212) 555-1234"
//         email="mr.whoiskerson@catnap.meow"
//     />
//     <ContactCard
//         name="Fluffykins"
//         imgUrl="http://placekitten.com/400/200/"
//         phone="(212) 555-5432"
//         email="fluffykins@catnap.meow"
//     />
//     <ContactCard
//         name="Destroyer"
//         imgUrl="http://placekitten.com/300/300/"
//         phone="(212) 555-5534"
//         email="destroyer@catnap.meow"
//     />
//     <ContactCard
//         name="Felix"
//         imgUrl="http://placekitten.com/200/100/"
//         phone="(212) 555-1266"
//         email="felix@catnap.meow"
//     />
//     </div>
//   )
// }
//
// export default App
//
// -----------------Joke & Punchline excercise------------------

import React from "react"
import Joke from "./Joke.js"

function App() {
  return (
    <div>
      <Joke
          question="What did the Buddhist ask the hot dog vendor?"
          punchline="“Make me one with everything.”"
      />
      <Joke
          question="You know why you never see elephants hiding up in trees?"
          punchline="Because they’re really good at it. "
      />
      <Joke
          question="You know why you never see elephants hiding up in trees?"
          punchline="Because they’re really good at it. "
      />
      <Joke
          punchline="Because they’re really good at it. "
      />
      <Joke
          question="You know why you never see elephants hiding up in trees?"
          punchline="Because they’re really good at it. "
      />
    </div>
  )
}

export default App
