import {shuffle} from 'lodash';

const initialState = {
  cards: [],
  steps: [],
  countAction: 0,
  isWin: false
};

export default function eventSate(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_CARDS':
      return createCards(state, action);
    case 'MOVE_CARDS':
      return moveCard(state, action);
    case 'BACK_MOVE_CARDS':
      return backMoveCard(state, action);
    default:
      return state;
  }
}


function createCards(rootState, action) {
  let _state = {...rootState};

  _state.steps = [];
  _state.countAction = 0;

  // массив от 0 до 15
  //// Андройд не поддерживает es7:
  //// _state.cards = Array.from({length: action.payload}, (value, index) => index);
  _state.cards = Array(action.payload + 1).join('+').split('').map((value, index) => index);

  // перемешиваем массив
  _state.cards = shuffle(_state.cards);

  return _state;
}


function moveCard(rootState, action) {
  let _state = {...rootState};
  let index = action.payload;

  // Клик по пустой карте
  if (!_state.cards[index]) {
    return;
  }

  let secondPosition = null;

  if (index - 4 >= 0 && _state.cards[index - 4] === 0) {
    secondPosition = index - 4;
  }
  else if (index + 4 <= _state.cards.length && _state.cards[index + 4] === 0) {
    secondPosition = index + 4;
  }
  else if (index - 1 >= 0 && (index % 4) && _state.cards[index - 1] === 0) {
    secondPosition = index - 1;
  }
  else if (index + 1 <= _state.cards.length && ((index + 1) % 4) && _state.cards[index + 1] === 0) {
    secondPosition = index + 1;
  }

  if (secondPosition !== null) {
    _state.cards = _changeCards(_state.cards, index, secondPosition);
    _state.steps.push({first: index, second: secondPosition});
    _state.countAction += 1;
  }

  if (_state.cards.join('') === "1234567891011121314150") {
    _state.isWin = true;
  }


  return _state;
}

function backMoveCard(rootState) {
  let _state = {...rootState};
  let popStep = _state.steps.pop();
  if (popStep) {
    _state.cards = _changeCards(_state.cards, popStep.first, popStep.second);
  }
  return _state;
}

function _changeCards(cards, first, second) {
  cards = [...cards];
  [cards[first], cards[second]] = [cards[second], cards[first]];
  return cards;
}
