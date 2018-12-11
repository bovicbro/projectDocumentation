import {connect} from 'react-redux';
import React, { Component } from 'react';
import './projectGrid.css';
import ProjectGridRow from './ProjectGridRow'

class ProjectGrid extends Component {
  render() {
	const projects=this.props.projects
	const fields=this.props.fields
	return (
	  <div className="projectGrid">
	  	<div className="projectGridRow" id="projectGridHeader">
	  	{fields.map(field=>{
	  		return (
		  		<div className="projectGridColumn">{field.label}</div>
		  	)
	  	})}
	  	</div>
	  	{projects.map(project=><ProjectGridRow project={project}/>)}
	  </div>
	)
  }
}

const mapStateToProps = (state)=>{
	return{
		projects:state.projects,
		fields:state.fields.filter(field=>field.isColumn)
	}
};

export default connect(mapStateToProps)(ProjectGrid);
