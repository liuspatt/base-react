import React from 'react';

export const Store = React.createContext();

const initialState = {
  episodes: [],
  favourites: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, episodes: action.payload };
    case 'ADD_SAVE':
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    case 'REMOVE_SAVE':
      return {
        ...state,
        favourites: action.payload
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}