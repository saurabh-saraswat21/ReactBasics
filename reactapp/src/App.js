import React, { Component } from 'react';
import Contact from './Contact'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="head"> first react app (this is a class component)</h1>
        {/* <button onClick={this.showcontact} > show contact app</button > */}
        <Contact/>
      </div>
    )
  };
}

export default App;
