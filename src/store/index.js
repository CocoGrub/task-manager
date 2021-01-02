import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    currentPage:1,
    loginError:null,
    isLogin:false,
    task_created:false,
    total_task_count:0,
    items: [
    {username:'', email:'',text:'',status:'',id:'' },
  ],
  filter:{
    name: 'desc',
  }
};

//reducer
const tasksList = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_TASKS':
      console.log(payload,'page')
      return {
        ...state,
        total_task_count:payload.res.data.message.total_task_count,
        items: payload.res.data.message.tasks,
        currentPage:payload.page
      }
    case 'SET_PAGE':
      return {
        ...state,
        items: payload.tasks,
        filter: {...state.filter},
        currentPage: payload.page}
    case 'LOG_IN':
      return {
        ...state,
        isLogin:true,
        loginError:false
    }
    case 'LOG_IN_ERROR_CLOSE':
      return{
        ...state,
        loginError: false
      }
    case 'LOG_OUT':
      return {
        ...state,
        isLogin:false }
    case 'TASK_CREATED':
      return {
        ...state,
        task_created:true }
    case 'TASK_CREATED_CLOSE':
      return {
        ...state,
        task_created:false
      }
    case 'LOG_IN_ERROR':
      return {
        ...state,
        loginError:true}
    case 'SET_FILTER':
      return {
        ...state,
        filter:payload}
    default:
      return state;
  }
};
const store = createStore(tasksList, composeWithDevTools(applyMiddleware(thunk)));

export default store;