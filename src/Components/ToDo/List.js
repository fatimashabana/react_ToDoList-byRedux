import React from 'react';
import {connect} from 'react-redux';
import  uuidv4 from 'uuid/v4';
import {setTasksAction,completeTasksAction,deleteTasksAction} from  '../../actions/Tasks';
import ToDoCard from './Card';



 class ToDoList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		taskName:""
						}
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleClickDeleted=this.handleClickDeleted.bind(this);
		this.handleClickCompleted=this.handleClickCompleted.bind(this);
	}

	handleChange(e){
	 const taskName=e.target.value;
	 this.setState({taskName: taskName	})

	}

	handleSubmit(e){
				 
		e.preventDefault();
		if (!this.state.taskName) return;
								
		const task=	{id:uuidv4(),
		taskName:this.state.taskName,
		completed:false,
		deleted:false
		}
   	  this.props.setTasksData(task);
			 this.setState({	taskName:""	});

			console.log(this.state);
			
		}
		
		handleClickCompleted(e){
			const id=	e.target.dataset.id;
			console.log(id);
			this.props.completeTasksData(id);
		}
		
		
		handleClickDeleted(e){
			const id=	e.target.dataset.id;
			console.log(id);
			this.props.deleteTasksData(id);
		}
		
		render() {
			console.log(this.props);
			return (
				<>
			<form onSubmit={this.handleSubmit} >
				<div className="form-group display ">
					<input type="text" onChange={this.handleChange} value={this.state.taskName} className="form-control" id="" placeholder="Enter task name" />
					<button type="submit">Add</button>
				</div>
			</form>

		   	<div className="ToDoList">
			<h3>To Do Tasks</h3>
			   {this.props.tasks.filter(t => !(t.completed||t.deleted)).map(t=> <div key={t.id}  className="display"> 
					<ToDoCard id={t.id}  name={t.taskName}/>
					<div><input type="button" value="complete" data-id={t.id} name="completed" onClick={this.handleClickCompleted} />
					<input type="button" value="  delete   " data-id={t.id} name="deleted" onClick={this.handleClickDeleted} /></div> 
					</div>
					)}  
   			</div>
			</>
		)
	}

}

const mapStateToProps=state=>({
	tasks:state.tasks
})

const mapDispatchToProps=dispatch=>({
	setTasksData:data=>dispatch(setTasksAction(data)),
	completeTasksData:id=>dispatch(completeTasksAction(id)),
	deleteTasksData:id=>dispatch(deleteTasksAction(id))

})
////data which given to action function is object because it is array of objects

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);

// onClick={this.handleDelete}
// onClick={this.handleComplete}