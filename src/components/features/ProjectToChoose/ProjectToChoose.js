import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectToChoose.module.scss';

class ProjectToChoose extends React.Component {
  _onChangeProjectName(projectName) {
    this.props.setSelectedProjectName(projectName);
  }

  render() {
    const { projectNames, selectedProjectName } = this.props;

    return (
      <div className={styles.root}>
        <label className={styles.label}>
          Choose project:
          <select
            className={styles.select}
            onChange={(e) => this._onChangeProjectName(e.target.value)}
            value={selectedProjectName}
          >
            {projectNames.map((projectName) => (
              <option
                key={projectName.projectName}
                value={projectName.projectName}
              >
                {projectName.projectName}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

ProjectToChoose.propTypes = {
  projectNames: PropTypes.any,
  selectedProjectName: PropTypes.any,
  setSelectedProjectName: PropTypes.func,
};

export default ProjectToChoose;
