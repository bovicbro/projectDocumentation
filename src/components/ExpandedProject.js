import React, { Component } from "react";
import "./expandedProject.css";
import ProjectUtil from "../utils/ProjectUtil";
import EditableString from "./EditableString";

class ExpandedProject extends Component {
  render() {
    return (
      <div className="expandedProject">
        <div className="ProjectValueContainer">
          {this.props.fields.map(field => (
            <div className="ProjectValue" key={field._id}>
              <strong>{field.label}</strong>
              <EditableString
                text={ProjectUtil.getFieldValue(this.props.project, field._id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ExpandedProject;
