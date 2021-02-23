import React, { Component } from 'react';

//import NavBar from './NavBar';
import PlayList from './components/PlayList';
import PlayListForm from './components/PlayListForm';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayListForm />
        <PlayList />
      </div>
    );
  }
}

export default App;
