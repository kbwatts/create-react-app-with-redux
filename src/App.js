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
        <header className={styles['App-header-container']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <h1 className={styles['App-header']}>Price Scanner</h1>
        </header>
          <div className={styles['Main-container']}>
              <p className={styles['App-intro']}>
                Code de Produit: {this.props.stats && this.props.stats.overview.productId}
              </p>
              <p className={styles['App-intro']}>
                  Marque: {this.props.stats && this.props.stats.overview.names.short}
              </p>
              <p className={styles['App-intro']}>
                  Price: ${this.props.stats && this.props.stats.overview.priceBlock.itemPrice.regularPrice}
              </p>
              <p>Veuillez-vous référer à un associé(e) pour assistance sur cet article</p>
          </div>
      </div>
    );
  }

  componentWillMount() {
    this.props.myAppActions.fetchPDP();
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
