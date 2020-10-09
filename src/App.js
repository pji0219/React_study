import React, {Component} from 'react';
import ClassCounter from './components/ClassCounter';

class App extends Component {
  render() {
    return (
      <div>
        <ClassCounter/>
        <ClassCounter/>
      </div>
    )
  }
}

export default App;