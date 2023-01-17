
// defining constants variable

const { createStore } = require("redux");

const INCREMENT = 'INCREMENT';
// const DECRIMENT = 'DECRIMENT';
// const RESET = 'RESET';


// state variables

const initialState = {
    count : 0
}


//action object type - payload 

const  incrementCounter = ()=>{

    return {
        type : INCREMENT
    }

}



// create a reducer

const counterReducer = (state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            
           return {
            ...state,
            count : state.count + 1
           }
    
        default:
            state
    }
}



// create a store object

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState());
  });
// 5. dispatch

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())