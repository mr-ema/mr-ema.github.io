import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/Context/Theme';
import { About, Home, Projects, Thanks } from '@/Pages';
import { NavBar } from '@Components'; 
import { NoPage, Working } from '@/Errors/index';
import '@/style.css';


const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home/>}/>
            <Route path='me' element={<About/>}/>
            <Route path='projects' element={<Projects />} />
            <Route path='thanks' element={<Thanks />} />
            <Route path='games' element={<Working message={'I\'m working on a demo'} />}/>
          </Route>

   
          <Route path='*' element={<NoPage />}/>
        </Routes>
      </ThemeProvider>
  )
}

export default App;