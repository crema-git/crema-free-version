import {
  ADD_CART_ITEM,
  GET_CUSTOMERS,
  GET_ECOMMERCE_LIST,
  GET_RECENT_ORDER,
  REMOVE_CART_ITEM,
  SET_CART_ITEMS,
  SET_FILTER_DATA,
  SET_PRODUCT_DATA,
  SET_PRODUCT_VIEW_TYPE,
  UPDATE_CART_ITEM,
} from '@crema/constants/ActionTypes';
import { cartItems } from '@crema/fakedb/data';
import { createReducer } from '@reduxjs/toolkit';

export const VIEW_TYPE = Object.freeze({ LIST: 1, GRID: 2 });
const initialState = {
  ecommerceList: [],
  viewType: VIEW_TYPE.LIST,
  currentProduct: null,
  orderCount: 0,
  filterData: {
    title: '',
    brand: [],
    ideaFor: [],
    discount: [],
    color: [],
    rating: [],
  },
  cartItems: cartItems,
  recentOrders: [],
  customers: [],
  customerCount: 0,
};

const ecommerceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_ECOMMERCE_LIST, (state, action) => {
      state.ecommerceList = action.payload;
    })
    .addCase(SET_PRODUCT_VIEW_TYPE, (state, action) => {
      state.viewType = action.payload;
    })
    .addCase(SET_FILTER_DATA, (state, action) => {
      state.filterData = action.payload;
    })
    .addCase(SET_PRODUCT_DATA, (state, action) => {
      state.currentProduct = action.payload;
    })
    .addCase(GET_RECENT_ORDER, (state, action) => {
      state.recentOrders = action.payload.data;
      state.orderCount = action.payload.count;
    })
    .addCase(SET_CART_ITEMS, (state, action) => {
      state.cartItems = action.payload;
    })
    .addCase(UPDATE_CART_ITEM, (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    })
    .addCase(ADD_CART_ITEM, (state, action) => {
      let cartItems = [];
      if (state.cartItems.some((item) => +item.id === +action.payload.id)) {
        cartItems = state.cartItems.map((item) => {
          if (+item.id === +action.payload.id) {
            item.count = +item.count + 1;
          }
          return item;
        });
        state.cartItems = cartItems;
      } else {
        cartItems = state.cartItems.concat({
          id: action.payload.id,
          title: action.payload.title,
          mrp: action.payload.mrp,
          discount: action.payload.discount,
          brand: action.payload.brand,
          image: action.payload.image[0],
          count: 1,
        });
        state.cartItems = cartItems;
      }
    })
    .addCase(REMOVE_CART_ITEM, (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    })
    .addCase(GET_CUSTOMERS, (state, action) => {
      state.customers = action.payload.customers;
      state.customerCount = action.payload.customerCount;
    });
});

export default ecommerceReducer;
