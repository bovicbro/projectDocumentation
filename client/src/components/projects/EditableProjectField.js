import React, { Component } from "react"
import { connect } from "react-redux"
import EditableString from "../shared/EditableString"
import { updateProject } from "../../store/actions/updateProject"
import ProjectUtil from "../../utils/ProjectUtil"

class EditableProjectField extends Component {
  updateProjectValue = value => {
    const project = { ...this.props.project }
    let found = false
    project.values = project.values.map(fieldValue => {
      if (fieldValue.fieldId === this.props.field._id) {
        found = true
        return {
          ...fieldValue,
          value
        }
      } else {
        return fieldValue
      }
    })
    if (!found) {
      project.values.push({
        fieldId: this.props.field._id,
        value
      })
    }

    this.props.updateProject(project)
  }

  render() {
    return (
      <EditableString
        text={ProjectUtil.getFieldValue(
          this.props.project,
          this.props.field._id
        )}
        onChange={this.updateProjectValue}
      />
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  updateProject
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableProjectField)
