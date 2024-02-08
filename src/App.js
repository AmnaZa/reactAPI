// App.js
import React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import BodyComponent from './bodycomponent';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Footer/>
      <BodyComponent/>

    </div>
  );
}

export default App;
