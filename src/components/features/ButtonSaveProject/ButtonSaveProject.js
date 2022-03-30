import React from 'react';
import DropZone from '../DropZone/DropZoneContainer';
import PropTypes from 'prop-types';
import styles from './ButtonSaveProject.module.scss';

export default function ButtonSaveProject(props) {

  const { everything, removeAllPosters, setGlobalScale, setSelectedBackgroundWallName, setPosters } = props;

  function saveThisProject(filename, data) {
    const blob = new Blob([data], { type: 'text/csv' });
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const elem = window.document.createElement('a');
      elem.href = window.URL.createObjectURL(blob);
      elem.download = filename;
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
    }  
  }
  
  function deleteAllPosters() { 
    removeAllPosters();
  }

  const upload = JSON.parse('{"posters":[{"id":"a4277c06-b07c-4192-953c-287772e49024","posterName":"a4277","xPosterPosition":220,"yPosterPosition":220,"pictureName":"Saturn","posterDimensionsName":"18x12"},{"id":"f60fb912-04ec-4360-a92a-826aabfe5c6f","posterName":"f60fb","xPosterPosition":220,"yPosterPosition":220,"pictureName":"Saturn","posterDimensionsName":"18x12"},{"id":"8b762b73-b2cb-4dd3-8a41-ae7c4d5305f4","posterName":"8b762","xPosterPosition":100,"yPosterPosition":50,"pictureName":"Saturn","posterDimensionsName":"18x12"}],"chosenPoster":{"id":"8b762b73-b2cb-4dd3-8a41-ae7c4d5305f4","startPosterPositionX":100,"startPosterPositionY":50,"startClickPositionX":428,"startClickPositionY":210},"pictures":[{"pictureName":"Saturn","url":"/images/Saturn.jpg"},{"pictureName":"Jupiter","url":"/images/Jupiter.jpg"},{"pictureName":"Mars","url":"/images/Mars.jpg"},{"pictureName":"Space01","url":"/images/Space01.jpg"},{"pictureName":"Space02","url":"/images/Space02.jpg"},{"pictureName":"Space03","url":"/images/Space03.jpg"},{"pictureName":"Venus","url":"/images/Venus.jpg"},{"pictureName":"kosmos01","url":"/images/kosmos01.jpg"},{"pictureName":"kosmos02","url":"/images/kosmos02.jpg"},{"pictureName":"kosmos03","url":"/images/kosmos03.jpg"},{"pictureName":"blackhole","url":"/images/blackhole.jpg"},{"pictureName":"blackholeNASA","url":"/images/blackholeNASA.jpg"}],"backgroundWalls":[{"backgroundWallName":"backgroundWall01","url":"/images/backgroundWall01.png"},{"backgroundWallName":"backgroundWall02","url":"/images/backgroundWall02.png"},{"backgroundWallName":"backgroundWall03","url":"/images/backgroundWall03.jpg"},{"backgroundWallName":"backgroundWall04","url":"/images/backgroundWall04.png"},{"backgroundWallName":"backgroundWall05","url":"/images/backgroundWall05.jpg"}],"selectedBackgroundWallName":"backgroundWall01","posterDimensions":[{"posterDimensionsName":"18x12","w":18,"h":12},{"posterDimensionsName":"20x16","w":20,"h":16},{"posterDimensionsName":"08x11","w":8,"h":11}],"globalScale":"6","everything":[],"_persist":{"version":-1,"rehydrated":true}}');  

  function uploadProject() {
    setGlobalScale(upload.globalScale);
    setSelectedBackgroundWallName(upload.selectedBackgroundWallName);
    setPosters(upload.posters);
  }
  

  return (
    <div className={styles.root}>
      <DropZone />
      <button className={styles.buttonUploadProject} onClick={() => uploadProject()}>Upload My Project</button>
      <button className={styles.buttonSaveProject} onClick={() => saveThisProject('Saved Project', JSON.stringify(everything))}>Save This Project</button>
      <button className={styles.buttonSaveProject} onClick={() => deleteAllPosters(everything)}>Delete All Posters</button>
    </div>
  );
}

ButtonSaveProject.propTypes = {
  everything: PropTypes.any,
  removeAllPosters: PropTypes.func,
  setGlobalScale: PropTypes.func,
  setSelectedBackgroundWallName: PropTypes.func,
  setPosters: PropTypes.func,
};
