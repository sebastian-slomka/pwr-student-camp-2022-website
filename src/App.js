import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';

import './App.css';
import Signupp from './pages/signup';
import LoginPage from './pages/login';
import AuthProvider from './context/auth-context';
import Home from './pages';
import RegistrationFormPage from './pages/registration-form';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home/>} exect />
            <Route path='/signin' element={ <Signupp/> } exect />
            <Route path='/login' element={ <LoginPage/> } exect />
            <Route path='/registration-form' element={ <PrivateRoute><RegistrationFormPage/></PrivateRoute> } exect />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
