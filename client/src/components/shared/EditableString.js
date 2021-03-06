import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './editableString.css'

import mapsEditableToProps from './mapsEditableToProps'

class EditableString extends Component {
  state = {
    editing: false,
    value: !this.props.text ? '' : this.props.text,
  }

  toggleEditMode = () => {
    if (this.props.editable) {
      this.setState({
        editing: !this.state.editing,
        value: !this.props.text ? '' : this.props.text,
      })
    }
  }

  saveAndToggleEdit = () => {
    this.props.onChange(this.state.value)
    this.toggleEditMode()
  }

  resetAndToggleEdit = () => {
    this.setState({
      value: this.props.text,
    })
    this.toggleEditMode()
  }

  valueChanged = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    if (this.state.editing && this.props.editable) {
      return (
        <form onSubmit={this.saveAndToggleEdit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.valueChanged}
          />
          <button type="button" onClick={this.resetAndToggleEdit}>
            <FontAwesomeIcon icon="undo" />
          </button>
          <button type="submit">
            <FontAwesomeIcon icon="check" color="green" />
          </button>
        </form>
      )
    } else if (!this.props.text && this.props.editable) {
      return (
        <div onClick={this.toggleEditMode}>
          <FontAwesomeIcon icon="plus-square" />
        </div>
      )
    } else {
      return <div onClick={this.toggleEditMode}>{this.props.text}</div>
    }
  }
}

export default mapsEditableToProps(EditableString)
