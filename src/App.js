
import React from 'react';
import DemoButton from './components/DemoButton';
import Pics from './components/Pics';
// import './App.css';

let styles = {
    margin: 'auto',
    width: '500px',
  };
  
function App() {
  return (
	 <div style={styles}>
    
    <DemoButton/>
    <Pics/>
    
	</div>


  );
}

export default App;