import { connect } from "react-redux"
import React, { Component } from "react"
import "./projectGrid.css"
import ProjectGridRow from "./ProjectGridRow"
import EditableFieldLabel from "../fields/EditableFieldLabel"
import { toggleFieldAsColumn } from "../../store/actions/updateField"
class ProjectGrid extends Component {
  constructor(props) {
    super(props)

    this.toggleField = this.toggleField.bind(this)
  }

  toggleField(field) {
    return () => this.props.toggleFieldAsColumn(field)
  }

  render() {
    const projects = this.props.projects
    const fields = this.props.fields
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
                  <span onClick={this.toggleField(field)}> (X)</span>
                </div>
              )
            })}
        </div>
        {projects.map(project => (
          <ProjectGridRow project={project} fields={fields} key={project._id} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    fields: state.fields
  }
}

const mapDispatchToProps = {
  toggleFieldAsColumn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectGrid)