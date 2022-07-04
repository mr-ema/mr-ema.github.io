import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/Context/Theme';
import { NavBar, Spinner } from '@Components'; 
import { NoPage, Working } from '@/Errors/index';
import '@/style.css';

const About = React.lazy(() => import('@/Pages').then((module) => ({ default: module.About, })));
const Thanks = React.lazy(() => import('@/Pages').then((module) => ({ default: module.Thanks, })));
const Projects = React.lazy(() => import('@/Pages').then((module) => ({ default: module.Projects, })));
const Home = React.lazy(() => import('@/Pages').then((module) => ({ default: module.Home, })));

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <React.Suspense fallback={<Spinner/>}>
        <Routes>
            <Route path='/' element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path='me' element={<About />}/>
              <Route path='projects' element={<Projects />} />
              <Route path='thanks' element={<Thanks />} />
              <Route path='games' element={<Working message={'I\'m working on a demo'} />}/>
            </Route>

            <Route path='*' element={<NoPage />}/>
          </Routes>
        </React.Suspense>
      </ThemeProvider>
  )
}

export default App;