import React, { Component } from 'react';
import './App.css';


const list = [
    {
        "id": 1,
        "title": "Start Chapter 3",
        "body": "Continue from chapter of the django api book"
    },
    {
        "id": 2,
        "title": "Go for a walk",
        "body": "when its 8pm go for a walk around the block"
    }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list };
  }
  render() {
    return (
      <div>
        { this.state.list.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
