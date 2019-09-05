import React, { Component } from 'react';
import axios from 'axios';


class AddNewProject extends Component {
  state = {
    projects: [],
    selectedProject: {
      deploymentRegions: []
    },
    selectedDeploymentRegion: ''
  };


  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    axios.get('https://deployment-history.aulisius.now.sh/api/projects')
      .then((response) => {
        const projects = response && response.data && response.data.projects;
        this.setState({
          projects: projects || [],
          selectedProject: projects[0]
        });
        console.log(projects);
      })
      .catch(console.error);
  }

  deployNewProject = () => {
    const { selectedProject, selectedDeploymentRegion } = this.state;
    const { updateDeploymentHistory } = this.props;

    axios.post(
      'https://deployment-history.aulisius.now.sh/api/deployments', {
        projectName: selectedProject.projectName,
        deploymentRegion: selectedDeploymentRegion
      })
      .then((response) => {
        updateDeploymentHistory();
      })
      .catch(console.error);
  };

  selectedProjectChange = (evt) => {
    const { projects } = this.state;
    let selectedProject = projects.filter(p => p.id === parseInt(evt.target.value, 10));
    this.setState({
      selectedProject: selectedProject[0]
    });
  };

  selectedDeploymentRegionChange = (evt) => {
    const { selectedProject } = this.state;
    let selectedDeploymentRegion = selectedProject.deploymentRegions.filter(p => p === evt.target.value);
    this.setState({
      selectedDeploymentRegion: selectedDeploymentRegion[0]
    });
  };

  render () {
    const {
      deploymentList,
      updateDeploymentHistory
    } = this.props;

    const {
      selectedProject,
      projects
    } = this.state;

    return (
      <div>
        <div>
          Projects:
          <select onChange={this.selectedProjectChange}>
            {
              projects.map(project => {
                return <option key={project.id} value={project.id}>{project.projectName}</option>
              })
            }
          </select>
        </div>
        <br />
        <div>
          Deployment Regions:
          <select onChange={this.selectedDeploymentRegionChange}>
            {
              selectedProject.deploymentRegions.map(region => {
                return <option key={region} value={region}>{region}</option>
              })
            }
          </select>
        </div>
        <button onClick={this.deployNewProject}>Deploy</button>
      </div>
    );
  }
}
export default AddNewProject;
