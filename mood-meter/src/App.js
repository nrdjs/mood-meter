import React from 'react';
import './App.scss'
import './App.css';
import Header from './components/Header.js'
import Login from './components/Login.js'
import Graph from './components/mood-graph/Graph'

function App() {
  return (
    <>
    <div className="App">

    <div>
      <Header/>
      <Graph/>
    </div>
      <Login/>
    </div>
    </>
  );
}

export default App;
