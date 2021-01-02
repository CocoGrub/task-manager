import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const initialState = {
    currentPage:1,
    loginError:null,
    isLogin:false,
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
      return {
        ...state,
        total_task_count:payload.total_task_count,
        items: payload.tasks,
        currentPage:payload.page
      }
    case 'SET_PAGE':
      return {
        ...state,
        items: payload.tasks,
        filter: {...state.filter},
        currentPage: payload.page}
    case 'LOGIN':
      return {
        ...state,
        isLogin:true,
        loginError:false
    }
    case 'LOG_OUT':
      return {
        ...state,
        isLogin:false }
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