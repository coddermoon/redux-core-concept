//constances

const { createStore } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const GET_CARD = 'GET_CARD';
const ADD_CARD = 'ADD_CARD';

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

// card reducer

// card state 

const initialCardState = {
    carts: "",
    numberOfItems: 0,
  };
  

//   actions

const getCard = ()=>{
    return {
        type : GET_CARD,
    }
}

const addCard = (card)=>{
    return {
        type : ADD_CARD,
        payload : card,
    }
}

// make reducer

const cardReducer = (state=initialCardState, action)=>{

    switch (action.type) {
        case GET_CARD:
            
            return {
                ...state
            }
            case ADD_CARD :
            return {

                carts :[...state.carts,action.payload],
                numberOfItems: state.numberOfItems + 1

            }
    
        default:
            state
    }

}




// store

const store = createStore(cardReducer)

// subscribe
store.subscribe(() => {
    console.log(store.getState());
  });

//   store.dispatch(addProduct('mahamodul Hasan Moon'))
//   store.dispatch(getProducts())
//   store.dispatch(addProduct('mahamodul Hasan '))


  store.dispatch(getCard())
  store.dispatch(addCard('pen'))