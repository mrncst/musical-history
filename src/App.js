import React, { useState } from 'react';
import ButtonSet from './components/ButtonSet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [artists, setArtists] = useState({
                                      artists: ''
                                    });

  return (
    <div className="App">
      <div className='container-header'>
        <h1>apolo</h1> 
        <div className="opening-text">
          <h2>Your musical story is here.</h2>
          <h3>Know more about your musical profile.</h3>
        </div>
        <ButtonSet/>
        <Router>
        </Router>
      </div>
    </div>
  );
}

export default App;
