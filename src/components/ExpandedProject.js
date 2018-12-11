import React, { Component } from 'react';
import './expandedProject.css';

class ExpandedProject extends Component {
  render() {
	return (
	  <div className="expandedProject">
	  		<div className="ProjectName">{this.props.label}</div>
	  </div>
	)
  }
}

export default ExpandedProject;
