import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import styles from './DropZone.module.scss';

export default function DropZone(props) {
  const {
    setPosters,
    setPictures,
    setBackgroundWalls,
    setGlobalScales,
    setProjectNames,
    setPosterDimensions,
    setSelectedBackgroundWallNames,
    setDefaultSelectedProjectName,
  } = props;
  
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const binaryStr = reader.result;
        const upload = JSON.parse(binaryStr);
        setPosters(upload.posters);
        setPictures(upload.pictures);
        setBackgroundWalls(upload.backgroundWalls);
        setGlobalScales(upload.globalScales);
        setProjectNames(upload.projectNames);
        setPosterDimensions(upload.posterDimensions);
        setSelectedBackgroundWallNames(upload.selectedBackgroundWallNames);
        setDefaultSelectedProjectName(upload.selectedProjectName);
      };
      reader.readAsText(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className={styles.dragAndDrop}>
          To upload your own project <br></br> drag and drop a file here{' '}
          <br></br>or click to select
        </p>
      </div>
    </>
  );
}

DropZone.propTypes = {
  setPosters: PropTypes.func,
  setPictures: PropTypes.func,
  setBackgroundWalls: PropTypes.func,
  setGlobalScales: PropTypes.func,
  setProjectNames: PropTypes.func,
  setPosterDimensions: PropTypes.func,
  setSelectedBackgroundWallNames: PropTypes.func,
  setDefaultSelectedProjectName: PropTypes.any,
};
