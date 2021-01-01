import {GET_TASKS,CREATE_TASK,LOGIN,EDIT_TASK} from '../api/'

export const getTasksAsync= (sort_field,sort_direction,page)=>async(dispatch)=>{
    console.log(sort_field,sort_direction,page)
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
    
export const createTaskAsync= (data)=>async(dispatch)=>{
    try {
        const res = await CREATE_TASK(data)
        console.log(res);
    } catch (error) {
        console.log(error);
    }   
}
   
export const logInAsync= (data)=>async(dispatch)=>{
    try {
        const res = await LOGIN(data)
        console.log(res);
        if(res==='ok'){
            dispatch({
                type:"LOGIN",
                payload:true
            })
        }
    } catch (error) {
        console.log(error);
    }   
}
    

export const relogIn=()=>(dispatch)=>{
    dispatch({
        type:"LOGIN"
    })
}
export const logOut=()=>(dispatch)=>{
    localStorage.removeItem("token")
    dispatch({
        type:"LOG_OUT"
    })
}

export const editTaskAsync=(id,text,status)=>async(dispatch)=>{
    try {
        const res = await EDIT_TASK({
            token:localStorage.getItem("token"),
            id,
            text,
            status
        })
    } catch (error) {
        
    }
}
export const SetFilter=(filter)=>async(dispatch)=>{
    dispatch({
        type:'SET_FILTER',
        payload:filter
    })
   
}