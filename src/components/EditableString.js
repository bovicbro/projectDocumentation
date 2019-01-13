import React, { Component } from "react";

class EditableString extends Component {
  constructor(props) {
    super(props);

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.state = {
      editing: false
    };
  }

  toggleEditMode() {
    this.setState({ editing: !this.state.editing });
  }

  render() {
    if (this.state.editing) {
      return (
        <div>
          <input type="text" defaultValue={this.props.text} />
          <button onClick={this.toggleEditMode}>Save</button>
        </div>
      );
    } else {
      return <div onClick={this.toggleEditMode}>{this.props.text}</div>;
    }
  }
}
export default EditableString;
