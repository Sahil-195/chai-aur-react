import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  
  let myobj = {
    age: 25,
    username: 'John Doe',
  }

  let myArr = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind text</h1>
      <Cards username='chaiaurcode' btnText='Click me' />
      <Cards username='hitesh choudhary' />
    </>
  )
}

export default App
