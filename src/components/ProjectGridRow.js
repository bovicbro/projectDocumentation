import React, { Component } from "react"
import ExpandedProject from "./ExpandedProject"
//import './projectGridRow.css';

const findProjectValue = (project, fieldId) => {
  const value = project.values.find(
    fieldValue => fieldValue.fieldId === fieldId
  )

  return value ? value.value : null
}

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
      return <ExpandedProject label={this.props.project.label} />
    }
    return null
  }

  render() {
    return (
      <div className="projectGridRow" onClick={this.toggle}>
        <div className="projectGridColumn">{this.props.project.label}</div>
        {this.props.fields
          .filter(field => field.isColumn)
          .map(field => (
            <div className="projectGridColumn" key={field._id}>
              {findProjectValue(this.props.project, field._id)}
            </div>
          ))}
        {this.renderExpanded()}
      </div>
    )
  }
}

export default ProjectGridRow
