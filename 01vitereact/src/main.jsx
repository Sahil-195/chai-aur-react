import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

function MyApp() {
  return (
    <div>MyApp | chai aur code</div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: '_blank'
//   },
//   children: "Click me to visit google"
// }

const anotherElement = (
  <a href="https://google.com">Visit Code</a>
  // <a href="https://google.com">Visit Code</a>
)

const anotherUser = "chai aur react"
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <App /> 
  ReactElement
  // </React.StrictMode>,
)
