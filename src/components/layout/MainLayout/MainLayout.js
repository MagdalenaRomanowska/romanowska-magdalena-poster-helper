import React from 'react';
import PropTypes from 'prop-types';
// import Header from '../Header/Header';
import Canva from '../../views/Canva/CanvaContainer';
import styles from './MainLayout.module.scss';

const Component = ({children}) => (
  <div className={styles.root}>
    {/* <Header /> */}
    <Canva />    
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainLayout, 
  Component as MainLayoutComponent, 
};
