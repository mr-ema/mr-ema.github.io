import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import { Home, About, Thanks } from 'Pages'
import { NoPage, Working } from 'Errors'
import { NavBar } from 'Components'

const App = () => {
  return (
        <Routes>
          <Route exact path='/' element={<NavBar />}>
            <Route index element={<Home/>}/>
            <Route exact  path='thanks' element={<Thanks />}/>
            <Route exact  path='games' element={<Working message={'I\'m working on a demo'} />}/>
            <Route exact  path='me' element={<About/>}/>
          </Route>

   
          <Route path='*' element={<NoPage />}/>
        </Routes>
  )
}

export default App