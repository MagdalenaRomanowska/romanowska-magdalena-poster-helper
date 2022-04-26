import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Parameters.module.scss';

class Parameters extends Component {
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

  render() {
    const { posters, chosenPosterId, pictures, posterDimensions } = this.props;
    const poster = posters.filter((poster) => poster.id === chosenPosterId)[0];

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
                          key={picture.pictureName}
                          className={styles.picture}
                        >
                          <img
                            className={styles.imageInGallery}
                            src={picture.url}
                            alt={'gallery posters'}
                            onClick={(e) =>
                              this._onChangePicture(
                                picture.pictureName,
                                poster.id
                              )
                            }
                          />
                          <section className={styles.pictureName}>
                            {picture.pictureName}
                          </section>
                        </div>
                      ))}
                    </div>
                    <div
                      id={'closeGallery'}
                      style={{ display: 'none' }}
                      onClick={() => this.closeGallery()}
                      className={styles.closeGallery}
                    >
                      <p className={styles.closeGalleryX}>x</p>
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
  pictures: PropTypes.any,
  setPictureName: PropTypes.func,
  posterDimensions: PropTypes.any,
  setPosterDimensionsName: PropTypes.func,
};

export default Parameters;
