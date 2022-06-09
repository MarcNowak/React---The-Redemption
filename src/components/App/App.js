import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import {
  pageContents,
  listData,
} from '../../data/dataStore';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} /> {/* tu będzie wyświetlona zawartość komponentu List */}

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

export default App;
