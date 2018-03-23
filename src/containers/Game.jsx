import React, {Component} from 'react';
import {shuffle} from 'lodash';

import Card from './Card';
import './game.css';


class App extends Component {
  constructor(props) {
    super(props);

    // массив от 0 до 15
    //// Андройд не поддерживает es7:
    //// this.cards = Array.from({length: 16}, (value, index) => index);
    this.cards = Array(17).join('+').split('').map((value, index) => index);
    // перемешиваем массив
    this.cards = shuffle(this.cards);
  }

  handlerClick = index => {
    // Клик по пустой карте
    if (!this.cards[index]) {
      return;
    }

    let cards = this.cards;

    if (index - 4 >= 0 && cards[index - 4] === 0) {
      this.changeCards(index, index - 4);
    }
    else if (index + 4 <= cards.length && cards[index + 4] === 0) {
      this.changeCards(index, index + 4);
    }
    else if (index - 1 >= 0 && (index % 4) && cards[index - 1] === 0) {
      this.changeCards(index, index - 1);
    }
    else if (index + 1 <= cards.length && ((index + 1) % 4) && cards[index + 1] === 0) {
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
    if (this.cards.join('') === "1234567891011121314150") {
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
