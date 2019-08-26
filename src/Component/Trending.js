import React from 'react';
import { trending } from '../api/TouitAPI';


class Trending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trend: [],
        }
    }

    componentDidMount() {
        trending((e) => {
            this.setState({
                trend: Object.entries(e).sort((a, b) => {
                    if (a[1] === b[1]) {
                        return 0;
                    }
                    else {
                        return (a[1] < b[1]) ? 1 : -1;
                    }
                })
            })
        })
    }

    render() {
        return (
            <div className="row justify-content-center">
                {this.state.trend.map((trend, index) =>
                    <div className="Trend m-1" key={index} > #{trend[0]} </div>
                )}
            </div>

        )
    }
}

export default Trending;