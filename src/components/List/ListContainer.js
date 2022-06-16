import { connect } from 'react-redux';
import List from './List';
// importujemy komponent, dla którego jest kontenerem – w tym wypadku List

import { getColumnsForList } from '../../redux/columnsRedux';
import { createActionAddColumn } from '../../redux/columnsRedux';

// export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => ({
  /* w stałej mapStateToProps zapisujemy funkcję, 
  która definiuje powiązanie propsów ze stanem */

  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  /* dodaje propsy komponentu – jednak ich wartościami nie są dane ze stanu,
  ale funkcje wysyłające akcje do magazynu. Po angielsku wysłanie można przetłumaczyć 
  jako dispatch, i właśnie stąd bierzemy nazwę funkcji,
  której zadaniem jest wysyłanie akcji – dispatcher. */

  /* mapDispatchToProps to funkcja, która nadaje komponentowi propsy, 
  w których znajdą się funkcje wysyłające akcje do magazynu. 
  Pamiętaj, że akcja jest zgłoszeniem chęci zmiany stanu aplikacji.  */

  addColumn: title => dispatch(createActionAddColumn ({
    /* props addColumn będzie zawierał funkcję, przyjmującą jeden argument – title */
    /* Na podstawie tego argumentu zostanie wykonana funkcja dispatch 
    (która jest argumentem funkcji mapDispatchToProps), wysyłająca akcję do magazynu. */

    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
/* w ostatniej parze nawiasów musimy podać komponent,
który jest wykorzystywany w tym kontenerze */