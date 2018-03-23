import React, {Component} from 'react';

import './card.css';

class App extends Component {
  render() {
    let {value, index, handlerClick} = this.props;
    let className = ["card"];

    if (!value) {
      value = "";
      className.push("-empty ");
    }


    return (
      <div
        className={className.join(' ')}
        onClick={e => {handlerClick(index)}}>
        {value}
      </div>
    );
  }
}

export default App;
