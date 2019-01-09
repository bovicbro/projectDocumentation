import { connect } from "react-redux"
import React, { Component } from "react"
import "./projectGrid.css"
import ProjectGridRow from "./ProjectGridRow"

class ProjectGrid extends Component {
  render() {
    const projects = this.props.projects
    const fields = this.props.fields
    return (
      <div className="projectGrid">
        <div className="projectGridRow" id="projectGridHeader">
          <div className="projectGridColumn">Project name</div>
          {fields
            .filter(field => field.isColumn)
            .map(field => {
              return (
                <div className="projectGridColumn" key={field._id}>
                  {field.label}
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

export default connect(mapStateToProps)(ProjectGrid)
