import React, { useRef, useState, useEffect } from 'react';
import styles from './Markers.module.scss';

const Markers = () => {
  const wallPhotoWidth = 200;
  const wallPhotoHeight = 160;
  const startGreenPositionX = 0;
  const startGreenPositionY = 0;
  const [pressedGreen, setPressedGreen] = useState(false);
  const [positionGreen, setPositionGreen] = useState({
    xGreen: startGreenPositionX,
    yGreen: startGreenPositionY,
  });
  
  const refGreen = useRef();

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
    }
  };

  return (
    <div>
      <div className={styles.markers}>        
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
          </object>
        </div>
      </div>
    </div>
  );
};

export default Markers;
