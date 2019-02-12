import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpandedProject from './ExpandedProject'
//import './projectGridRow.css';

import EditableProjectField from './EditableProjectField'
import EditableString from '../shared/EditableString'
import { updateProject } from '../../store/actions/updateProject'

class ProjectGridRow extends Component {
  state = { expanded: false }

  toggle = () => {
    this.setState({
      expanded: !this.state.expanded,
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

  updateProjectLabel = project => {
    return label => {
      let newProject = { ...project, label }
      this.props.updateProject(newProject)
    }
  }

  render() {
    return (
      <div className="projectGridRow">
        <div
          className={
            'projectGridRowItem expander ' +
            (this.state.expanded ? 'expanded' : '')
          }
          onClick={this.toggle}
        />
        <div className="projectGridRowItem">
          <div className="projectGridColumn">
            <EditableString
              text={this.props.project.label}
              onChange={this.updateProjectLabel(this.props.project)}
            />
          </div>
          {this.props.fields
            .filter(field => field.isColumn)
            .map(field => (
              <div className="projectGridColumn" key={field._id}>
                <EditableProjectField
                  project={this.props.project}
                  field={field}
                />
              </div>
            ))}
          {this.renderExpanded()}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  updateProject,
}

export default connect(
  null,
  mapDispatchToProps
)(ProjectGridRow)
