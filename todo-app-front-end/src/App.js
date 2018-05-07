import React, { Component } from 'react';
import { TodoListSection } from './components';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <TodoListSection />
      </div>
    );
  }
}

export default App;
