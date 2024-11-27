import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Mission from './components/Mission';
import Help from './components/Help';
import Allinone from './components/Allinone';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Mern from './components/Mern';
import MernContent from './components/MernContent';
import Discussions from './components/Discussions';
import AuthRedirect from './Route/AuthRedirectRoute';
import ProtectedRoute from './Route/ProtectedRoute';
import Profile from './components/Profile';
import Student from './components/Student';
import { useAuth } from './Context/AuthProvider';
import AdminSessionManager from './components/AdminSessionManager';
import ForgotPassword from './components/ForgotPassword';
import Contact from './components/Contact';
import PrivateRoute from './Route/PrivateRoute';
import Adfar from './components/Adfar/Adfar';

function App() {
  const {isAuthenticated} = useAuth()
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Herosection />
                <Mission />
                <Help />
                <Allinone />
                <Testimonials />
                <Footer />
              </>
            }
          />
          {/* Redirect authenticated users trying to access login/register */}
          <Route
            path="/signin"
            element={
              <AuthRedirect>
                <Login />
              </AuthRedirect>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRedirect>
                <Register />
              </AuthRedirect>
            }
          />

          {/* Protected Routes */}
          <Route
          path="/mern"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Mern/>
            </PrivateRoute>
          }
        />
          <Route
            path="/content"
            element={
              
                <MernContent />
              
            }
          />
          <Route path='/contact' element={<Contact/>}/>          
          <Route
            path="/discussion"
            element={
              
                <Discussions />
           
            }
            
          />
          <Route path='/profile' element={
            
              <Profile/>
          
          }/>
          <Route path='/student' element={
            
            <Student/>}/>
            <Route path='/classcreation' element={<AdminSessionManager/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path= '/who-am-i' element={<Adfar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
