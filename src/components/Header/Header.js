import React from 'react';
import {
  NavLink,
  Link,
} from 'react-router-dom';
import Icon from '../Column/Icon';
import Container from '../Container/Container';
import styles from './Header.scss';
import {
  settings, 
  infoSubPage,
  faqSubPage,
  homePage,
} from '../../data/dataStore';


class Header extends React.Component {

  render() {
    const {icon} = settings.headerIcon;

    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={icon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{homePage.homePageNavText}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{infoSubPage.infoNavText}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{faqSubPage.faqNavText}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;