import React, { Component } from "react"
import "./expandedProject.css"
import EditableFieldLabel from "../fields/EditableFieldLabel"
import { updateProject } from "../../store/actions/updateProject"
import { connect } from "react-redux"
import EditableProjectField from "./EditableProjectField"
class ExpandedProject extends Component {
  render() {
    return (
      <div className="expandedProject">
        <div className="ProjectValueContainer">
          {this.props.fields.map(field => (
            <div className="ProjectValue" key={field._id}>
              <strong>
                <EditableFieldLabel field={field} />
              </strong>
              <EditableProjectField
                field={field}
                project={this.props.project}
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
