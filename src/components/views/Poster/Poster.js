import React from 'react';
import PropTypes from 'prop-types';
import styles from './Poster.module.scss';

export default function Poster(props) {
  const {
    pictureURL,
    posterParameters,
    setChosenPosterID,
    setStartPosterPositionX,
    setStartPosterPositionY,
    setStartClickPositionX,
    setStartClickPositionY,
    posterWidth,
    posterHeight,
    globalScaleByProjectName,
    removePoster,
    selectedProjectName,
  } = props;

  const _onChangeChosenPosterID = (chosenPosterID, ClickX, ClickY) => {
    setChosenPosterID(chosenPosterID, selectedProjectName);
    setStartPosterPositionX(posterParameters.xPosterPosition);
    setStartPosterPositionY(posterParameters.yPosterPosition);
    setStartClickPositionX(ClickX);
    setStartClickPositionY(ClickY);
  };

  const handleClick = (event) => {
    _onChangeChosenPosterID(
      event.target.getAttribute('data-key'),
      event.clientX,
      event.clientY
    );
  };

  const _onChangeRemovePoster = (chosenPosterID) => {
    removePoster(chosenPosterID);
  };

  const handleClickRemovePoster = (event) => {
    _onChangeRemovePoster(event.target.getAttribute('data-key'));
  };
   
  let scale = globalScaleByProjectName;
  const el = document.getElementById('poster');

  const onChangeScale = (event) => {
    scale += event.deltaY * -0.005;
    scale = Math.min(Math.max(1, scale), 5);
    el.style.transform = `scale(${scale})`;
    props.setGlobalScaleByProjectName(scale, selectedProjectName);
  };

  return (
    <div
      className={styles.root}
      id={'poster'}
      style={{
        position: 'absolute',
        left: posterParameters.xPosterPosition,
        top: posterParameters.yPosterPosition,
        transform: 'rotate(' + posterParameters.angle + 'deg)',
        transform: 'scale(' + scale + ')',
      }}
    >
      <img
        className={styles.image}
        src={pictureURL}
        width={posterWidth * globalScaleByProjectName}
        height={posterHeight * globalScaleByProjectName}
        alt='poster'        
        data-key={posterParameters.id}
        onClick={handleClick}
        onWheel = {(e) => onChangeScale(e)}
      />
      <div
        className={styles.deleteImage}
        data-key={posterParameters.id}
        onClick={handleClickRemovePoster}
      >
        X 
      </div>
    </div>
  );
}

Poster.propTypes = {
  posterParameters: PropTypes.any,
  setChosenPosterID: PropTypes.func,
  setStartPosterPositionX: PropTypes.func,
  setStartPosterPositionY: PropTypes.func,
  setStartClickPositionX: PropTypes.func,
  setStartClickPositionY: PropTypes.func,
  pictureURL: PropTypes.any,
  posterWidth: PropTypes.any,
  posterHeight: PropTypes.any,
  globalScaleByProjectName: PropTypes.any,
  removePoster: PropTypes.func,
  selectedProjectName: PropTypes.any,
  setGlobalScaleByProjectName: PropTypes.func,
};
