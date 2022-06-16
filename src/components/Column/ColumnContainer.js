import { connect } from 'react-redux';
import Column from './Column';
// importujemy komponent, dla którego jest kontenerem – w tym wypadku Column

import {
  getCardsForColumn,
  createActionAddCard,
}
  from '../../redux/cardsRedux';

// export const getCardsForColumn = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  /* w stałej mapStateToProps zapisujemy funkcję, 
  która definiuje powiązanie propsów ze stanem */

  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  /* dodaje propsy komponentu – jednak ich wartościami nie są dane ze stanu,
  ale funkcje wysyłające akcje do magazynu. Po angielsku wysłanie można przetłumaczyć 
  jako dispatch, i właśnie stąd bierzemy nazwę funkcji,
  której zadaniem jest wysyłanie akcji – dispatcher. */

  /* mapDispatchToProps to funkcja, która nadaje komponentowi propsy, 
  w których znajdą się funkcje wysyłające akcje do magazynu. 
  Pamiętaj, że akcja jest zgłoszeniem chęci zmiany stanu aplikacji.  */

  addCard: title => dispatch(createActionAddCard({
    /* props addColumn będzie zawierał funkcję, przyjmującą jeden argument – title */
    /* Na podstawie tego argumentu zostanie wykonana funkcja dispatch 
    (która jest argumentem funkcji mapDispatchToProps), wysyłająca akcję do magazynu. */

    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);