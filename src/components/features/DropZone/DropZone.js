import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './DropZone.module.scss';

export default function DropZone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log('dupa + ', binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
    
  }, []);
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p className={styles.dragAndDrop}>Drag and drop a file here <br></br>or click to select</p>
    </div>
  );
}


// import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import styles from './DropZone.module.scss';

// const DropZone = (props) => {
//   const [selectedFiles, setSelectedFiles] = useState([]); // selectedFiles has a type of array.
//   // const [setErrorMessage] = useState(''); // errorMessage has a type of string.
//   const [validFiles, setValidFiles] = useState([]); // To remove duplicates from the selectedFiles array.
//   const [unsupportedFiles, setUnsupportedFiles] = useState([]); // If the array length is zero, the button is displayed; otherwise, the button is hidden.

//   const dragOver = (e) => {
//     e.preventDefault();
//   };

//   const dragEnter = (e) => {
//     e.preventDefault();
//   };

//   const dragLeave = (e) => {
//     e.preventDefault();
//   };

//   const handleFiles = (files) => {
//     for (let i = 0; i < files.length; i++) {
//       if (validateFile(files[i])) {
//         setSelectedFiles((prevArray) => [...prevArray, files[i]]); // add to an array so we can display the name of file
//       } else {
//         files[i]['invalid'] = true; // add a new property called invalid
//         setSelectedFiles((prevArray) => [...prevArray, files[i]]); // add to the same array so we can display the name of the file
//         // setErrorMessage('File type not permitted'); // set error message
//         setUnsupportedFiles((prevArray) => [...prevArray, files[i]]); // Each invalid file dropped by the user will be added to the array.
//       }
//     }
//   };

//   const fileDrop = (e) => {
//     e.preventDefault();
//     const files = e.dataTransfer.files;
//     if (files.length) {
//       handleFiles(files);
//     }
//   };

//   const validateFile = (file) => {
//     const validTypes = [
//       'csv',
//       // 'image/jpg',
//       // 'image/png',
//       // 'image/gif',
//       //'image/x-icon',
//     ];
//     if (validTypes.indexOf(file.type) === -1) {
//       return false;
//     }
//     return true;
//   };

//   useEffect(() => {
//     //Use the JS reduce, find, and concat methods to remove duplicates and add the individual values into the new array validFiles.
//     let filteredArray = selectedFiles.reduce((file, current) => {
//       const x = file.find((item) => item.name === current.name);
//       if (!x) {
//         return file.concat([current]);
//       } else {
//         return file;
//       }
//     }, []);
//     setValidFiles([...filteredArray]); // The result of filteredArray is used to update the validFiles array.
//   }, [selectedFiles]);

//   const fileInputRef = useRef();

//   const fileInputClicked = () => {
//     fileInputRef.current.click();
//   };

//   const uploadRef = useRef();
//   const progressRef = useRef();

//   const uploadFiles = () => {    
//     for (let i = 0; i < validFiles.length; i++) {
//       const formData = new FormData();
//       formData.append(validFiles[i]);
//       console.log('formData : ', formData);
//       // axios
//       //   .post(
//       //     'http://localhost:3000/api',
//       //     formData,
//       //     {
//       //       onUploadProgress: (progressEvent) => {
//       //         const uploadPercentage = Math.floor(
//       //           (progressEvent.loaded / progressEvent.total) * 100
//       //         );
//       //         // progressRef.current.innerHTML = `${uploadPercentage}%`;
//       //         // progressRef.current.style.width = `${uploadPercentage}%`;
//       //         if (uploadPercentage === 100) {
//       //           // uploadRef.current.innerHTML = 'File(s) Uploaded';
//       //           validFiles.length = 0;
//       //           setValidFiles([...validFiles]);
//       //           setSelectedFiles([...validFiles]);
//       //           setUnsupportedFiles([...validFiles]);
//       //         }
//       //       },
//       //     }
//       //   )
//       //   .catch(() => {
//       //     // If error, display a message on the upload modal
//       //     uploadRef.current.innerHTML = `<span class='error'>Error Uploading File(s)</span>`;
//       //     // set progress bar background color to red
//       //     progressRef.current.style.backgroundColor = 'red';
//       //   });
//     }
//   };

//   const filesSelected = () => {
//     if (fileInputRef.current.files.length) {
//       handleFiles(fileInputRef.current.files);
//     }
//   };

//   // const goToNextPage = () => {
//   //   window.location.href = 'editor02';
//   // };

//   return (
//     <div>
//       <div className={styles.content}>
//         <div className={styles.container}>
//           {unsupportedFiles.length === 0 && validFiles.length
//             ? (uploadFiles())
//             : ''}
//           {unsupportedFiles.length ? (
//             <p>Please remove all unsupported files.</p>
//           ) : (
//             ''
//           )}
//           <div
//             className={styles.dropContainer}
//             onDragOver={dragOver}
//             onDragEnter={dragEnter}
//             onDragLeave={dragLeave}
//             onDrop={fileDrop}
//             onClick={fileInputClicked}
//           >
//             <div className={styles.dropMessage}>
//               <div className={styles.uploadIcon}>
//                 <i className={'far fa-images'}></i>
//               </div>
//               Drop a file with the project here
//               <div className={styles.dropMessageSmall}>or click and select</div>
//             </div>
//             <input
//               ref={fileInputRef}
//               className={styles.fileInput}
//               type='file'
//               multiple
//               onChange={filesSelected}
//             />
//           </div>          
//         </div>        
//       </div>
//     </div>
//   );
// };

// DropZone.propTypes = {
//   // compositionId: PropTypes.any,
// };

// export default DropZone;
