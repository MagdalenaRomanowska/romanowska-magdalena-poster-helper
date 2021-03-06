import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './Buttons.module.scss';

export default function Buttons(props) {
  const { everything, removeAllPosters, addPoster, selectedProjectName } = props;

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
    removeAllPosters(selectedProjectName);
  }

  return (
    <div className={styles.root}>
      <button
        className={styles.buttonSaveProject}
        onClick={() =>
          saveThisProject('Saved Project', JSON.stringify(everything))
        }
      >
        Save This Project
      </button>
      <button
        className={styles.buttonSaveProject}
        onClick={() => deleteAllPosters(everything)}
      >
        Delete All Posters
      </button>
      <button
        className={styles.buttonAddPoster}
        onClick={(event) =>
          addPoster({
            id: uuidv4(),
            projectName: selectedProjectName,
            xPosterPosition: 220,
            yPosterPosition: 220,
            pictureName: 'Saturn',
            posterDimensionsName: '18x12',
          })
        }
      >
        Add Poster
      </button>
    </div>
  );
}

Buttons.propTypes = {
  everything: PropTypes.any,
  removeAllPosters: PropTypes.func,
  addPoster: PropTypes.any,
  selectedProjectName: PropTypes.any,
};
