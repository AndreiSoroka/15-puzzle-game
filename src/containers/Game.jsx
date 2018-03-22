import React, {Component} from 'react';
import {shuffle} from 'lodash';

import Card from './Card';
import './game.css';


class App extends Component {
  constructor(props) {
    super(props);

    // массив от 0 до 15
    this.cards = Array.from({length: 16}, (value, index) => index);
    // перемешиваем массив
    this.cards = shuffle(this.cards);
  }

  handlerClick = index => {
    // Клик по пустой карте
    if (!this.cards[index]) {
      return;
    }

    if (index - 4 > 0 && !this.cards[index - 4]) {
      this.changeCards(index, index - 4);
    }
    if (index + 4 < this.cards.length && !this.cards[index + 4]) {
      this.changeCards(index, index + 4);
    }
    if (index - 1 > 0 && !this.cards[index - 1]) {
      this.changeCards(index, index - 1);
    }
    if (index + 1 < this.cards.length && !this.cards[index + 1]) {
      this.changeCards(index, index + 1);
    }

    this.checkWin();
  };

  changeCards = (first, second) => {
    let cards = [...this.cards];
    [cards[first], cards[second]] = [cards[second], cards[first]];
    this.cards = cards;
    this.forceUpdate(); // todo redux
  };

  checkWin = () => {
    if (this.cards.join('') === "1234567891011121314150"){
      alert('Победа!');
    }
  };

  render() {
    let cards = this.cards.map((value, index) => (
      <Card
        key={value}
        value={value}
        index={index}
        handlerClick={this.handlerClick}
      />
    ));

    return (
      <div className="game">
        {cards}
      </div>
    );
  };
}

export default App;
// export default connect(
//   state => ({user: state.user}),
//   dispatch => ({userAction: bindActionCreators(userAction, dispatch)}))(App)
