import React from 'react';
// A func based component with {list} passed manually as a props using destructuring
const Component3 = ({list}) =>{

    //this  "map" method itereats list one by one storing in "item" and then store in "mylist" 
    const mylist = list.map(item =>{

        return(
            
            // "key" is the unique attribute
            <div className="mylist" key = {item.id}>

                <h2> name: {item.name}</h2>
                <h2> price: {item.price}</h2>
                
            </div>
        )
    })
    return(
        <div className= "Component3">
            
            <h1>this is a function based component</h1>
            <h2>a list  of 2 elements is iterated below </h2>
            
            {/* linking the iterated list to the main return method */}
            {mylist}


        </div>
    )
}
export default Component3