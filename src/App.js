import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Registration from './Registration';
import React, { Component } from 'react';

function App() {

  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;