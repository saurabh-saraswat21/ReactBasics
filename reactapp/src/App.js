import React, { Component } from 'react';
import Contact from './Contact'
import Component3 from './component3'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="head"> first react app (this is a class component)</h1>
        {/* <button onClick={this.showcontact} > show contact app</button > */}

        {/* //this is how you nest a  class based component */}

        <Contact/>
      {/* this is how you nest a function based compopnent */}
        { Component3() }
      </div>
    )
  };
}

export default App;
