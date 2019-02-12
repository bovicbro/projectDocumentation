import React, { Component } from "react"
import { connect } from "react-redux"
import EditableString from "../shared/EditableString"
import { updateField } from "../../store/actions/updateField"

class EditableFieldLabel extends Component {
  updateFieldLabel = label => {
    this.props.updateField({ ...this.props.field, label })
  }

  render() {
    return (
      <EditableString
        text={this.props.field.label}
        onChange={this.updateFieldLabel}
      />
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  updateField
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableFieldLabel)
