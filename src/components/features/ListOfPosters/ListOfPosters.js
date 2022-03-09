import React from 'react';
import Parameters from '../../views/Parameters/ParametersContainer';
import BackgroundWall from '../../views/BackgroundWall/BackgroundWall';
import Poster from '../../views/Poster/PosterContainer.js';
import PropTypes from 'prop-types';
import styles from './ListOfPosters.module.scss';

class ListOfPosters extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.parameters !== prevProps.parameters) {
      let chosenPosterID = '';

      if (
        this.props.parameters !== undefined &&
        this.props.parameters.length !== 0
      ) {
        chosenPosterID = this.props.chosenPosterId;
      }
      this.setState({ chosenPosterID: chosenPosterID });
    }
  }

  constructor(props) {
    super(props);
    this.state = { 
      chosenPosterID: ' ',
      movingModeOn: false,
      pressed: false,
      startPositionX: 0,
      startPositionY: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickPoster = this.handleClickPoster.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  _onChangeChosenPosterID(chosenPosterID) {
    this.props.setChosenPosterID(chosenPosterID);
  }

  handleClick(event) {
    this._onChangeChosenPosterID(event.target.getAttribute('data-key'));    
  }

  handleClickPoster(event) {
    this.setState({ 
      pressed: !this.state.pressed,
      startPositionX: event.clientX,
      startPositionY: event.clientY,
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
      this.props.setXPosition(this.state.chosenPosterID, event.clientX - startClickPositionX + startPosterPositionX);
      this.props.setYPosition(this.state.chosenPosterID, event.clientY - startClickPositionY + startPosterPositionY);
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
              onClick={this.handleClick}
            >
              {parameter.posterName}
            </textarea>
          ))}
        </div>
        <div className={styles.posters}
          onMouseMove={this.onMouseMove}  
          onClick={this.handleClickPoster}        
          onKeyDown={this.handleKeyDown}
          tabIndex="0"
        >
          <div className={styles.backgroundWall}>
            <BackgroundWall />          
          </div>
          <div className={styles.poster}>
            {parameters.map((parameter) => (
              <div 
                key={parameter.id} 
                data-key={parameter.id}
              >
                <Poster
                  id={parameter.id}                 
                />                
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
  posterParameters: PropTypes.any,
  poster: PropTypes.any,
  chosenPosterId: PropTypes.any,
  startPosterPositionX: PropTypes.any,
  startPosterPositionY: PropTypes.any,
  startClickPositionX: PropTypes.any,
  startClickPositionY: PropTypes.any,
  setChosenPosterID: PropTypes.func,
  setXPosition: PropTypes.func,
  setYPosition: PropTypes.func,
  movePosterByDeltaX: PropTypes.func,
  movePosterByDeltaY: PropTypes.func,
};

export default ListOfPosters;
