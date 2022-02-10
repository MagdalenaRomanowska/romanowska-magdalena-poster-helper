import React from 'react';
import PropTypes from 'prop-types';
import BackgroundWall from '../BackgroundWall/BackgroundWall';
import Poster from '../Poster/PosterContainer.js';
import ButtonAddPoster from '../../features/ButtonAddPoster/ButtonAddPosterContainer.js';
import ListOfPosters from '../../features/ListOfPosters/ListOfPostersContainer.js';
import styles from './Canva.module.scss';

const Canva = (props) => (
  <div className={styles.canva}>
    <div className={styles.listAndPoster}>
      <div className={styles.list}>
        <ButtonAddPoster />
        <ListOfPosters />
      </div>
      <div>
        <div className={styles.backgroundWall}>
          <BackgroundWall />          
        </div>
        <div className={styles.poster}>
          <Poster
            xPosition={props.parameters[0].xPosition}
            yPosition={props.parameters[0].yPosition}
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
