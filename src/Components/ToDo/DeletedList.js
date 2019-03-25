import React from 'react';
import {connect} from 'react-redux';
import ToDoCard from './Card';
import {undoDeleteTasksAction,completeDeleteTasksAction} from  '../../actions/Tasks';



class DeletedList extends React.Component
{
	handleClickUndo=(e)=>{
		const id=e.target.dataset.id;
		this.props.undoDeleteTasksAction(id);
 }

 
	handleClickComplete=(e)=>{
		const id=e.target.dataset.id;
		this.props.completeDeleteTasksAction(id);
 }

 

render(){
	
	return(
		<div className="DeletedList">
     <h3>Deleted Tasks</h3>
		
		{this.props.tasks.filter(t => t.deleted).map(t=> <div key={t.id} className="display"> 
		 <ToDoCard  id={t.id}  name={t.taskName}/>
		 <div><input type="button" value="  undo   " data-id={t.id} name="undo" onClick={this.handleClickUndo} />
		 <input type="button" value="complete" data-id={t.id}  name="" onClick={this.handleClickComplete} /></div> 
		 </div>
		 )}  
		</div>
	)
}
}

const mapStateToProps=state=>({
	tasks:state.tasks
})

const mapDispatchToProps=dispatch=>({
	undoDeleteTasksAction:id=>dispatch(undoDeleteTasksAction(id)),
	completeDeleteTasksAction:id=>dispatch(completeDeleteTasksAction(id))
})
////data which given to action function is object because it is array of objects

export default connect(mapStateToProps,mapDispatchToProps)(DeletedList);






