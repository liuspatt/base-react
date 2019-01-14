function reducer(state = {list: []}, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case 'SET_CAT_LIST': {

            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export default reducer 	
