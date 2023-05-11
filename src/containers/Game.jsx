import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Card from './Card';
import './game.css';
import * as ActionsGame from '../store/game/action';


class App extends Component {
  constructor(props) {
    super(props);

    const {actions} = props;
    this.actions = actions;

    this.actions.createCards(16);
  }

  handlerMoveCard = index => {
    this.actions.moveCard(index);
  };

  handlerBackMoveCard = () => {
    this.actions.backMoveCard();
  };

  render() {
    const {cards, isWin, countStep, countAction} = this.props;

    if (isWin) {
      return (<div className="game">
        <h2>Congratulations! It's a victory!</h2>
        <div>Number of moves: {countStep}</div>
        <div>Number of actions: {countAction}</div>
      </div>)
    }

    let cardsTemplate = cards.map((value, index) => (
      <Card
        key={value}
        value={value}
        index={index}
        handlerClick={this.handlerMoveCard}
      />
    ));

    return (
      <div className="game">
        <button
          onClick={e => {
            this.handlerBackMoveCard()
          }}>
          Undo Move
        </button>
        <div className="game__place">
          {cardsTemplate}
        </div>
      </div>
    );
  };
}

export default connect(
  state => {
    return ({
      cards: state.game.cards,
      isWin: state.game.isWin,
      countStep: state.game.steps.length,
      countAction: state.game.countAction,
    })
  },
  dispatch => ({actions: bindActionCreators(ActionsGame, dispatch)})
)(App)
