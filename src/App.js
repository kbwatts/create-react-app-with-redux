import React, { Component } from 'react';
import logo from './logo.svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import myAppActions from './redux/actions';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles['App']}>
        <p>Edition</p>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <h1 className={styles['App-header']}>Welcome to React</h1>
        </header>
        <p className={styles['App-intro']}>
          {this.props.stats && this.props.stats.overview.descriptions}
        </p>
      </div>
    );
  }

  componentWillMount() {
    this.props.myAppActions.fetchWorldPopulation();
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    myAppActions: bindActionCreators(myAppActions, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
