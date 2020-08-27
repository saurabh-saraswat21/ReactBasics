
// importing react to be used 
import React, { Component } from 'react';

// importing child components
import Component2 from './Components/component2'
import Component3 from './Components/component3'
import Form from './Components/formComponent'

class App extends Component {
  state = {
    // this is the list we are going to inject and display in the Contact component
    list: [
      //  each child in an array or iterator should have a unique attribute here in this case is id 
      { name: 'item 1', price:30, id: 1 },
      { name: 'item 2', price : 40,id: 2 }

    ]

  }
  render() {
    return (
      <div className="App">

        {/* heading in the root app component */}
        <h1 className="heading"> This is a heading in the root component </h1>

        {/* first child component(class based)  */}
        <div className="child comp1">

          {/* this is how you nest child components */}
          <Component2 />

        </div>

        {/* second child component (func based) */}
        <div className="child comp2">

          {/* passing state of root component to be used in child component as props */}
          <Component3 list={this.state.list} />

        </div>

        <div className="child comp3">
          <Form/>
        </div>
      
      </div>
    )
  };
}

export default App;
 