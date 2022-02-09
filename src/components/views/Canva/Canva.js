import React from 'react';
import PropTypes from 'prop-types';
import BackgroundWall from '../BackgroundWall/BackgroundWallContainer';
import Poster from '../Poster/PosterContainer.js';
import ButtonAddPoster from '../../features/ButtonAddPoster/ButtonAddPosterContainer.js';
import ListOfSpirographs from '../../features/ListOfSpirographs/ListOfSpirographsContainer.js';
import styles from './Canva.module.scss';

const Canva = (props) => (
  <div className={styles.canva}>
    <div className={styles.listAndSpirograph}>
      <div className={styles.list}>
        <ButtonAddPoster />
        <ListOfSpirographs />
      </div>
      <div>
        <div className={styles.backgroundWall}>
          <BackgroundWall />          
        </div>
        <div className={styles.poster}>
          <Poster
            xW1={props.parameters[0].xW1}
            yW1={props.parameters[0].yW1}
          />
        </div>
      </div>      
    </div>
  </div>
);

Canva.propTypes = {
  className: PropTypes.string,
  parameters: PropTypes.any,
};

export default Canva;
