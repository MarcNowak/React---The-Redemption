import { connect } from 'react-redux';
import Column from './Column';
// importujemy komponent, dla którego jest kontenerem – w tym wypadku Column

export const getCardsForColumn = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  /* w stałej mapStateToProps zapisujemy funkcję, 
  która definiuje powiązanie propsów ze stanem */

  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);