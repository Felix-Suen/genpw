import React from 'react';
import './App.css';

const chara = 'abcdefghijklmnopqrstuvwxyz1234567890';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      skoot: 'du hello',
    }
  }
  
  onClickButton = () => {
    var stringer = '';
    for (var i = 0; i < 16; i++) {
      stringer += chara[Math.floor(Math.random() * 35) + 1];
    }
    this.setState({
      skoot: stringer,
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
