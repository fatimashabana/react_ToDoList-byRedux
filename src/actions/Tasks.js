export  const setTasksAction= tasks=>({type:'SET_TASKS',tasks})
export  const completeTasksAction= id=>({type:'COMPLETE_TASKS',id})
export  const deleteTasksAction= id=>({type:'DELETE_TASKS',id})
export  const undoCompleteTasksAction= id=>({type:'UNDOCOMPLETE_TASKS',id})
export  const undoDeleteTasksAction= id=>({type:'UNDODELETE_TASKS',id})
export  const completeDeleteTasksAction= id=>({type:'COMPLETE_DELETE_TASKS',id})
export  const DeleteCompleteTasksAction= id=>({type:'DELETE_COMPLETE_TASKS',id})




////id:id the second that come to it as properity
/////value:id 
