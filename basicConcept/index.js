
// defining constants variable

const { createStore } = require("redux");

const INCREMENT = 'INCREMENT';
const DECRIMENT = 'DECRIMENT';
const RESET = 'RESET';
const INCREMENTBYVALUE = 'INCREMENTBYVALUE';


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

const  decrementCounter = ()=>{

    return {
        type : DECRIMENT
    }

}
const  resetCounter = ()=>{

    return {
        type : RESET
    }

}

const  increnmentByValue = (value)=>{

    return {
        type : INCREMENTBYVALUE,
        payload : value // to receive data
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
           case DECRIMENT:
           return {
            ...state,
            count : state.count - 1
           }
           case RESET:
            return{
                ...state,
                count : 0
            }

            case  INCREMENTBYVALUE :
            return {
 ...state,
count : state.count + action.payload
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
store.dispatch(increnmentByValue(10))
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(resetCounter())
store.dispatch(incrementCounter())