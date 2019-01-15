import React, { Component } from "react";
import { connect } from "react-redux";

class EditableString extends Component {
  constructor(props) {
    super(props);

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.saveAndToggleEdit = this.saveAndToggleEdit.bind(this);
    this.valueChanged = this.valueChanged.bind(this);

    this.state = {
      editing: false,
      value: this.props.text
    };
  }

  toggleEditMode() {
    this.setState({ editing: !this.state.editing });
  }

  saveAndToggleEdit() {
    this.props.onChange(this.state.value);
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
          <button onClick={this.saveAndToggleEdit}>Save</button>
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
