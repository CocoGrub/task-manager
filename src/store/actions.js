import {GET_TASKS} from '../api/'

export const getTasksAsync= (sort_field,sort_direction,page)=>async(dispatch)=>{
    try {
        const res = await GET_TASKS(sort_field,sort_direction,page)
        dispatch({
           type : "LOAD_TASKS",
           payload :res.data.message
        })
    } catch (error) {
        console.log(error);
    }   
}
    
   
