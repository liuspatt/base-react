import {createStore, applyMiddleware} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import reducer from './reducers/_reducer'


const persistConfig = {
    key: 'root',
    storage,
    // For reset after reload o re open
    blacklist: ['cats']
}

const persistedReducer = persistReducer(persistConfig, reducer);

// const store = createStore(persistedReducer, applyMiddleware(navigationMiddleware))

// not use redux for navigator
const store = createStore(persistedReducer)
const persistor = persistStore(store)


export {store, persistor}