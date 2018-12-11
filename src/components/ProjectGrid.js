import React, { Component } from 'react';
import './projectGrid.css';

class ProjectGrid extends Component {
  render() {
	return (
	  <div className="projectGrid">
	  	<div className="projectGridRow" id="projectGridHeader">
	  		<div className="projectGridColumn">Project</div>
	  		<div className="projectGridColumn">Value 1</div>
	  		<div className="projectGridColumn">Value 2</div>
	  	</div>
	  	<div className="projectGridRow">
	  		<div className="projectGridColumn">Project</div>
	  		<div className="projectGridColumn">Value 1</div>
	  		<div className="projectGridColumn">Value 2</div>
	  	</div>
	  	<div className="projectGridRow">
	  		<div className="projectGridColumn">Project</div>
	  		<div className="projectGridColumn">Value 1</div>
	  		<div className="projectGridColumn">Value 2</div>
	  	</div>
	  </div>
	)
  }
}

export default ProjectGrid;
