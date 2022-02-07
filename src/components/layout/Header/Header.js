import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ className }) => (
  <div className={styles.root}>
    <div className={styles.main}>
      <div className={styles.title}>spirograph</div>      
    </div>
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Header;
