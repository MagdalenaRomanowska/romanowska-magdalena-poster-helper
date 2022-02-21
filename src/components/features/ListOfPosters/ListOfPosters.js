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
    this.state = { chosenPosterID: ' ' };
    this.handleClick = this.handleClick.bind(this);
  }

  _onChangeChosenPosterID(chosenPosterID) {
    this.props.setChosenPosterID(chosenPosterID);
  }

  handleClick(event) {
    this._onChangeChosenPosterID(event.target.getAttribute('data-key'));
  }

  render(props) {
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
        <div className={styles.posters}>
          <div className={styles.backgroundWall}>
            <BackgroundWall />          
          </div>
          <div className={styles.poster}>
            {parameters.map((parameter) => (
              <div key={parameter.id} data-key={parameter.id}>
                <Poster
                  id={parameter.id}
                />                
              </div>
            ))}
          </div>
        </div>
        <div className={styles.parameters}>
          <p className={styles.title}>Parameters:</p>
          <Parameters chosenPosterID={chosenPosterId} />
        </div>
      </div>
    );
  }
}

ListOfPosters.propTypes = {
  parameters: PropTypes.any,
  poster: PropTypes.any,
  chosenPosterId: PropTypes.any,
  setChosenPosterID: PropTypes.func,
};

export default ListOfPosters;
