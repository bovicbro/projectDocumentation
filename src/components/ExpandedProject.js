import React, { Component } from "react"
import "./expandedProject.css"
import ProjectUtil from "../utils/ProjectUtil"
import EditableString from "./EditableString"
import { updateProject } from "../store/actions/updateProject"
import { connect } from "react-redux"
class ExpandedProject extends Component {
  constructor(props) {
    super(props)

    this.updateProjectValue = this.updateProjectValue.bind(this)
  }

  updateProjectValue(fieldId) {
    return value => {
      const project = { ...this.props.project }
      project.values = project.values.map(fieldValue => {
        if (fieldValue.fieldId === fieldId) {
          return {
            ...fieldValue,
            value
          }
        } else {
          return fieldValue
        }
      })
      this.props.updateProject(project)
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
    )
  }
}
const mapStateToProps = state => {
  return {
    editable: state.settings.editable
  }
}

const mapDispatchToProps = {
  updateProject
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpandedProject)
