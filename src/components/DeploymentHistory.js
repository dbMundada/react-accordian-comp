import React, { Component } from 'react';
import axios from 'axios';


const DeploymentHistory = ({
  deploymentList,
  updateDeploymentHistory
}) => {
  const retryDeployment = (id) => {
    axios.put(`https://deployment-history.aulisius.now.sh/api/deployments?id=${id}`)
      .then((response) => {
          updateDeploymentHistory();
      })
      .catch(console.error);
  };

  const deleteDeployment = (id) => {
    axios.delete(`https://deployment-history.aulisius.now.sh/api/deployments?id=${id}`)
      .then((response) => {
          updateDeploymentHistory();
      })
      .catch(console.error);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>ProjectName</th>
          <th>DeploymentRegion</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        deploymentList.map(item => {
          return <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.projectName}</td>
            <td>{item.deploymentRegion}</td>
            <td>{item.status}</td>
            <td>
              <button onClick={() => retryDeployment(item.id)}>Retry</button>
              <button onClick={() => deleteDeployment(item.id)}>Delete</button>
            </td>
          </tr>;
        })
      }
      </tbody>
    </table>
  );
}
export default DeploymentHistory;
