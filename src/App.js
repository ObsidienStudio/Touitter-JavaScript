import React from 'react';
import './App.css';
import Touit from './Component/Touit';
import { list } from './api/TouitAPI';
import Sendmessage from './Component/sendMessageForm';
import Header from './Component/header';
import Trending from './Component/Trending';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      touits: [],
    }
  }
//////////Ayoub
  reloadTouits = () => {
    list(0)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ touits: data.messages });
      })
  }

  componentDidMount() {
    list(0)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ touits: data.messages });
      })
      
      this.interval = setInterval(this.reloadTouits, 2000)
  }

  componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
}


  render() {

    // console.log(this.state.touits)
    return (
      <div className="bodyP container-fluid">
        <Header />

        <Sendmessage />
        <div className="row justify-content-around text-center">
          <div className="Trender col-3">
            <Trending />
          </div>

          <div className="Accueil col-8">
            {this.state.touits.map((touit, index) =>
              <Touit key={index} {...touit} />
            )}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
