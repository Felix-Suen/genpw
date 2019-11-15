import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skoot: 'du hello',
    }
  }
  
  onClickButton = () => {
    this.setState({
      skoot: "skooma",
    });
    console.log(this.state.skoot);
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="button" onClick={this.onClickButton}>Gen Password</button>
          <p>{this.state.skoot}</p>
        </header>
      </div>
    );
  }

}

export default App;
