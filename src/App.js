import React, { Component } from 'react';
import './App.css';
import Membre from './components/membre';

// function App() {

class App extends Component{
    render(){ 
 
     return (
    <div className="App">
      <h1>Test de modifications des Components sur React</h1>
      <Membre />
      <Membre />
      <Membre />
      <p>lorem impsum</p>
    </div>
  );
}
}


export default App;
