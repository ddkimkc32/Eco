import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Registration from './Registration';
import React, { Component } from 'react';
import User_Profile from './User_Profile';

function App() {

  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path='/User_Profile' element={<User_Profile />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
        </Routes>
      </Router>
      {/* <Login /> */}
    </main>
  );
}

export default App;