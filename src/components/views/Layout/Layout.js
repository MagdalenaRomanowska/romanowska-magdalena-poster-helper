import React from 'react';
import BackgroundWall from '../../views/BackgroundWall/BackgroundWallContainer';
import Buttons from '../../features/Buttons/ButtonsContainer.js';
import GlobalFeatures from '../../views/GlobalFeatures/GlobalFeaturesContainer';
import ListOfPosters from '../../features/ListOfPosters/ListOfPostersContainer.js';
import DropZone from '../../features/DropZone/DropZoneContainer';
import ProjectToChoose from '../../features/ProjectToChoose/ProjectToChooseContainer';
import Parameters from '../../views/Parameters/ParametersContainer';
import Poster from '../../views/Poster/PosterContainer.js';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenPosterID: ' ',
      movingModeOn: false,
      pressed: false,
    };
    this.handleClickPoster = this.handleClickPoster.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.removeEverything = this.removeEverything.bind(this);
  }

  handleClickPoster() {
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
  }

  removeEverything() {
    this.props.removeAllPosters();
    this.props.removeAllPictures();
    this.props.removeAllBackgroundWalls();
    this.props.removeChosenPoster();
    this.props.removeSelectedBackgroundWallNames();
    this.props.removeAllProjectNames();
    this.props.removeSelectedProjectName();
    this.props.removeAllPosterDimensions();
    this.props.removeGlobalScale();
  }

  render() {
    const { posters } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.features}>  
          <div onClick={this.removeEverything}><DropZone /></div>       
          <ProjectToChoose />
          <Buttons />
          <ListOfPosters />
        </div>
        <div
          className={styles.view}
          onMouseMove={this.onMouseMove}
          onClick={this.handleClickPoster}
          onKeyDown={this.handleKeyDown}
          tabIndex='0'
        >
          <div className={styles.scale}>
            <GlobalFeatures />
          </div>
          <div className={styles.backgroundWall}>
            <BackgroundWall />
            <div className={styles.poster}>
              {posters.map((poster) => (
                <div key={poster.id} data-key={poster.id}>
                  <Poster id={poster.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.posters}>
          <div className={styles.moveable}>
            <p className={styles.trueOrFalse}>
              Moveable poster: &nbsp; {' ' + this.state.movingModeOn}
            </p>
          </div>
          <Parameters />
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  posters: PropTypes.any,
  chosenPosterId: PropTypes.any,
  startPosterPositionX: PropTypes.any,
  startPosterPositionY: PropTypes.any,
  startClickPositionX: PropTypes.any,
  startClickPositionY: PropTypes.any,
  setXPosterPosition: PropTypes.func,
  setYPosterPosition: PropTypes.func,
  selectedProjectName: PropTypes.any,
  removeAllPosters: PropTypes.any,
  removeAllPictures: PropTypes.any,
  removeAllBackgroundWalls: PropTypes.any,
  removeChosenPoster: PropTypes.any,
  removeSelectedBackgroundWallNames: PropTypes.any,
  removeAllProjectNames: PropTypes.any,
  removeSelectedProjectName: PropTypes.any,
  removeAllPosterDimensions: PropTypes.any,
  removeGlobalScale: PropTypes.any,
};

export default Layout;
