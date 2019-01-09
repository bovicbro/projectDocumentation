import { connect } from "react-redux"
import React from "react"

import { toggleEditMode } from "../../store/actions/changeSettings"

const EditModeSwitcher = ({ editable, toggleEditMode }) => {
  return (
    <div>
      <input
        name="editable"
        type="checkbox"
        checked={editable}
        onChange={toggleEditMode}
      />
      Editable
    </div>
  )
}

const mapStateToProps = state => {
  return {
    editable: state.settings.editable
  }
}

const mapDispatchToProps = {
  toggleEditMode
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModeSwitcher)
