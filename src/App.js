import React from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured';

function App() {
  return (
    <div className="App" style={{ height:`${window.innerHeight}px`}}>
      <Header />
      <Featured/>
    </div>
  );
}

export default App;
