import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './Parameters.module.scss';

const idUUID = uuidv4();

class Parameters extends Component {
  constructor(props) {
    super(props);
    this.handleClickRemovePicture = this.handleClickRemovePicture.bind(this);
  }
  
  _onChangeXPosition(xPosterPosition, parameterId) {
    this.props.setXPosterPosition(parameterId, xPosterPosition);
  }

  _onChangeYPosition(yPosterPosition, parameterId) {
    this.props.setYPosterPosition(parameterId, yPosterPosition);
  }

  _onChangeAngle(angle, parameterId) {
    this.props.setPosterAngle(parameterId, angle);
  }

  openGallery() {
    document.getElementById('gallery').style.display = 'block';
    document.getElementById('closeGallery').style.display = 'block';
  }

  closeGallery() {
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('closeGallery').style.display = 'none';
  }

  _onChangePicture(pictureName, parameterId) {
    this.props.setPictureName(parameterId, pictureName);
    this.closeGallery();
  }

  _onChangePosterDimensions(posterDimensionsName, parameterId) {
    this.props.setPosterDimensionsName(parameterId, posterDimensionsName);
  }

  _onChangeRemovePicture(chosenPictureID) {
    console.log('chosenPictureID: ', chosenPictureID);
    this.props.removePicture(chosenPictureID);
  }

  handleClickRemovePicture(event) {
    console.log('event: ', event.target.getAttribute('data-key'));
    this._onChangeRemovePicture(event.target.getAttribute('data-key'));
  }

  _onChangePictureName(pictureName, pictureId) {
    this.props.setNewPictureName(pictureId, pictureName);
  }

  _onChangePictureUrl(pictureUrl, pictureId) {
    this.props.setNewPictureUrl(pictureId, pictureUrl);
  }

  render() {
    const {
      posters,
      chosenPosterId,
      chosenPictureId,
      pictures,
      posterDimensions,
      addPicture,
    } = this.props;

    const poster = posters.filter((poster) => poster.id === chosenPosterId)[0];
    // const picture = pictures.filter(
    //   (picture) => picture.id === chosenPictureId
    // )[0];

    if (!poster) {
      return ' ';
    }

    return (
      <div className={styles.root}>
        <div>
          <table key={poster.posterName}>
            <thead>
              <tr>
                <th className={styles.tableLabel}>
                  Poster name: {poster.posterName}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className={styles.parameterLabel}>
                    X position:
                    <input
                      type='number'
                      min='0'
                      max='1024'
                      step='10'
                      value={poster.xPosterPosition}
                      onChange={(e) =>
                        this._onChangeXPosition(e.target.value, poster.id)
                      }
                    />
                  </p>
                  <p className={styles.parameterLabel}>
                    Y position:{' '}
                    <input
                      type='number'
                      min='0'
                      max='768'
                      step='10'
                      value={poster.yPosterPosition}
                      onChange={(e) =>
                        this._onChangeYPosition(e.target.value, poster.id)
                      }
                    />
                  </p>
                  <p className={styles.parameterLabel}>
                    Angle:{' '}
                    <input
                      type='number'
                      min='0'
                      max='360'
                      step='5'
                      value={poster.angle}
                      onChange={(e) =>
                        this._onChangeAngle(e.target.value, poster.id)
                      }
                    />
                  </p>
                  <p className={styles.parameterLabel}>
                    Dimensions:{' '}
                    <select
                      className={styles.select}
                      onChange={(event) =>
                        this._onChangePosterDimensions(
                          event.target.value,
                          poster.id
                        )
                      }
                      value={poster.posterDimensionsName}
                    >
                      {posterDimensions.map((posterDimension) => (
                        <option
                          key={posterDimension.posterDimensionsName}
                          value={posterDimension.posterDimensionsName}
                        >
                          {posterDimension.posterDimensionsName}
                        </option>
                      ))}
                    </select>
                  </p>
                  <div className={styles.parameterLabelWithPicture}>
                    Choose picture:{' '}
                    <div
                      className={styles.openGallery}
                      onClick={() => this.openGallery()}
                    ></div>
                    <div
                      id={'gallery'}
                      style={{ display: 'none' }}
                      className={styles.gallery}
                    >
                      {pictures.map((picture) => (
                        <div
                          key={picture.id}
                          className={styles.picture}
                        >
                          <img
                            className={styles.imageInGallery}
                            src={picture.pictureUrl}
                            alt={'gallery posters'}
                            onClick={(e) =>
                              this._onChangePicture(
                                picture.pictureName,
                                picture.id
                              )
                            }
                          />

                          <div className={styles.pictureName}>
                            <input
                              type='text'
                              value={picture.pictureName}
                              onChange={(e) =>
                                this._onChangePictureName(
                                  e.target.value,
                                  picture.id
                                )
                              }                              
                            />
                            <input
                              type='text'
                              value={picture.pictureUrl}
                              onChange={(e) =>
                                this._onChangePictureUrl(
                                  e.target.value,
                                  picture.id
                                )
                              }
                            />
                            {/* <div id='result'>ooo</div> */}
                            &nbsp; &nbsp; &nbsp;
                            <i
                              className={'fa fa-trash-o'}
                              data-key={picture.id}
                              onClick={this.handleClickRemovePicture}
                            ></i>
                          </div>
                        </div>
                      ))}
                      <button
                        className={styles.addPicture}
                        onClick={(event) =>
                          addPicture({
                            id: idUUID,
                            pictureName: 'Saturn',
                            pictureUrl: '/images/Saturn.jpg',
                          })
                        }
                      >
                        add picture to gallery
                      </button>
                    </div>
                    <div
                      id={'closeGallery'}
                      style={{ display: 'none' }}
                      onClick={() => this.closeGallery()}
                      className={styles.closeGallery}
                    >
                      {' '}
                      &nbsp; x{/* <p className={styles.closeGalleryX}>x</p> */}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Parameters.propTypes = {
  setXPosterPosition: PropTypes.func,
  setYPosterPosition: PropTypes.func,
  setPosterAngle: PropTypes.func,
  posters: PropTypes.any,
  chosenPosterId: PropTypes.any,
  chosenPictureId: PropTypes.any,
  pictures: PropTypes.any,
  setPictureName: PropTypes.func,
  setNewPictureName: PropTypes.func,
  setNewPictureUrl: PropTypes.func,
  posterDimensions: PropTypes.any,
  setPosterDimensionsName: PropTypes.func,
  addPicture: PropTypes.any,
  removePicture: PropTypes.any,
};

export default Parameters;
