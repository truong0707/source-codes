import './page.css'
import React from "react";
import Bigtitle from './Bigtitle';
export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            age: '',
            class: '',
            email:'',
            address: ''


        }
    }
    setID = (event) => {
        this.setState({ id: event.target.value })
    }
    setName = (event) => {
        this.setState({ name: event.target.value })
    }
    setAge = (event) => {
        this.setState({ age: event.target.value })
    }
    setClass = (event) => {
        this.setState({ class: event.target.value })
    }
    setEmail = (event) => {
        this.setState({ email: event.target.value })

    }
    setAddress = (event) => {
        this.setState({ address: event.target.value })

    }
    submitRegister = () => {
        console.log(this.state);

    }
    render() {
        return <div className="page">
            <div className="aboutme">
                <Bigtitle 
                    bigtitle='My Information!'
                />
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Student ID :</th>
                            <td>{this.state.id}</td>
                        </tr>
                        <tr className="table-primary">
                            <th>Full Name :</th>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr className="table-success">
                            <th>Age :</th>
                            <td>{this.state.age}</td>
                        </tr>
                        <tr className="table-danger">
                            <th>Class :</th>
                            <td>{this.state.class}</td>
                        </tr>
                        <tr className="table-info">
                            <th>Email :</th>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr className="table-warning">
                            <th>Address :</th>
                            <td>{this.state.address}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="pageinfor">
                <Bigtitle
                    bigtitle='Edit personal information.!'
                />

                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter your ID:</span>
                    </div>
                    <input type="text" className="form-control" placeholder="4****" value={this.state.id}
                        onChange={this.setID} />
                </div>
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter your name:</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Nguyễn Văn A" value={this.state.name}
                        onChange={this.setName} />
                </div>
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter your Age:</span>
                    </div>
                    <select value={this.state.class} onChange={this.setAge} className="form-control">
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                    </select>
                </div>
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter your name:</span>
                    </div>
                    <select value={this.state.class} onChange={this.setClass} className="form-control">
                        <option value="IT19A1B">IT19A1B</option>
                        <option value="IT19A1A">IT19A1A</option>
                        <option value="IT19A2B">IT19A2B</option>
                        <option value="IT19A2A">IT19A2A</option>
                    </select>
                </div>
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter your <address></address>:</span>
                    </div>
                    <input type="text" className="form-control" placeholder="philipkak2001@gmail.com" value={this.state.email}
                        onChange={this.setEmail} />
                </div>
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter your <address></address>:</span>
                    </div>
                    <input type="text" className="form-control" placeholder="K546/25 Tôn Đản, Cẩm Lệ, ĐN" value={this.state.address}
                        onChange={this.setAddress} />
                </div>

                <div><button type="button" onClick={this.submitRegister} className="btn btn-danger">Save</button> </div>

            </div>
        </div>

    }
}