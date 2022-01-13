import React, { Component } from 'react';
import HomePage from './components/Homepage';

// state/store stuff
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MyAppState } from './store/rootStore';
import { decrementCount, incrementCount } from './store/counter/CounterAction';
import { reverseName } from './store/reverser/ReverserAction'

interface AppProps {
  increment: () => void;
  decrement: () => void;
  reverseName: () => void;
}

const mapStateToProps = (state: MyAppState) => ({
  count: state.counterReducer.count,
  name: state.reverserReducer.name
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount()),
  reverseName: () => dispatch(reverseName())
});

class App extends Component<AppProps, MyAppState> {

  render() {
    return (
      <HomePage {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
