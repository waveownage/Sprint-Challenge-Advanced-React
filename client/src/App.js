import React from "react";
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import styled from "styled-components";
import NavBar from "./components/navBar";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({ players: res.data });
        console.log(res.data);
      })
      .catch(err => console.log("ERROR!", err));
  }

  render() {
    return (
      <StyledDiv1>
        <NavBar />
        <StyledH1>Women's World Cup Players</StyledH1>
        <StyledDiv2>
          <PlayerCard players={this.state.players} />
        </StyledDiv2>
      </StyledDiv1>
    );
  }
}

const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDiv2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
`;

export default App;
