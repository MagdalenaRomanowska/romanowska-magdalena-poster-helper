import React from 'react';
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
  
  function deleteAll() {
    console.log('delete All Posters');  
    removeAllPosters();
  }
    
  function uploadProject() {
    console.log('upload');  
    let jsonStr = '{"name":"ABC", "age":10 }';
    // setEverything(newProject);
  }
  

  return (
    <div className={styles.root}>
      <button className={styles.buttonUploadProject} onClick={() => uploadProject}>Upload Project</button>
      <button className={styles.buttonSaveProject} onClick={() => saveThisProject('Saved Project', JSON.stringify(everything))}>Save This Project</button>
      <button className={styles.buttonSaveProject} onClick={() => deleteAll()}>Delete All Posters</button>
    </div>
  );
}

ButtonSaveProject.propTypes = {
  everything: PropTypes.any,
  removeAllPosters: PropTypes.func,
  // setEverything: PropTypes.func,
};
