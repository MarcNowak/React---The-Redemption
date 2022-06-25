import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {
  infoSubPage, 
  listData, 
} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleImage={listData.image}/>
    <h2>{infoSubPage.infoNavText}</h2>
    <p>{infoSubPage.infoContent}</p>
  </Container>
);

export default Info;