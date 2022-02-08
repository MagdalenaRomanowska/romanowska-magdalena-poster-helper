import React, { useRef, useState, useEffect } from 'react';
import styles from './Markers.module.scss';

const Markers = () => {
  const wallPhotoWidth = 200;
  const wallPhotoHeight = 160;
  const startGreenPositionX = 0;
  const startGreenPositionY = 0;
  const startRedPositionX = 1;
  const startRedPositionY = 0;
  const startBluePositionX = 0;
  const startBluePositionY = 1;
  const [pressedGreen, setPressedGreen] = useState(false);
  const [pressedRed, setPressedRed] = useState(false);
  const [pressedBlue, setPressedBlue] = useState(false);
  const [positionGreen, setPositionGreen] = useState({
    xGreen: startGreenPositionX,
    yGreen: startGreenPositionY,
  });
  const [positionRed, setPositionRed] = useState({
    xRed: startRedPositionX,
    yRed: startRedPositionY,
  });
  const [positionBlue, setPositionBlue] = useState({
    xBlue: startBluePositionX,
    yBlue: startBluePositionY,
  });
  const refGreen = useRef();
  const refRed = useRef();
  const refBlue = useRef();

  ///////  GREEN  /////////////////////////////////////////////
  useEffect(() => {
    if (refGreen.current) {
      refGreen.current.style.transform = `translate(${
        positionGreen.xGreen * wallPhotoWidth
      }px, ${positionGreen.yGreen * wallPhotoHeight}px)`;
    }
  }, [positionGreen]);

  useEffect(() => {
    setPositionGreen({
      xGreen: positionGreen.xGreen,
      yGreen: positionGreen.yGreen,
    });
  }, [wallPhotoWidth, wallPhotoHeight]);

  const onMouseMoveGreen = (event) => {
    if (pressedGreen) {
      setPositionGreen({
        xGreen: positionGreen.xGreen + event.movementX / wallPhotoWidth,
        yGreen: positionGreen.yGreen + event.movementY / wallPhotoHeight,
      });      
      // props.sendChangedMarkerPositionX({
      //   orderChangePositionX: positionGreen.xGreen,
      //   compositionId: props.compositionId,
      //   wallPhotoId: props.wallPhoto._id
      // });
    }
  };

  ///////  RED  /////////////////////////////////////////////
  useEffect(() => {
    if (refRed.current) {
      refRed.current.style.transform = `translate(${
        positionRed.xRed * wallPhotoWidth
      }px, ${positionRed.yRed * wallPhotoHeight}px)`;
    }
  }, [positionRed]);

  useEffect(() => {
    setPositionRed({
      xRed: positionRed.xRed,
      yRed: positionRed.yRed,
    });
  }, [wallPhotoWidth, wallPhotoHeight]);

  const onMouseMoveRed = (event) => {
    if (pressedRed) {
      setPositionRed({
        xRed: positionRed.xRed + event.movementX / wallPhotoWidth,
        yRed: positionRed.yRed + event.movementY / wallPhotoHeight,
      });
    }
  };

  ///////  BLUE  /////////////////////////////////////////////
  useEffect(() => {
    if (refBlue.current) {
      refBlue.current.style.transform = `translate(${
        positionBlue.xBlue * wallPhotoWidth
      }px, ${positionBlue.yBlue * wallPhotoHeight}px)`;
    }
  }, [positionBlue]);

  useEffect(() => {
    setPositionBlue({
      xBlue: positionBlue.xBlue,
      yBlue: positionBlue.yBlue,
    });
  }, [wallPhotoWidth, wallPhotoHeight]);

  const onMouseMoveBlue = (event) => {
    if (pressedBlue) {
      setPositionBlue({
        xBlue: positionBlue.xBlue + event.movementX / wallPhotoWidth,
        yBlue: positionBlue.yBlue + event.movementY / wallPhotoHeight,
      });
    }
  };

  return (
    <div>
      <div className={styles.markers}>
        <div className={styles.red}>
          <object
            ref={refRed}
            className={styles.markerRed}
            width={28}
            height={28}
            onMouseMove={onMouseMoveRed}
            onMouseDown={() => setPressedRed(true)}
            onMouseUp={() => setPressedRed(false)}
          >
            <div className={styles.innerMarker}>
              <div className={styles.whiteSpot}></div>
              <p className={styles.textInsideMarker}>
                {pressedRed ? 'Drop' : 'Drag'}
              </p>
            </div>
          </object>
        </div>
        <div className={styles.blue}>
          <object
            ref={refBlue}
            className={styles.markerBlue}
            width={28}
            height={28}
            onMouseMove={onMouseMoveBlue}
            onMouseDown={() => setPressedBlue(true)}
            onMouseUp={() => setPressedBlue(false)}
          >
            <div className={styles.innerMarker}>
              <div className={styles.whiteSpot}></div>
              <p className={styles.textInsideMarker}>
                {pressedBlue ? 'Drop' : 'Drag'}
              </p>
            </div>
          </object>
        </div>
        <div className={styles.green}>
          <object
            ref={refGreen}
            className={styles.markerGreen}
            width={28}
            height={28}
            onMouseMove={onMouseMoveGreen}
            onMouseDown={() => setPressedGreen(true)}
            onMouseUp={() => setPressedGreen(false)}
          >
            <div className={styles.innerMarker}>
              <div className={styles.whiteSpot}></div>
              <p className={styles.textInsideMarker}>
                {pressedGreen ? 'Drop' : 'Drag'}
              </p>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};

export default Markers;
