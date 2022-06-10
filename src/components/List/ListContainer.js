import { connect } from 'react-redux';
import List from './List';
// importujemy komponent, dla którego jest kontenerem – w tym wypadku List

export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => ({
  /* w stałej mapStateToProps zapisujemy funkcję, 
  która definiuje powiązanie propsów ze stanem */

  columns: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps)(List);
/* w ostatniej parze nawiasów musimy podać komponent,
który jest wykorzystywany w tym kontenerze */