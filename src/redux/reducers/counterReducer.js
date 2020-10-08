import * as actionTypes from "../actions/actionTypes"

const counterReducer = (state=0,action)=>{
    let newState;
    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            return newState=state+actionTypes.payload

        case actionTypes.DECREASE_COUNTER:
            return newState=state-actionTypes.payload
            
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return newState=state+actionTypes.payload    
        
        default:
            return state=newState;
    }
}

export default counterReducer;