import { createStore } from 'redux';
import initialState from './initialState';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, action.newColumn] };
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
