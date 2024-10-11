import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainApp from './components/MainApp';


const GsapTo = lazy(()=>import('./components/GsapTo'));
const GsapFrom = lazy(()=>import('./components/GsapFrom'));
const GsapFromTo = lazy(()=>import('./components/GsapFromTo'));
const GsapTimeline = lazy(()=>import('./components/GsapTimeline'));

export default function App(){
  return(<>
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
    
        <Routes>
          <Route path='/gsapto' element={<GsapTo/>}  />
          <Route path='/gsapfrom' element={<GsapFrom/>} />
          <Route path='/gsapfromto' element={<GsapFromTo />}  />
          <Route path='/gsaptimeline' element={<GsapTimeline />} />
          <Route path='/' element={<MainApp/>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </>)
}