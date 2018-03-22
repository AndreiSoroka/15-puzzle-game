import React, {Component} from 'react';
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'

// import * as userAction from '../store/user/action';

import './card.css';


class App extends Component {
  render() {
    let {value, index, handlerClick} = this.props;
    if (!value) value = "";

    return (
      <div className="card" onClick={e=>{handlerClick(index)}}>
        {value}
      </div>
    );
  }
}

export default App;
// export default connect(
//   state => ({user: state.user}),
//   dispatch => ({userAction: bindActionCreators(userAction, dispatch)}))(App)
