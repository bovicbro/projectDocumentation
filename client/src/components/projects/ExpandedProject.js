import React, { Component } from 'react'
import './expandedProject.css'
import EditableFieldLabel from '../fields/EditableFieldLabel'
import { updateProject } from '../../store/actions/updateProject'
import { removeProject } from '../../store/actions/removeProject'
import { connect } from 'react-redux'
import EditableProjectField from './EditableProjectField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        {this.renderDeleteButton()}
      </div>
    )
  }

  renderDeleteButton() {
    if (!this.props.editable) return null
    return (
      <span onClick={this.removeProject}>
        <FontAwesomeIcon icon="times" />
      </span>
    )
  }

  removeProject = () => {
    this.props.removeProject(this.props.project)
  }
}
const mapStateToProps = state => {
  return {
    editable: state.settings.editable,
  }
}

const mapDispatchToProps = {
  updateProject,
  removeProject,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpandedProject)
