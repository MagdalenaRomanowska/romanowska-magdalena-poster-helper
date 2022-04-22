import React from 'react';
import PropTypes from 'prop-types';
import styles from './BackgroundWall.module.scss';

export default function BackgroundWall(props) {
  const {
    backgroundWallURL,
    posterParameters,
    setChosenPosterID,
    setStartPosterPositionX,
    setStartPosterPositionY,
    setStartClickPositionX,
    setStartClickPositionY,
  } = props;

  const _onChangeChosenPosterID = (chosenPosterID, ClickX, ClickY) => {
    setChosenPosterID(chosenPosterID);
    setStartPosterPositionX(posterParameters.xPosterPosition);
    setStartPosterPositionY(posterParameters.yPosterPosition);
    setStartClickPositionX(ClickX);
    setStartClickPositionY(ClickY);
  };

  const handleClickPoster = (event) => {
    _onChangeChosenPosterID(0, event.clientX, event.clientY);
  };

  return (
    <div className={styles.root}>
      <img
        width={window.innerWidth / 1.8}
        height={Math.floor(window.innerHeight * 0.68)}
        alt={'background wall'}
        src={backgroundWallURL}
        onClick={(e) =>
          handleClickPoster(
            e,
            posterParameters.id,
            posterParameters.pictureName
          )
        }
      ></img>
    </div>
  );
}

BackgroundWall.propTypes = {
  backgroundWallURL: PropTypes.any,
  setChosenPosterID: PropTypes.any,
  setStartPosterPositionX: PropTypes.any,
  setStartPosterPositionY: PropTypes.any,
  setStartClickPositionX: PropTypes.any,
  setStartClickPositionY: PropTypes.any,
  posterParameters: PropTypes.any,
};
