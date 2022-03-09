import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Parameters.module.scss';

class Parameters extends Component {
  constructor(props) {
    super(props);
  }

  _onChangeXPosition(xPosterPosition, parameterId) {
    this.props.setXPosterPosition(parameterId, xPosterPosition);
  }

  _onChangeYPosition(yPosterPosition, parameterId) {
    this.props.setYPosterPosition(parameterId, yPosterPosition);
  }

  _onChangePosterWidth(posterWidth, parameterId) {
    this.props.setPosterWidth(parameterId, posterWidth);
  }

  _onChangePosterHeight(posterHeight, parameterId) {
    this.props.setPosterHeight(parameterId, posterHeight);
  }

  render() {
    const { parameters, chosenPosterID } = this.props;
    const parameter = parameters.filter((e) => e.id === chosenPosterID)[0];

    if (!parameter) {
      return ' ';
    }

    return (
      <div>
        <div>
          <table key={parameter.posterName}>
            <thead>
              <th scope='col' className={styles.tableLabel}>
                Poster name: {parameter.posterName}
              </th>
            </thead>
            <tbody>
              <td>
                <p className={styles.parameterLabel}>
                  X position:
                  <input
                    type='number'
                    min='0'
                    max='1024'
                    step='10'
                    value={parameter.xPosterPosition}
                    onChange={(e) =>
                      this._onChangeXPosition(e.target.value, parameter.id)
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
                    value={parameter.yPosterPosition}
                    onChange={(e) =>
                      this._onChangeYPosition(e.target.value, parameter.id)
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  Width:{' '}
                  <input
                    type='number'
                    value={parameter.posterWidth}
                    onChange={(e) =>
                      this._onChangePosterWidth(e.target.value, parameter.id)
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  Height:{' '}
                  <input
                    type='number'
                    value={parameter.posterHeight}
                    onChange={(e) =>
                      this._onChangePosterHeight(e.target.value, parameter.id)
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  URL:{' '}
                  <form>        
                    <select id="framework">
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                    </select>
                  </form>
                </p>
              </td>
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
  setPosterWidth: PropTypes.func,
  setPosterHeight: PropTypes.func,
  parameters: PropTypes.any,
  chosenPosterID: PropTypes.any,
};

export default Parameters;
