import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = (props) => (
  /* W wypadku komponentu funkcyjnego propsy będą przekazane 
  jako argument funkcji. W związku z tym musimy dodać 
  deklarację argumentu props */

  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    {/* wykorzystujemy props / właściwość titleText*/}
    
    <img className={styles.image} src={props.titleImage} />
  </header>

);

Hero.propTypes = {
  titleText: PropTypes.node,
  titleImage: PropTypes.string,
};

export default Hero;