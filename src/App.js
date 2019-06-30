import React, { Component } from "react";
import PlayCard from "./components/PlayCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import ScoreBoard from "./components/ScoreBoard";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards
  };

  RecordClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cards });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     
     
     <Wrapper>
       
       
        <Title>Playing Cards</Title>
      <ScoreBoard></ScoreBoard>
        
        {this.state.cards.map(card => (
          <PlayCard
            cards={this.RecordClick}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
           
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
