import React from "react";
export default class SendMess extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>

                <MessageList items={this.state.items} />
                <form
                    className='InputChat'
                    onSubmit={this.handleSubmit}
                >
                    <div className='Chat'>
                        <input
                            className='TypeMess w3-input w3-border w3-animate-input'
                            placeholder='Type some message...'
                            type='text'
                            onChange={this.handleChange}
                            value={this.state.text}
                        />
                    </div>
                    <div className='Send'>
                        <button type='submit' className='btn btn-success'>
                            <i className="far fa-paper-plane"></i>
                        </button>
                    </div>

                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class MessageList extends React.Component {
    render() {
        return (
            <div className='MessList'>
                <ul className = 'List'>
                    {this.props.items.map(item => (
                        <li className='Mess' key={item.id}>{item.text}</li>
                    ))}
                </ul>
                <div className="hoangviet"></div>
            </div>
            
        );
    }
}

