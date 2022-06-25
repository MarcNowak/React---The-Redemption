import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {
  faqSubPage, 
  listData, 
} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleImage={listData.image}/>
    <h2>{faqSubPage.faqNavText}</h2>
    <p>{faqSubPage.faqContent}</p>
  </Container>
);

export default Faq;