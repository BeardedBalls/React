// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin'
import Register from './components/Register';
import LoginForm from './components/LogIn';

function App(){
return(
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
)
}

export default App;
