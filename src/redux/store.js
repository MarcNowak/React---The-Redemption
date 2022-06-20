import { combineReducers, createStore } from 'redux';
import initialStoreData from '../data/dataStore';
import columnsReducer from './columnsRedux';
// importujemy funkcję reducer
import cardsReducer from './cardsRedux';
import searchReducer from './searchStringRedux';


// define initial state and shallow-merge initial data
// deklarujemy początkowy stan aplikacji
const initialState = {
  app: initialStoreData.app,
  lists: initialStoreData.lists,
  columns: initialStoreData.columns,
  cards: initialStoreData.cards,
  searchString: '',
  
};

// define reducers
// zawiera listę reducerów zajmujących się poszczególnymi fragmentami stanu aplikacji
const reducers = {
  columns: columnsReducer,
  /* dodajemy funkcję reducer do obiektu reducers pod kluczem columns */

  cards: cardsReducer,
  searchString: searchReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);
/* cząstkowe reducery są łączone w jeden za pomocą funkcji combineReducers,
zaimportowanej z pakietu redux */

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
