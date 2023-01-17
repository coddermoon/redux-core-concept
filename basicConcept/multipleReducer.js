//constances

const { createStore } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// product reducer

const initialProductState = {
  products: "",
  productCount: 0,
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

// card reducer



// store

const store = createStore(productReducer)

// subscribe
store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(addProduct('mahamodul Hasan Moon'))
  store.dispatch(addProduct('mahamodul Hasan '))