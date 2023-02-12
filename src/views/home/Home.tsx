import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import '@views/home/Home.css'
import App from '@views/app/App'
import {TagSelector, IdSelector, CombinationSelector} from '@views/cssSelector/tagSelector/TagSelector'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <header>
        <nav>
          <ul className='nav__items'>
          <li className='nav__item'><a href="/">home</a></li>
          <li className='nav__item'><a href="/app">app</a></li>
          <li className='nav__item'><a href="/chapter2/tagSelector">chapter2_tagSelector</a></li>
          <li className='nav__item'><a href="/chapter2/idSelector">chapter2_idSelector</a></li>
          <li className='nav__item'><a href="/chapter2/combinationSelector">chapter2_combinationSelector</a></li>

          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/app' element={<App />}></Route>
        <Route path='/chapter2/tagSelector' element={<TagSelector/>}></Route>
        <Route path='/chapter2/idSelector' element={<IdSelector/>}></Route>
        <Route path='/chapter2/combinationSelector' element={<CombinationSelector/>}></Route>
      </Routes>
    </div>
  )
}

export default Home
