import {createStore}   from 'redux';
import TasksReducer   from './reducers/Tasks';



const initialState={
	tasks:[],
}

const store = createStore(TasksReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;