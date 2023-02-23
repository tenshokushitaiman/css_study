import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import styles from './Home.module.css'
import App from '@views/app/App'
import { TagSelector, IdSelector, CombinationSelector } from '@views/cssSelector/tagSelector/TagSelector'
import { BoxBlock, OtherBlock } from '@views/box/block/block'




function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="Home">
      <header>
        <button onClick={handleToggle}>リンク</button>
        <dialog open={isOpen} onClose={handleClose}>
        <article className={styles.dialog}>
          <section >
            <h1>home</h1>
            <nav>
              <ul className={styles.nav__items}>
                <li className={styles.nav__item}><a href="/">home</a></li>
                <li className={styles.nav__item}><a href="/app">app</a></li>
              </ul>
            </nav>
          </section>
          <section>
            <h1>chapter2</h1>
            <nav>
              <ul className={styles.nav__items}>
                <li className={styles.nav__item}><a href="/chapter2/tagSelector">tagSelector</a></li>
                <li className={styles.nav__item}><a href="/chapter2/idSelector">idSelector</a></li>
                <li className={styles.nav__item}><a href="/chapter2/combinationSelector">combinationSelector</a></li>
              </ul>
            </nav>
          </section>
          <section>
            <h1>chapter3</h1>
            <nav>
              <ul>
                <li><a href="/chapter3/Block">block, inline, inline-blockの違い</a></li>
                <li><a href="/chapter3/otherBlock">その他のdisplayの設定値</a></li>
              </ul>
            </nav>
          </section>
        </article>
        </dialog>

      </header>
      <Routes>
        <Route path='/app' element={<App />}></Route>
        <Route path='/chapter2/tagSelector' element={<TagSelector />}></Route>
        <Route path='/chapter2/idSelector' element={<IdSelector />}></Route>
        <Route path='/chapter2/combinationSelector' element={<CombinationSelector />}></Route>

        <Route path='/chapter3/block' element={<BoxBlock/>}></Route>
        <Route path='/chapter3/otherBlock' element={<OtherBlock/>}></Route>
      </Routes>
    </div>
  )
}

export default Home
