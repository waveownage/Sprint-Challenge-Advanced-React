import React from "react";

class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  render() {
    return this.props.players.map(data => {
      return (
        <div>
          <div>
            <p>Name: {data.name}</p>
            <p>ID: {data.id}</p>
            <p>Country: {data.country}</p>
          </div>
        </div>
      );
    });
  }
}

export default PlayerCard
