import React from "react";


export default class InputCardBody2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    
      event.preventDefault();
    }
  
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="Search..." value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
      );
    }
  }