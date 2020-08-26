import React, { Component } from 'react';
import Contact from './Contact'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> first react app</h1>
        {/* <button onClick={this.showcontact} > show contact app</button> */}
        <Contact/>
      </div>
    )
  };
}

export default App;
