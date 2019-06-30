import React, { Component } from "react";
import PlayCard from "./components/PlayCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import ScoreBoard from "./components/ScoreBoard";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards,
    count: 0,
    TopCount: 0,
    played: [],
    Message: ""
  };


    UpdateTopCount =()=> {
     let newcount =this.state.count > this.state.TopCount?  this.state.count:  this.state.TopCount;
      this.setState({TopCount: newcount});
      this.setState({Message:  ""});
    };

  RecordClick = name => {
    console.log("get click", name);
    let CardArray = this.state.played;
    if (CardArray.includes(name)) {
        CardArray = [];
        this.setState({played: []});
        this.setState({count: 0});
        this.setState({Message:  "Card previously Clicked!! - Score Reset"})
      // reset
    } else {
      CardArray.push(name);
      this.setState({ played: CardArray });
      console.log(this.state.played);
     //set state runs asychronously. So have to enter a function in the call back to update top count
      this.setState({ count: this.state.count + 1}, this.UpdateTopCount);
     
     
      console.log("current count is", this.state.count);
      
    
      console.log("mycount", this.state.TopCount);
      
    }

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    return array;
    }
      
    this.setState({ cards: shuffle(this.state.cards) });

   
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game <h4>React Demo</h4></Title>
        <ScoreBoard>
          {this.state.count} {this.state.TopCount}{this.state.Message}
        </ScoreBoard>
        {this.state.cards.map(card => (
          <PlayCard
            RecordClick={this.RecordClick}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
