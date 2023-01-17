//constances

const { createStore,applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// product reducer reducer number 1

const initialProductState = {
  products: "",
  productCount: 0,
};

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// use reducer

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
       products : [...state.products , action.payload],
       productCount: state.productCount + 1

      };

    default:
      return state;
  }
};



// store

const store = createStore(productReducer, applyMiddleware(logger))

// subscribe
store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(addProduct('mahamodul Hasan Moon'))
  store.dispatch(getProducts())
  store.dispatch(addProduct('mahamodul Hasan '))

