import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import styles from './DropZone.module.scss';
// import { API_URL } from '../../../config';

const DropZone = (props) => {
  const [selectedFiles, setSelectedFiles] = useState([]); // selectedFiles has a type of array.
  const [setErrorMessage] = useState(''); // errorMessage has a type of string.
  const [validFiles, setValidFiles] = useState([]); // To remove duplicates from the selectedFiles array.
  const [unsupportedFiles, setUnsupportedFiles] = useState([]); // If the array length is zero, the button is displayed; otherwise, the button is hidden.

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles((prevArray) => [...prevArray, files[i]]); // add to an array so we can display the name of file
      } else {
        files[i]['invalid'] = true; // add a new property called invalid
        setSelectedFiles((prevArray) => [...prevArray, files[i]]); // add to the same array so we can display the name of the file
        setErrorMessage('File type not permitted'); // set error message
        setUnsupportedFiles((prevArray) => [...prevArray, files[i]]); // Each invalid file dropped by the user will be added to the array.
      }
    }
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  const validateFile = (file) => {
    const validTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      //'image/x-icon',
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  // const fileSize = (size) => {
  //   if (size === 0) return '0 Bytes';
  //   const k = 1024;
  //   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  //   const i = Math.floor(Math.log(size) / Math.log(k));
  //   return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  // };

  // const fileType = (fileName) => {
  //   //getting the file type from the file name.
  //   return (
  //     fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) ||
  //     fileName
  //   );
  // };

  useEffect(() => {
    //Use the JS reduce, find, and concat methods to remove duplicates and add the individual values into the new array validFiles.
    let filteredArray = selectedFiles.reduce((file, current) => {
      const x = file.find((item) => item.name === current.name);
      if (!x) {
        return file.concat([current]);
      } else {
        return file;
      }
    }, []);
    setValidFiles([...filteredArray]); // The result of filteredArray is used to update the validFiles array.
  }, [selectedFiles]);

  // const removeFile = (name) => {
  //   // find the index of the item
  //   // remove the item from array
  //   const validFileIndex = validFiles.findIndex((e) => e.name === name);
  //   validFiles.splice(validFileIndex, 1);
  //   // update validFiles array
  //   setValidFiles([...validFiles]);
  //   const selectedFileIndex = selectedFiles.findIndex((e) => e.name === name);
  //   selectedFiles.splice(selectedFileIndex, 1);
  //   // update selectedFiles array
  //   setSelectedFiles([...selectedFiles]);
  //   const unsupportedFileIndex = unsupportedFiles.findIndex(
  //     // If the index of the element is found, the item is spliced and unsupportedFiles is updated.
  //     (e) => e.name === name
  //   );
  //   if (unsupportedFileIndex !== -1) {
  //     unsupportedFiles.splice(unsupportedFileIndex, 1);
  //     // update unsupportedFiles array
  //     setUnsupportedFiles([...unsupportedFiles]);
  //   }
  // };

  const fileInputRef = useRef();

  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  const uploadRef = useRef();
  const progressRef = useRef();

  const uploadFiles = () => {
    // uploadModalRef.current.style.display = 'block';
    // uploadRef.current.innerHTML = 'File(s) Uploading...';
    for (let i = 0; i < validFiles.length; i++) {
      const formData = new FormData();
      formData.append('image', validFiles[i]);
      // axios
      //   .post(
      //     `${API_URL}/compositions/${props.compositionId}/wallPhotos`,
      //     formData,
      //     {
      //       onUploadProgress: (progressEvent) => {
      //         const uploadPercentage = Math.floor(
      //           (progressEvent.loaded / progressEvent.total) * 100
      //         );
      //         // progressRef.current.innerHTML = `${uploadPercentage}%`;
      //         // progressRef.current.style.width = `${uploadPercentage}%`;
      //         if (uploadPercentage === 100) {
      //           // uploadRef.current.innerHTML = 'File(s) Uploaded';
      //           validFiles.length = 0;
      //           setValidFiles([...validFiles]);
      //           setSelectedFiles([...validFiles]);
      //           setUnsupportedFiles([...validFiles]);
      //         }
      //       },
      //     }
      //   )
      //   .catch(() => {
      //     // If error, display a message on the upload modal
      //     uploadRef.current.innerHTML = `<span class='error'>Error Uploading File(s)</span>`;
      //     // set progress bar background color to red
      //     progressRef.current.style.backgroundColor = 'red';
      //   });
    }
  };

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  const goToNextPage = () => {
    window.location.href = 'editor02';
  };

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.container}>
          {unsupportedFiles.length === 0 && validFiles.length
            ? (uploadFiles(), goToNextPage())
            : ''}
          {unsupportedFiles.length ? (
            <p>Please remove all unsupported files.</p>
          ) : (
            ''
          )}
          <div
            className={styles.dropContainer}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
            onClick={fileInputClicked}
          >
            <div className={styles.dropMessage}>
              <div className={styles.uploadIcon}>
                <i className={'far fa-images'}></i>
              </div>
              Drop an image of the wall here
              <div className={styles.dropMessageSmall}>or click and select</div>
            </div>
            <input
              ref={fileInputRef}
              className={styles.fileInput}
              type='file'
              multiple
              onChange={filesSelected}
            />
          </div>
          {/* <div className={styles.fileDisplayContainer}>
            {validFiles.map((data, i) => (
              <div className={styles.fileStatusBar} key={i}>
                <div
                  onClick={
                    !data.invalid
                      ? () => openImageModal(data)
                      : () => removeFile(data.name)
                  }
                >
                  <div className={styles.fileTypeLogo}></div>
                  <div className={styles.fileType}>{fileType(data.name)}</div>
                  <span
                    className={`${styles.fileName} ${
                      data.invalid ? styles.fileError : ''
                    }`}
                  >
                    {data.name}
                  </span>
                  <span className={styles.fileSize}>
                    ({fileSize(data.size)})
                  </span>{' '}
                  {data.invalid && (
                    <span className={styles.fileErrorMessage}>
                      ({errorMessage})
                    </span>
                  )}
                </div>
                <div
                  className={styles.fileRemove}
                  onClick={() => removeFile(data.name)}
                >
                  X
                </div>
              </div>
            ))}
          </div> */}
        </div>
        {/* <div className={styles.modal} ref={modalRef}>
          <div className={styles.overlay}></div>
          <span className={styles.close} onClick={() => closeModal()}>
            X
          </span>
          <div className={styles.modalImage} ref={modalImageRef}></div>
        </div>
        <div className={styles.uploadModal} ref={uploadModalRef}>
          <div className={styles.overlay}></div>
          <div className={styles.close} onClick={() => closeUploadModal()}>
            X
          </div>
          <div className={styles.progressContainer}>
            <span ref={uploadRef}></span>
            <div className={styles.progress}>
              <div className={styles.progressBar} ref={progressRef}></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

DropZone.propTypes = {
  compositionId: PropTypes.any,
};

export default DropZone;
