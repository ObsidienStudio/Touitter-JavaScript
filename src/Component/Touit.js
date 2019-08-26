import React from "react";

class Touit extends React.Component {

    render(){
        const {message, name} = this.props;
        return(
            <div className="Touit">
                <h5>{message}</h5>
                <span><i>{name}</i></span>
            </div>
        )
    };
}

export default Touit;