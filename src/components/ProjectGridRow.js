import React, { Component } from "react"
import ExpandedProject from "./ExpandedProject"
//import './projectGridRow.css';

import ProjectUtil from "../utils/ProjectUtil"

class ProjectGridRow extends Component {
  constructor(props) {
    super(props)

    this.state = { expanded: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  renderExpanded() {
    if (this.state.expanded) {
      return (
        <ExpandedProject
          project={this.props.project}
          fields={this.props.fields}
        />
      )
    }
    return null
  }

  render() {
    return (
      <div className="projectGridRow">
        <div
          className={
            "projectGridRowItem expander " +
            (this.state.expanded ? "expanded" : "")
          }
          onClick={this.toggle}
        >
          >
        </div>
        <div className="projectGridRowItem">
          <div className="projectGridColumn">{this.props.project.label}</div>
          {this.props.fields
            .filter(field => field.isColumn)
            .map(field => (
              <div className="projectGridColumn" key={field._id}>
                {ProjectUtil.getFieldValue(this.props.project, field._id)}
              </div>
            ))}
          {this.renderExpanded()}
        </div>
      </div>
    )
  }
}

export default ProjectGridRow
