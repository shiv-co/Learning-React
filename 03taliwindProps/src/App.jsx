import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardOne } from './components/cards'

function App(props) {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <h1 className='bg-red-500
                  text-black 
                  p-4
                   '> Tailwind Css</h1>

    <CardOne  userName ="shivam" visit ="chai aur code"/>
    <CardOne userName ="Mansi" visit = "chai "/>               
          
    </>
  )
}

export default App
