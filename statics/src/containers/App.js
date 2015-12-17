import React, { Component } from 'react'
import { createStore, compose , combineReducers } from 'redux'
import { Provider } from 'react-redux'


import {addLine, deleteLine, savePurchase, savePurchaseDraft, purchaseCalc, checkProvider} from '../actions/purchaseActions'
import purchase from '../reducers/purchase'


const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const reducer = combineReducers({purchase});
const store = finalCreateStore(reducer);
console.log(store.getState())

export default class App extends Component {  
  render() {
    return (
      <div>
        <Provider store={store}>
        </Provider>
      </div>
    );
  }
}