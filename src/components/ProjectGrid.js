import React, { Component } from 'react';
import './projectGrid.css';

class ProjectGrid extends Component {
  render() {
	return (
	  <div className="projectGrid">
	  	<div className="projectGridHeader">
	  		<div className="projectRow">Project</div>
	  		<div className="projectRow">Value 1</div>
	  		<div className="projectRow">Value 2</div>
	  	</div>
	  </div>
	)
  }
}

export default ProjectGrid;
