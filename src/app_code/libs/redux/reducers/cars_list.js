function reducer(state = {}, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case 'SET_CAR': {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export default reducer 	