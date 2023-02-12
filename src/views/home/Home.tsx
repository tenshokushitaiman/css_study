import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import '@views/home/Home.css'
import App from '@views/app/App'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <header>
        <nav>
          <ul className='nav__items'>
          <li className='nav__item'><a href="/">home</a></li>
            <li className='nav__item'><a href="/app">app</a></li>
          </ul>
        </nav>
      </header>
      <div className='container'>
        <button>
          hello
        </button>
      </div>
      <Routes>
        <Route path='/app' element={<App />}></Route>
      </Routes>
    </div>
  )
}

export default Home
