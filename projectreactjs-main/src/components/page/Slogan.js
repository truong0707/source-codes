import './page.css'
import React from 'react'

export default class Slogan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slogan: '',
            
        }
    }
    setSlogan = (event) => {
        this.setState({ slogan: event.target.value })

    }

    render() {
        return <div className="slogan">
            <div className="slogan-name"><h4>Nguyễn Phi Líp</h4></div>
            <div>
                <p>"{this.state.slogan}"</p>
                Nhập slogan của bạn:
                <input type="text" placeholder="Enter slogan" value={this.state.slogan}
                    onChange={this.setSlogan} />
                <button className="luli" onClick={this.submitRegister}>Enter</button>
            </div>


        </div>
    }
}