import React from 'react';
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({ user: res.data });
        console.log(res.data);
      })
      .catch(err => console.log("ERROR!", err));
  }
  render() {
    return (
      <div>
        <h1>Hi!</h1>
      </div>
    );
  }
}

export default App;
