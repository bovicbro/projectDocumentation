import React, { Component } from "react";
import "./expandedProject.css";
import ProjectUtil from "../utils/ProjectUtil";
import EditableString from "./EditableString";

class ExpandedProject extends Component {
  constructor(props) {
    super(props);

    this.updateProjectValue = this.updateProjectValue.bind(this);
  }

  updateProjectValue(field) {
    return (value) => {
      //update project
    }
  }

  render() {
    return (
      <div className="expandedProject">
        <div className="ProjectValueContainer">
          {this.props.fields.map(field => (
            <div className="ProjectValue" key={field._id}>
              <strong>{field.label}</strong>
              <EditableString
                text={ProjectUtil.getFieldValue(this.props.project, field._id)}
                onChange={this.updateProjectValue(field._id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ExpandedProject;
