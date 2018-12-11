import React, { Component } from 'react';
import './expandedProject.css';

class ExpandedProject extends Component {
  render() {
	return (
	  <div className="ExpandedProject">
	  		<div className="ProjectName">{this.props.name}</div>
	  </div>
	)
  }
}

export default ExpandedProject;
