import React, { Component, PropTypes } from 'react';
import * as PurchaseActions from '../actions/purchaseActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import mapValues from 'lodash/object/mapValues';



@connect(state => ({
  listing: state
}))
export default class ResumePurchase extends Component {

  static propTypes = {
    listing: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  renderList () {
    mapValues(this.props.lineas, (linea) => {
      return (
        <li>linea.id</li>
      )
    })
  }

  render () {
    const { listing: { lineas }, dispatch } = this.props;
    const actions = bindActionCreators(PurchaseActions, dispatch);
    return (
      <div className='col-xs-12'>
        <h1>Resumen</h1>
      </div>  
    )
  }
}