import React, { Component } from 'react';
//import './projectGridRow.css';

class ProjectGridRow extends Component {
  render() {
	return (
	  	<div className="projectGridRow">
	  		<div className="projectGridColumn">{this.props.project.label}</div>
	  	</div>
	)
  }
}

export default (ProjectGridRow);
