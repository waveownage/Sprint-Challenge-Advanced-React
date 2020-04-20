import React from 'react';
import axios from "axios";
import PlayerCard from "./components/PlayerCard"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players: [],
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
        <h1>REACT GITHUB USER CARD</h1>
        <PlayerCard player={this.state.player} />
      </div>
    );
  }
}

export default App;
