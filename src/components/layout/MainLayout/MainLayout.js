import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../views/Layout/LayoutContainer';
import styles from './MainLayout.module.scss';

const Component = ({children}) => (
  <div className={styles.root}>
    <div className={styles.description}>click chosen poster and press any key to move it</div>
    <Layout />    
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
