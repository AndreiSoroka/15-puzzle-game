import React, {Component} from 'react';
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'

// import * as userAction from '../store/user/action';

import './card.css';


class App extends Component {
  render() {
    let {value} = this.props;
    return (
      <div className="card">
        {value}
      </div>
    );
  }
}

export default App;
// export default connect(
//   state => ({user: state.user}),
//   dispatch => ({userAction: bindActionCreators(userAction, dispatch)}))(App)
