import { connect } from "react-redux";
import React, { Component } from "react";
import "./projectGrid.css";
import ProjectGridRow from "./ProjectGridRow";
import EditableFieldLabel from "../fields/EditableFieldLabel";
import { toggleFieldAsColumn } from "../../store/actions/updateField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { newProject } from "../../store/actions/newProject";

class ProjectGrid extends Component {
  toggleField = field => {
    return () => this.props.toggleFieldAsColumn(field);
  };

  renderProjects() {
    return this.props.projects.map(project => (
      <ProjectGridRow
        project={project}
        fields={this.props.fields}
        key={project._id}
      />
    ));
  }

  renderRemoveIcon(field) {
    if (this.props.editable) {
      return (
        <span onClick={this.toggleField(field)}>
          <FontAwesomeIcon icon="times" />
        </span>
      );
    }
  }

  addProject = () => {
    this.props.newProject("New project");
  };

  render() {
    const fields = this.props.fields;
    return (
      <div className="projectGrid">
        <div className="projectGridRow projectGridHeader">
          <div className="projectGridColumn">Project name</div>
          {fields
            .filter(field => field.isColumn)
            .map(field => {
              return (
                <div className="projectGridColumn" key={field._id}>
                  <EditableFieldLabel field={field} />
                  {this.renderRemoveIcon(field)}
                </div>
              );
            })}
        </div>
        {this.renderProjects()}
        <span onClick={this.addProject}>
          <FontAwesomeIcon icon="plus-square" />
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    fields: state.fields,
    editable: state.settings.editable
  };
};

const mapDispatchToProps = {
  toggleFieldAsColumn,
  newProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectGrid);
