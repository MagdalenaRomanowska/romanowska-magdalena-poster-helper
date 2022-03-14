import React from 'react';
import Parameters from '../../views/Parameters/ParametersContainer';
import BackgroundWall from '../../views/BackgroundWall/BackgroundWall';
import Poster from '../../views/Poster/PosterContainer.js';
import PropTypes from 'prop-types';
import styles from './ListOfPosters.module.scss';

class ListOfPosters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenPosterID: ' ',
      movingModeOn: false,
      pressed: false,
    };
    this.handleClickPosterNameOnList =
      this.handleClickPosterNameOnList.bind(this);
    this.handleClickPoster = this.handleClickPoster.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  _onChangeChosenPosterID(chosenPosterID) {
    this.props.setChosenPosterID(chosenPosterID);
  }

  handleClickPosterNameOnList(event) {
    this._onChangeChosenPosterID(event.target.getAttribute('data-key'));
  }

  handleClickPoster(event) {
    this.setState({
      pressed: !this.state.pressed,
    });
  }

  handleKeyDown() {
    this.setState({ movingModeOn: !this.state.movingModeOn });
  }

  onMouseMove(event) {
    let startPosterPositionX = this.props.startPosterPositionX;
    let startPosterPositionY = this.props.startPosterPositionY;
    let startClickPositionX = this.props.startClickPositionX;
    let startClickPositionY = this.props.startClickPositionY;
    if (this.state.pressed && this.state.movingModeOn) {
      this.props.setXPosterPosition(
        this.props.chosenPosterId,
        event.clientX - startClickPositionX + startPosterPositionX
      );
      this.props.setYPosterPosition(
        this.props.chosenPosterId,
        event.clientY - startClickPositionY + startPosterPositionY
      );
    }

    // console.log('startPosterPositionX: ', startPosterPositionX, ' / startPosterPositionY: ', startPosterPositionY,
    //   ' / startClickPositionX: ', startClickPositionX, ' / startClickPositionY:', startClickPositionY);
  }

  render() {
    const { parameters, chosenPosterId } = this.props;

    return (
      <div className={styles.root}>
        <div>
          {parameters.map((parameter) => (
            <textarea
              className={styles.clickedPosterName}
              key={parameter.id}
              data-key={parameter.id}
              onClick={this.handleClickPosterNameOnList}
              defaultValue={parameter.posterName}
            ></textarea>
          ))}
        </div>
        <div
          className={styles.posters}
          onMouseMove={this.onMouseMove}
          onClick={this.handleClickPoster}
          onKeyDown={this.handleKeyDown}
          tabIndex='0'
        >
          <div className={styles.backgroundWall}>
            <BackgroundWall />
          </div>
          <div className={styles.poster}>
            {parameters.map((parameter) => (
              <div key={parameter.id} data-key={parameter.id}>
                <Poster id={parameter.id} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.parameters}>
          <p className={styles.title}>Parameters:</p>
          <div>movingModeOn: {' ' + this.state.movingModeOn}</div>
          <Parameters chosenPosterID={chosenPosterId} />
        </div>
      </div>
    );
  }
}

ListOfPosters.propTypes = {
  parameters: PropTypes.any,
  chosenPosterId: PropTypes.any,
  startPosterPositionX: PropTypes.any,
  startPosterPositionY: PropTypes.any,
  startClickPositionX: PropTypes.any,
  startClickPositionY: PropTypes.any,
  setChosenPosterID: PropTypes.func,
  setXPosterPosition: PropTypes.func,
  setYPosterPosition: PropTypes.func,
};

export default ListOfPosters;
