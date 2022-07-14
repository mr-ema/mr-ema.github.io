import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/Context/Theme';
import { NavBar, Spinner } from '@/Components/index';
import { Home } from '@Pages';
import _404_ from '@/Errors/404';
import '@/style.css';

const About = React.lazy(() => import('@Pages').then((module) => ({ default: module.About, })));
const ContactMe = React.lazy(() => import('@Pages').then((module) => ({ default: module.ContactMe, })));
const ShowCase = React.lazy(() => import('@Pages').then((module) => ({ default: module.ShowCase, })));

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
        <React.Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path='/' element={<NavBar />}>
              <Route index element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/showCase' element={<ShowCase />}/>
              <Route path='/contactMe' element={<ContactMe />} />
            </Route>
            <Route path='*' element={<_404_ />}/>
          </Routes>
        </React.Suspense>
    </ThemeProvider>
  )
}

export default App;