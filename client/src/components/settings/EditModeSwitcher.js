import { connect } from 'react-redux'
import React from 'react'
import './editModeSwitcher.css'
import { toggleEditMode } from '../../store/actions/changeSettings'
import mapsEditableToProps from '../shared/mapsEditableToProps'

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
        <span className="slider round" />
      </label>
    </div>
  )
}

const mapDispatchToProps = {
  toggleEditMode,
}

export default connect(
  null,
  mapDispatchToProps
)(mapsEditableToProps(EditModeSwitcher))
