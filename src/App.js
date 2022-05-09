import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {number: 0,
    inputs:[]}

  }
   changeNumber = (e) =>{
    const val = e.target.testing.value
    var stuff = []
    for (let index = 0; index < val; index++) {
      stuff.push(index);
    }
    
    var prints = ""
    if(val == stuff.length && this.state.inputs.length > 0){
        for (let index = 0; index < val; index++) {
          prints += "Characteristic " + (index) + ":" + e.target[index+1].value + ", "
        }
    }

    const prints2 = prints
    const inputs = stuff
    console.log(inputs)
     e.preventDefault();
      this.setState({number: e.target.testing.value,
      inputs:inputs,
      prints: prints2});

    }

  render() {
    return (
      <div className="App">
        Choose Characteristic:
        <form onSubmit={this.changeNumber}>
        <input name="testing" type="text" defaultValue={this.state.number}></input>
        {
          this.state.inputs.map((info, index) => {
            return <div key={info}><br></br>Characteristic {index}: <input type="number"></input></div>
          })
        }
        <p>{this.state.prints}</p>
        <br></br>
        <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default App;