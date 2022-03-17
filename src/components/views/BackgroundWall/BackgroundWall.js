import React from 'react';
import PropTypes from 'prop-types';
import styles from './BackgroundWall.module.scss';

export default function BackgroundWall(props) {
  const { backgroundWallURL } = props;

  return (
    <div className={styles.root}>
      <img
        width={window.innerWidth / 1.471}
        height={Math.floor(window.innerHeight * 0.68)}
        alt={'background wall'}
        src={backgroundWallURL}
      ></img>
    </div>
  );
}

BackgroundWall.propTypes = {
  backgroundWallURL: PropTypes.any,
};
