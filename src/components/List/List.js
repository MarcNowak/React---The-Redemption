import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

import { settings } from '../../data/dataStore';

class List extends React.Component {

  /*   state = {
      columns: this.props.columns || [],
    }; */

  static propTypes = {
    /* static, które oznacza, że będziemy definiować statyczną właściwość tej klasy. 
    Oznacza to, że obiekt propTypes nie będzie dostępny jako this.propTypes dla każdej instancji. 
    Będzie za to zapisany jako List.propTypes, czyli właściwość samej klasy, a nie instancji. */

    /* Właściwość, w której zapisujemy wspomniane definicje, musi nazywać się propTypes.
    W tej właściwości zapisujemy obiekt, w którym kluczami są 
    nazwy właściwości komponentów, które mogą być do niego przekazywane. */

    title: PropTypes.node.isRequired,
    // children: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
    /* Dla każdej nazwy właściwości podajemy jej typ, 
    wykorzystując typy zapisane w zaimportowanym obiekcie PropTypes */

  };

  static defaultProps = {
    /* kiedy nie zostanie podana żadna zawartość opisu listy, wstawiamy domyślny opis */
    // children: <p>I can do all the things!!!</p>,
    description: settings.defaultListDescription,
  };

  /* addColumn zmienia stan komponentu za pomocą metody setState*/
  /*   addColumn(title) {
      this.setState(state => (
        {
          columns: [
            ...state.columns,
            {
              key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
              title,
              icon: 'list-alt',
              cards: [],
            },
          ],
        }
      ));
    } */

  render() {
    const { title, image, description, columns, addColumn } = this.props;
    return (
      <section className={styles.component}>
        <Hero
          titleText={title}
          /* titletext - to właściwość / props  
          przekazywana do komponentu funkcyjnego Hero */

          titleImage={image}
        /> {/* tu będzie wyświetlana zawartość komponentu Hero */}

        <div className={styles.description}>
          {/* {this.props.children} */}
          {ReactHtmlParser(description)}
          {/* zawartość znajdująca się między tagami komponentu (np. List), 
          jest przekazywana jako props ze szczególną właściwością children) */}
        </div>
        
        <div className={styles.columns}>
          {/* {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))} */}
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText} action={addColumn} />
        </div>
       
      </section>
    );
  }
}

export default List;