import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./editableString.css";

class EditableString extends Component {
  constructor(props) {
    super(props);

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.saveAndToggleEdit = this.saveAndToggleEdit.bind(this);
    this.resetAndToggleEdit = this.resetAndToggleEdit.bind(this);
    this.valueChanged = this.valueChanged.bind(this);

    console.log(this.props.text);
    this.state = {
      editing: false,
      value: !this.props.text ? "" : this.props.text
    };
  }

  toggleEditMode() {
    if (this.props.editable) {
      this.setState({
        editing: !this.state.editing,
        value: !this.props.text ? "" : this.props.text
      });
    }
  }

  saveAndToggleEdit() {
    this.props.onChange(this.state.value);
    this.toggleEditMode();
  }

  resetAndToggleEdit() {
    this.setState({
      value: this.props.text
    });
    this.toggleEditMode();
  }

  valueChanged(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    if (this.state.editing && this.props.editable) {
      return (
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.valueChanged}
          />
          <button onClick={this.resetAndToggleEdit}>
            <FontAwesomeIcon icon="undo" />
          </button>
          <button onClick={this.saveAndToggleEdit}>
            <FontAwesomeIcon icon="check" color="green" />
          </button>
        </div>
      );
    } else if (!this.props.text && this.props.editable) {
      return (
        <div onClick={this.toggleEditMode}>
          <FontAwesomeIcon icon="plus-square" />
        </div>
      );
    } else {
      return <div onClick={this.toggleEditMode}>{this.props.text}</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    editable: state.settings.editable
  };
};

export default connect(mapStateToProps)(EditableString);
