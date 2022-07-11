import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React  from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
