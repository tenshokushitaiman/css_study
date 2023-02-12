import { useState } from 'react'
import reactLogo from '@assets/react.svg'
import { Routes, Route } from "react-router-dom"
import './Home.css'
import App from '@views/app/App'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <header>
        <nav>
          <ul className='nav__items'>
            <li className='nav__item'><a href="/home">home</a></li>
            <li className='nav__item'><a href="/app">app</a></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/app' element={<App />}></Route>
      </Routes>
    </div>
  )
}

export default Home
