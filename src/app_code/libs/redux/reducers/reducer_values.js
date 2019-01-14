function reducer(state = {}, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case 'SET_VALUE': {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export default reducer 	