import React from "react";
import styled from "styled-components";

class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }
  render() {
    return this.props.players.map(item => (
      <StyledDiv1>
        <p>Name: {item.name}</p>
        <p>Country: {item.country}</p>
        <p>Searches: {item.searches}</p>
        <p>ID: {item.id}</p>
      </StyledDiv1>
    ));
  }
}

const StyledDiv1 = styled.div`
  display: flex;
  margin: 2%;
  padding: 1%;
  background-color: #6495ed;
  width: 20%;
  height: 30%;
  flex-direction: column;
  align-items: center;

}
&:hover {
    border: 2px solid yellow;
    position:relative;
    animation: bounceAround 1.0s ease-in-out infinite;
    @keyframes bounceAround {
    35%, 55%{transform:translateY(0px) rotate(0deg);}
    60% {transform: translateY(-20px) rotate(0deg);}
}
`;

export default PlayerCard;
