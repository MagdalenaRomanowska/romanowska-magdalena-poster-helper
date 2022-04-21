import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import styles from './DropZone.module.scss';

export default function DropZone(props) {
  const { setGlobalScaleByProjectName, setSelectedBackgroundWallNameByProjectName, setPosters, 
    selectedBackgroundWallNameByProjectName, setGlobalScale, setSelectedBackgroundWallName } = props;

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const binaryStr = reader.result;
        const upload = JSON.parse(binaryStr);
        console.log('upload : ', upload);        
        // setGlobalScaleByProjectName(upload.globalScales.scale, upload.selectedProjectName);
        // setSelectedBackgroundWallNameByProjectName(selectedBackgroundWallNameByProjectName, upload.selectedProjectName);
        // setPosters(upload.posters);
        setGlobalScale(4);
        setSelectedBackgroundWallName('project02');
        setPosters(upload.posters);
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
          To upload your own project <br></br> drag and drop a file here <br></br>or
          click to select
        </p>
      </div>      
    </>
  );
}

DropZone.propTypes = {
  setGlobalScaleByProjectName: PropTypes.func,
  setSelectedBackgroundWallNameByProjectName: PropTypes.func,
  setPosters: PropTypes.func,
  selectedBackgroundWallNameByProjectName: PropTypes.any,
  setGlobalScale: PropTypes.any,
  setSelectedBackgroundWallName: PropTypes.any,
};
