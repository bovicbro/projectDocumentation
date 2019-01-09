import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './expandedProject.css';

class ExpandedProject extends Component {
  render() {
	return (
	  <div className="expandedProject">
	  		<div className="ProjectName">{this.props.project.label}</div>
        {this.props.project.values.map(field => (
          <div className='ProjectValue'>{field.value}</div>
        ))}
	  </div>
	)
  }
}

ExpandedProject.propTypes = {
  project: PropTypes.object.isRequired
}

export default ExpandedProject;
