import thunk from 'redux-thunk'
import * as types from '../constants/ActionTypes'


export function addLine() {
  return {
    type: types.ADD_LINE,
  }
}

export function deleteLine(id) {
  return {
    type: types.DELETE_LINE,
    id
  }
}

export function savePurchase(json) {
  return {
    type: types.SAVE_PURCHASE,
    json
  }
}

export function savePurchaseDraft(json) {
  return {
    type: types.SAVE_PURCHASE_DRAFT,
    json
  }
}

export function purchaseCalc(data) {
  return {
    type: types.PURCHASE_CALC,
    data
  }
}

export function checkProvider(data) {
  return {
    type: types.CHECK_PROVIDER,
    data
  }
}