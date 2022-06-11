import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import Icon from './Icon';

// import { settings } from '../../data/dataStore';

class Column extends React.Component {

  state = {
    cards: this.props.cards || [],
  };

  static propTypes = {
    title: PropTypes.node.isRequired,
    /* właściwosć / props zdefiniowana w komponencie List*/

    cards: PropTypes.array,
    icon: PropTypes.node,
  };

  /* addCard zmienia stan komponentu za pomocą metody this.setState*/
  // addCard(title) {
  //   this.setState(state => (
  //     {
  //       cards: [
  //         ...state.cards,
  //         {
  //           key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
  //           title,
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    // const { title, icon } = this.props;
    const { cards } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}><Icon name={this.props.icon} /></span>{this.props.title}
        </h3>
        {/* name - właściwość / props przekazywana do komponentu Icon */}
        <div className={styles.cards}>
          {/* {this.state.cards.map(({ key, ...cardProps }) => (
            <Card key={key} {...cardProps} />
          ))} */}
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/* <div className={styles.creator}>
          <Creator
            text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div> */}
      </section>
    );
  }
}

export default Column;