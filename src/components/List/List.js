import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    /* static, które oznacza, że będziemy definiować statyczną właściwość tej klasy. 
    Oznacza to, że obiekt propTypes nie będzie dostępny jako this.propTypes dla każdej instancji. 
    Będzie za to zapisany jako List.propTypes, czyli właściwość samej klasy, a nie instancji. */

    /* Właściwość, w której zapisujemy wspomniane definicje, musi nazywać się propTypes.
    W tej właściwości zapisujemy obiekt, w którym kluczami są 
    nazwy właściwości komponentów, które mogą być do niego przekazywane. */

    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    /* Dla każdej nazwy właściwości podajemy jej typ, 
    wykorzystując typy zapisane w zaimportowanym obiekcie PropTypes */

  }

  static defaultProps = {
    /* kiedy nie zostanie podana żadna zawartość opisu listy, wstawiamy domyślny opis */
    children: <p>I can do all the things!!!</p>,
  }
  render () {
    return (
      <section className={styles.component}>
        <Hero 
        titleText={this.props.title}
        /* titletext - to właściwość / props  
        przekazywana do komponentu funkcyjnego Hero */

        titleImage={this.props.image} 
        /> {/* tu będzie wyświetlana zawartość komponentu Hero */}
        
        <div className={styles.description}>
          {this.props.children}
          {/* zawartość znajdująca się między tagami komponentu (np. List), 
          jest przekazywana jako props ze szczególną właściwością children) */}
        </div>

        <div className={styles.columns}>
          <Column title='Animals' />
          <Column title='Plants' />
          <Column title='Minerals' />
          {/* title - właściwość / props przekazywana do komponentu Column */}

        </div>
      </section>
    )
  }
}

export default List;