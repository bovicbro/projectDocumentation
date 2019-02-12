import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    editable: state.settings.editable,
  }
}

export default TargetComponent => {
  return connect(mapStateToProps)(
    class extends Component {
      render() {
        return <TargetComponent {...this.props} />
      }
    }
  )
}
