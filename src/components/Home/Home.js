import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  };

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />

        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        {/* <List {...listData} /> */} {/* tu będzie wyświetlona zawartość komponentu List */}

        {/* <List
          title={listData.title}
          description={listData.description}
          image={listData.image}
          columns={listData.columns}
        /> */}
        {/* zapis bez spread operatora {...listData} */}


        {/* title - jest propsem przekazywanym 
          do komponentu klasowego List */}
        {/* zawartość znajdująca się między tagami komponentu (np. List), 
          jest przekazywana jako props ze szczególną właściwością children) */}
      </main>
    );
  }
}

export default Home;

