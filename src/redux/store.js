import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';

export const getAllColumns = (state) => state.columns;

// selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, action.payload] };
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// Logika modifikacji danych. 
// Aby zmienić dane w magazynie, musimy jakoś uruchomić funkcję reducer, 
// przekazać jej state oraz poinformować, co należy zmienić. 
// Następnie funkcja ta stworzy nowy odpowiednio zmodyfikowany stan i go zwróci. 
// Na końcu my musimy go przyjąć i przypisać w miejsce starego.
