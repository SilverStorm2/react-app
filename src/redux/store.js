import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

export const getAllColumns = (state) => state.columns;
export const getAllLists = (state) => state.lists;
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);
export const getGlobalSearchStringValue = (state) => state.searchString;

// selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getFavoriteCards = ({ cards }) => cards.filter((card) => card.isFavorite);

// action creators
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const updateSearchString = (payload) => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const toggleCardFavorite = (payload) => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

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
