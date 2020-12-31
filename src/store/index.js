import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const inintialState = {
    total_task_count:0,
    items: [
    { email:'',text:'',status:'' },
  ],
  filter:{
    sort_field:'id',
    sort_direction:'desc',
    page:1
  }
};


//reducer
const tasksList = (state = inintialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_TASKS':
      return {
        ...state,
        total_task_count:payload.total_task_count,
        items: payload.tasks }
    case 'SET_PAGE':
      return {
        ...state,
        items: payload.tasks,
        filter: {...state.filter,page:payload.page} }
    default:
      return state;
  }
};
const store = createStore(tasksList, composeWithDevTools(applyMiddleware(thunk)));

export default store;