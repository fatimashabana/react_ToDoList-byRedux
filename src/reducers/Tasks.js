export default(state,action)=>{

	switch (action.type){
case 'SET_TASKS':
return {...state,tasks:[...state.tasks,action.tasks]}; 

case 'COMPLETE_TASKS':

const completedTasks=state.tasks.slice();////new copy
            ///find element in array
 const completedTask = completedTasks.find(function(element) {
	return element.id===action.id;
});
console.log(completedTask);

completedTask.completed=true;
return {...state,tasks:completedTasks};

case 'UNDOCOMPLETE_TASKS':

const undoCompleteTasks=state.tasks.slice();////new copy
            ///find element in array
 const undoCompleteTask = undoCompleteTasks.find(function(element) {
  return element.id===action.id;
});

undoCompleteTask.completed=false;
return {...state,tasks:undoCompleteTasks};

case 'DELETE_COMPLETE_TASKS':

const CompleteTasks=state.tasks.slice();////new copy
            ///find element in array
 const deleteCompleteTask = CompleteTasks.find(function(element) {
  return element.id===action.id;
});

deleteCompleteTask.deleted=true;
deleteCompleteTask.completed=false;

return {...state,tasks:CompleteTasks};


case 'DELETE_TASKS':

const deletedTasks=state.tasks.slice();////new copy
            ///find element in array
 const deletedTask = deletedTasks.find(function(element) {
  return element.id===action.id;
});

deletedTask.deleted=true;
return {...state,tasks:deletedTasks};

case 'UNDODELETE_TASKS':

const DeleteTasks=state.tasks.slice();////new copy
            ///find element in array
 const undodeleteTask = DeleteTasks.find(function(element) {
  return element.id===action.id;
});

undodeleteTask.deleted=false;
return {...state,tasks:DeleteTasks};

case 'COMPLETE_DELETE_TASKS':

const DeletedTasks=state.tasks.slice();////new copy
            ///find element in array
 const completeDeleteTask = DeletedTasks.find(function(element) {
  return element.id===action.id;
});

completeDeleteTask.deleted=false;
completeDeleteTask.completed=true;

return {...state,tasks:DeletedTasks};

default:
return state;

	}
}
