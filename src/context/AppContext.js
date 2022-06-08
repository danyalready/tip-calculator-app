import { createContext, useReducer } from 'react';

const AppContext = createContext(null);

const initialState = {
  bill: '',
  tip: '',
  people: '',
};

function reducer(state, action) {
  switch(action.type) {
    case 'bill':
    case 'tip':
    case 'people': {
      return {
        ...state,
        [action.type]: action.payload,
      };
    }
    case 'reset': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

function AppContextProvider({ children }) {
  const context = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

const changeAppContextValue = (dispatch, event) => {
  dispatch({ type: event.target.name, payload: event.target.value });
};

const resetAppContext = (dispatch) => {
  dispatch({ type: 'reset' });
};

export {
  AppContext,
  AppContextProvider,
  changeAppContextValue,
  resetAppContext,
};
