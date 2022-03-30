import React from 'react';
import DropZone from '../DropZone/DropZoneContainer';
import PropTypes from 'prop-types';
import styles from './ButtonSaveProject.module.scss';

export default function ButtonSaveProject(props) {

  const { everything, removeAllPosters } = props;

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

  return (
    <div className={styles.root}>
      <DropZone />
      <button className={styles.buttonSaveProject} onClick={() => saveThisProject('Saved Project', JSON.stringify(everything))}>Save This Project</button>
      <button className={styles.buttonSaveProject} onClick={() => deleteAllPosters(everything)}>Delete All Posters</button>
    </div>
  );
}

ButtonSaveProject.propTypes = {
  everything: PropTypes.any,
  removeAllPosters: PropTypes.func,
};
