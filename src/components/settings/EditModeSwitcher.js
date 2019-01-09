import { connect } from "react-redux"
import React from "react"
import "./editModeSwitcher.css"
import { toggleEditMode } from "../../store/actions/changeSettings"

const EditModeSwitcher = ({ editable, toggleEditMode }) => {
  return (
    <div className="headerContainer">
      <p>Edit Mode</p>
      <label className="switch">
        <input
          className="checkbox"
          name="editable"
          type="checkbox"
          checked={editable}
          onChange={toggleEditMode}
        />
        <span class="slider round"></span>
      </label>
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
