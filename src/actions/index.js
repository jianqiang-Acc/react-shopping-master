/**
 * Created by Administrator on 2017/5/12.
 */
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
// shop.json 数组
})

export const getAllProducts = () => dispatch => {
  fetch('../api/shop.json')
    .then(response => response.json())
    .then(json => dispatch(receiveProducts(json)))
}

export const inaddproduct = productId => ({
  type: types.ADD_PRODUCT,
  // 产品Id
  productId: productId
})
export const productaddMashuId = productMashuId => ({
  type: types.ADD_MashuId,
  // 码数
  productMashuId: productMashuId
})
export const decproduct = productId => ({
  type: types.DEL_PRODUCT,
  productId: productId
})

export const deccount = productId => ({
  type: types.DEL_COUNT,
  productId: productId
})

export const clearproduct = () => ({
  type: types.CLEAR_PRODUCT
})

export const addhistory = (order,id) => ({
  type:types.ADD_HISTORY,
  id: id,
  order: order
})
