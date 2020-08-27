import React, { Component } from 'react';
class Form extends Component {
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value


        })

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
       
        
    }


    state = {
        name: null,
        price: null
    }
    render() {
        return (
            <div>
                <form className="input-Form" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={this.handleChange} />
                    <label htmlFor="price" >Price:</label>
                    <input type="text" name="price" id="price" onChange={this.handleChange} />
                    <button className="submit" name="submit">Submit</button>

                </form>
            </div>
        )
    }
}
export default Form;