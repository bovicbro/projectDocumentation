import React, { Component } from "react";
import PropTypes from "prop-types";
import "./expandedProject.css";
import ProjectUtil from "../utils/ProjectUtil";

class ExpandedProject extends Component {
  render() {
    return (
      <div className="expandedProject">
        <div className="ProjectName">{this.props.project.label}</div>
        {this.props.fields.map(field => (
          <div className="ProjectValue">
            <strong>{field.label}</strong>
            {ProjectUtil.getFieldValue(this.props.project, field._id)}
          </div>
        ))}
      </div>
    );
  }
}

ExpandedProject.propTypes = {
  project: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired
};

export default ExpandedProject;
