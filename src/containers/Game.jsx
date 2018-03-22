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

  render() {
    let cards = this.cards.map(val=>(<Card value={val} />));

    return (
      <div className="game">
        {cards}

      </div>
    );
  }
}

export default App;
// export default connect(
//   state => ({user: state.user}),
//   dispatch => ({userAction: bindActionCreators(userAction, dispatch)}))(App)
