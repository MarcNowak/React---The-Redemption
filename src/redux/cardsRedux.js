import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);
// wybieramy karty z danej kolumnt

// action name creator
const reducerName = 'cards';
// w stałej reducerName zapisujemy nazwę właściwości stanu, na której będziemy wykonywać akcje

const createActionName = name => `app/${reducerName}/${name}`;
/* służy do zamiany nazwy akcji na dłuższy identyfikator, 
składający się z trzech członów */

/* ${ } - literał szablonowy - tekst, który zawiera zmienne */
// 'app/' + reducerName + '/' + name - zapis równoważny


// action types
/* definiujemy typy akcji, które będziemy 
wykorzystywać w operacjach na kolumnach */

export const ADD_CARD = createActionName('ADD_CARD');
/* Definiujemy nazwę akcji, wykorzystując funkcję createActionName. 
Dzięki niej nazwa akcji zapisana w stałej ADD_CARD przyjmie wartość 
'app/columns/ADD_CARD' */

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });
/*  funkcja, który stworzy akcję. Akcja to obiekt, który zawiera dwa parametry:
- type określający typ akcji (jeden ze zdefiniowanych w poprzedniej sekcji)
- payload, w którym znajdą się wszystkie dane niezbędne do wykonania tej akcji */

// 
// 
// 
// 

// reducer
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    /* switch, które działa podobnie do if..else if...else.
    Sprawdzamy w nim typ akcji */

    case ADD_CARD:
      /* jeśli nie będzie pasował do żadnego z wyrażeń po case */

      return [...statePart, action.payload];
      /* zwróci nową tablicę, w której znajdzie się 
      rozpakowany dotychczasowy stan, oraz dodany nowy obiekt */

      /* w tym obiekcie rozpakowany zostanie payload akcji
      oraz stworzone zostanie id karty */

    default:
      /* wykona się blok kodu rozpoczynający się od default,
      czyli zwrócony zostanie argument statePart */

      return statePart;
    /* Dzięki domyślnym wartościom argumentów oraz 
    domyślnemu zwróceniu argumentu statePart, 
    spełniliśmy pierwszą zasadę */
  }
}