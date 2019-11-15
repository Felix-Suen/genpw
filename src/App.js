import React from 'react';
import './App.css';

const chara = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!\"#$%\&\'()*+,-./:;<=>?@[\\]^_`{|}~';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Password: 'du hello',
    }
  }
  
  onClickButton = () => {
    var stringer = '';
    for (var i = 0; i < 16; i++) {
      stringer += chara[Math.floor(Math.random() * 92) + 1];
    }
    this.setState({
      Password: stringer,
    });
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="button" onClick={this.onClickButton}>Gen Password</button>
          <p>{this.state.Password}</p>
        </header>
      </div>
    );
  }

}

export default App;
