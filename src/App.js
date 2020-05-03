import React, { Component } from 'react';
import './App.css';
import Membre from './components/membre';

const famille = {
  membre1: {
      nom: 'Younes',
      age: 20
  },
  membre2: {
      nom: 'Chloé',
      age: 23 
  },
  membre3: {
      nom: 'JOUJOU',
      age: 50 
  }
}


class App extends Component{
  state ={
    famille
  }
  
  handleClick = () => {
    console.log('click')
  }
  render(){ 
    const {titre} = this.props
    const {famille} = this.state
      return (
<div className="App">
    <h1>{titre}</h1>
    <Membre 
      nom={famille.membre1.nom} 
      age={famille.membre1.age} />
    <Membre 
      nom={famille.membre2.nom}  
      age={famille.membre2.age} />
    <Membre 
      nom={famille.membre3.nom} 
      age={famille.membre3.age} /> 
      
  <strong>je suis un chocolat</strong> 
   <br/>
  <button
    onClick={this.handleClick}
  >
    Vieillir </button>
</div>
);

}
}
export default App;