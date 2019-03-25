import React from 'react';
import {connect} from 'react-redux';
import ToDoCard from './Card';
import {undoCompleteTasksAction,DeleteCompleteTasksAction} from  '../../actions/Tasks';


class CompletedList extends React.Component
{

 handleClickUndo=(e)=>{
		 const id=e.target.dataset.id;
		this.props.undoCompleteTasksData(id);
	}

	handleClickDelete=(e)=>{
		const id=e.target.dataset.id;
	 this.props.DeleteCompleteTasksData(id);
 }
render(){
	
	return(
		<div className="CompletedList">
     <h3>Completed Tasks</h3>
		
		{this.props.tasks.filter(t => t.completed).map(t=> <div key={t.id} className="display"> 
		 <ToDoCard  id={t.id}  name={t.taskName}/>
		 <div><input type="button" value=" undo " data-id={t.id} name="undo" onClick={this.handleClickUndo} />
		 <input type="button" value="delete"  data-id={t.id}  name="deleted" onClick={this.handleClickDelete} /></div> 
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
	undoCompleteTasksData:id=>dispatch(undoCompleteTasksAction(id)),
  DeleteCompleteTasksData:id=>dispatch(DeleteCompleteTasksAction(id)),
})
////data which given to action function is object because it is array of objects

export default connect(mapStateToProps,mapDispatchToProps)(CompletedList);

