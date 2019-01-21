function reducer(state = {list: []}, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case 'SET_CAT_LIST': {

            return {...state, ...action.payload}
        }
        case 'ADD_TO_CAT_LIST': {
            let new_items=action.payload;
            let list_items = new_items.concat(state.list);
            return Object.assign({}, state, {
                list: list_items
            })
        }

        default:
            return state
    }
}

export default reducer 	
