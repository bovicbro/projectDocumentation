import { connect } from "react-redux"
import React, { Component } from "react"
import "./projectGrid.css"
import ProjectGridRow from "./ProjectGridRow"
import EditableFieldLabel from "../fields/EditableFieldLabel"
import { toggleFieldAsColumn } from "../../store/actions/updateField"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
class ProjectGrid extends Component {
  constructor(props) {
    super(props)

    this.toggleField = this.toggleField.bind(this)
  }

  toggleField(field) {
    return () => this.props.toggleFieldAsColumn(field)
  }

  renderProjects() {
    return this.props.projects.map(project => (
      <ProjectGridRow
        project={project}
        fields={this.props.fields}
        key={project._id}
      />
    ))
  }

  render() {
    const fields = this.props.fields
    return (
      <div className="projectGrid">
        <div className="projectGridRow projectGridHeader">
          <div className="projectGridColumn">Project name</div>
          {fields
            .filter(field => field.isColumn)
            .map(field => {
              if (this.props.editable) {
                return (
                  <div className="projectGridColumn" key={field._id}>
                    <EditableFieldLabel field={field} />
                    <span onClick={this.toggleField(field)}>
                      <FontAwesomeIcon icon="times" />
                    </span>
                  </div>
                )
              } else {
                return (
                  <div className="projectGridColumn" key={field._id}>
                    <EditableFieldLabel field={field} />
                  </div>
                )
              }
            })}
        </div>
        {this.renderProjects()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    fields: state.fields,
    editable: state.settings.editable
  }
}

const mapDispatchToProps = {
  toggleFieldAsColumn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectGrid)
