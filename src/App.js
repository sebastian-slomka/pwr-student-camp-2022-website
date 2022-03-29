import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';

import './App.css';
import Home from './pages';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} exect />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
