import {GET_TASKS,CREATE_TASK,LOGIN,EDIT_TASK} from '../api/'

export const getTasksAsync= (sort_field,sort_direction,page)=>async(dispatch)=>{
    const htmlDecode = (input) => {
        const doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }
    try {
        const res = await GET_TASKS(sort_field,sort_direction,page)
        const tasks=res.data.message.tasks
        for(let i=0;i<tasks.length;i++){
            console.log(tasks[i].text.search(/{/))
            if(tasks[i].text.search(/{(.*?)}/)!==-1){
                const original=JSON.parse(htmlDecode(tasks[i].text)).original
                const edited=JSON.parse(htmlDecode(tasks[i].text)).edited
                res.data.message.tasks[i].text={
                    original,
                    edited
                }
            }else{
                res.data.message.tasks[i].text={
                    original:tasks[i].text
                }
            }
        }
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
        if(res==='ok'){
            dispatch({
                type:"LOGIN",
            })
        }else {
            dispatch({
                type:'LOG_IN_ERROR'
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

export const editTaskAsync=({id, text, status})=>async(dispatch)=>{
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