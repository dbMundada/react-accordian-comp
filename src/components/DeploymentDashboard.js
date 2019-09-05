import React, { Component } from 'react';
import DeploymentHistory  from './DeploymentHistory';
import AddNewProject from './AddNewProject';
import axios from 'axios';


class DeploymentDashboard extends Component {
  state = {
    deploymentList: []
  };

  componentDidMount() {
    this.getDeploymentHistory();
  }

  getDeploymentHistory = () => {
    axios.get('https://deployment-history.aulisius.now.sh/api/deployments')
      .then((response) => {
        const deploymentList = response && response.data && response.data.deploymentHistory;
        this.setState({
          deploymentList: deploymentList
        });
      })
      .catch(console.error);
  };

  render () {
    const { deploymentList } = this.state;

    return (
      <div>
        <AddNewProject
          deploymentList={deploymentList}
          updateDeploymentHistory={this.getDeploymentHistory}/>
        <br />
        <DeploymentHistory
          deploymentList={deploymentList}
          updateDeploymentHistory={this.getDeploymentHistory} />
      </div>
    );
  }
}
export default DeploymentDashboard;
