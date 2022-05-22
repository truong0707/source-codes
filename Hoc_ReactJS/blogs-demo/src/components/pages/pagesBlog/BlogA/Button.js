import React from "react";
import { Link } from "react-router-dom";
import './ButtonBlog.css'


export default class ButtonBlog extends React.Component {
   /*  constructor(props) {
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
   */
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          </label>
          <Link to="/ContentsBlogA"  type="button" className="btn btn-success buttonCard" >Read More</Link>
        </form>
      );
    }
  }