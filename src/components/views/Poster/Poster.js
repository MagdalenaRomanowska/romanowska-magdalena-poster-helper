import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Poster.module.scss';

export default function Poster(props) {
  const canvasRef = useRef();
  const [context, setContext] = useState(null);
  const wallPhotoWidth = 400;
  const wallPhotoHeight = 160;
  const startPositionX = 0;
  const startPositionY = 0;
  // const { posterParameters, parameters, chosenPosterID } = props;
  const { posterParameters } = props;
  // const parameter = parameters.filter((e) => e.id === chosenPosterID)[0];
  const [pressed, setPressed] = useState(false);

  // useEffect(() => {
  // setContext(canvasRef.current.getContext('2d'));
  // updateCanvas();
  // });

  // useEffect(() => {
  //   if (canvasRef.current) {
  //     canvasRef.current.style.transform = `translate(${
  //       position.x * wallPhotoWidth
  //     }px, ${position.y * wallPhotoHeight}px)`;
  //   }
  // }, [position]);

  // useEffect(() => {
  //   setPosition({
  //     x: position.x,
  //     y: position.y,
  //   });
  // }, [wallPhotoWidth, wallPhotoHeight]);

  // function updateCanvas() {
  //   if (context === null) {
  //     return;
  //   } else {
  //     parameters.forEach((parameter) => {
  //       drawPoster(
  //         parameter.xPosition,
  //         parameter.yPosition,
  //         parameter.posterWidth,
  //         parameter.posterHeight
  //       );
  //     });
  //   }
  // }

  // function drawPoster(xPosition, yPosition, posterWidth, posterHeight) {
  //   context.beginPath();
  //   const img = new Image();
  //   img.src = 'https://i.postimg.cc/bY9GYRBK/fioletowe-jasniejsze-blue2.jpg';
  //   context.drawImage(img, xPosition, yPosition, posterWidth, posterHeight);
  //   context.stroke();
  // }

  const onMouseMove = (event) => {
    if (pressed) {
      props.setXPosition(posterParameters.id, posterParameters.xPosition + event.movementX);
      props.setYPosition(posterParameters.id, posterParameters.yPosition + event.movementY);
      // setPosition({
      //   x: position.x + event.movementX / wallPhotoWidth,
      //   y: position.y + event.movementY / wallPhotoHeight,
      // });
    }
  };

  const _onChangeChosenPosterID = (chosenPosterID, ClickX, ClickY) => {
    props.setChosenPosterID(chosenPosterID);
    props.setStartPosterPositionX(posterParameters.xPosition);
    props.setStartPosterPositionY(posterParameters.yPosition);
    props.setStartClickPositionX(ClickX);
    props.setStartClickPositionY(ClickY);
    // props.setStartChosenPosterPositionX(posterParameters.xStartPosition);
    // console.log('posterParameters.xStartPosition in Poster.js ' + posterParameters.xStartPosition);
  };

  const handleClick = (event) => {
    _onChangeChosenPosterID(event.target.getAttribute('data-key'), event.clientX, event.clientY);
    console.log('event.clientX ', event.clientX, '/ event.clientY ', event.clientY);
  };

  // onMouseDown - ustawiamy w storze wartość markedPoster na id naszego. 
  return (
    <div className={styles.root}
      style={{
        position: 'absolute',
        left: posterParameters.xPosition,
        top: posterParameters.yPosition,
        backgroundColor: 'red',
      }}      
      // onMouseMove={onMouseMove}
      // onMouseDown={() => setPressed(true)}
      // onMouseUp={() => setPressed(false)}
      // onMouseDown={() => setPressed(!pressed)}
      // onMouseUp={() => setPressed(pressed)}
      // tabIndex="0"
    >
      <img
        src='https://i.postimg.cc/cChyYPNt/fioletowe-jasniejsze.jpg'
        width='100'
        height='100'
        alt='koko'
        data-key={posterParameters.id}
        onClick={handleClick}
      />
      {/* <canvas
        style={{
          left: posterParameters.yPosition,
          top: posterParameters.xPosition,
          backgroundColor: 'red',
        }}
        ref={canvasRef}
        key={posterParameters.id}
        // src={'https://i.postimg.cc/cChyYPNt/fioletowe-jasniejsze.jpg'}
        width='100' //{posterParameters.posterWidth} //{window.innerWidth / 2}
        height='120' //{posterParameters.posterHeight} //{Math.floor(window.innerHeight * 0.68)}
        onMouseMove={onMouseMove}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      ></canvas> */}
    </div>
  );
}

Poster.propTypes = {
  // parameters: PropTypes.any,
  // xPosition: PropTypes.any,
  // yPosition: PropTypes.any,
  // posterWidth: PropTypes.any,
  // posterHeight: PropTypes.any,
  chosenPosterID: PropTypes.any,
  // id: PropTypes.any,
  posterParameters: PropTypes.any,
  setStartChosenPosterPositionX: PropTypes.any,
  setXPosition: PropTypes.func,
  setYPosition: PropTypes.func,
  setChosenPosterID: PropTypes.func,
  setStartPosterPositionX: PropTypes.func,
  setStartPosterPositionY: PropTypes.func,
  setStartClickPositionX: PropTypes.func,
  setStartClickPositionY: PropTypes.func,
  // setPosterWidth: PropTypes.func,
  // setPosterHeight: PropTypes.func,
};
