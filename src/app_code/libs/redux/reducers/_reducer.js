import {combineReducers} from 'redux'

import reducer_values from './reducer_values'
import cats from './cats'

// import navigationReducer from '../../Navigator/reducerNavigator'

const reducer = combineReducers({
    reducer_values,
    cats,
    // nav: navigationReducer
})

export default reducer