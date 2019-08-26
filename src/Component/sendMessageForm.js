import React from 'react';
import { sending } from '../api/TouitAPI'

class Sendmessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            msg: "",
        }
        this.Changer = this.Changer.bind(this);
        this.Envoy = this.Envoy.bind(this);

    }


    Envoy(e){
        e.preventDefault();
        sending(e, this.state.name, this.state.msg);
    }


    Changer(event) {
        if (event.target.name === "name") {
            this.setState({
                name: event.target.value,
            })
        }
        else {
            this.setState({
                msg: event.target.value,
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.Envoy} className="sendBar" id="sender">
                <input type="text" id='name' className='col-3' name="name" placeholder="Met un nom" onChange={this.Changer} value={this.state.value} />
                <input type="text" id='msg' className='col-7' maxLength="60" name="message"
                    placeholder="Place ton texte a envoyer (60 caractères max)" onChange={this.Changer} value={this.state.value} />
                <input type="submit" id='button' name='submit' className="btn col-2" />
            </form>
        )
    }
}

export default Sendmessage;