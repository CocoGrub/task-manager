import {GET_TASKS,CREATE_TASK,LOG_IN,EDIT_TASK} from '../api/'
import {createCookie, eraseCookie, readCookie} from "../utils";

export const getTasks= (sort_field, sort_direction, page)=>async(dispatch)=>{
    const htmlDecode = (input) => {
        const doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }
    try {
        const responseData = await GET_TASKS(sort_field,sort_direction,page)
        const tasks=responseData.res.data.message.tasks
        for(let i=0;i<tasks.length;i++){
            if(tasks[i].text.search(/{(.*?)}/)!==-1){
                const original=JSON.parse(htmlDecode(tasks[i].text)).original
                const edited=JSON.parse(htmlDecode(tasks[i].text)).edited
                responseData.res.data.message.tasks[i].text={
                    original,
                    edited
                }
            }else{
                responseData.res.data.message.tasks[i].text={
                    original:tasks[i].text
                }
            }
        }
        dispatch({
           type : "LOAD_TASKS",
           payload : responseData
        })
    } catch (error) {
        console.log(error);
    }   
}
    
export const createTask= (data)=>async(dispatch)=>{
    try {
        await CREATE_TASK(data)
        dispatch({
            type:'TASK_CREATED'
        })
        setTimeout(()=>{
            dispatch({type:'TASK_CREATED_CLOSE'})
        },3000)

    } catch (error) {
        console.log(error);
    }   
}
   
export const LogIN= (params)=>async(dispatch)=>{
    try {
        const data = await LOG_IN(params)
        if(data.status==='ok'){
            dispatch({
                type:"LOG_IN",
            })
            if(data.message.token!==undefined){
                localStorage.setItem("token",data.message.token)
                createCookie('token', data.message.token, 86400);
            }
            }
        else {
            dispatch({
                type:'LOG_IN_ERROR'
            })
            setTimeout(()=>{
                dispatch({type:'LOG_IN_ERROR_CLOSE'})
            },3000)
        }
    } catch (error) {
        console.log(error);
    }   
}
    

export const reLogin=()=>(dispatch)=>{
    const localToken = localStorage.getItem("token");
    if (!localToken) {
        const cookieToken = readCookie('token')
        if(cookieToken){
            localStorage.setItem("token",cookieToken)
            dispatch({
                type:"LOG_IN"
            })
        }
    }
    dispatch({
        type:"LOG_IN"
    })
}
export const LogOUT=()=>(dispatch)=>{
    localStorage.removeItem("token")
    eraseCookie('token');
    dispatch({
        type:"LOG_OUT"
    })
}

export const editTask=({id, text, status})=>async(dispatch)=>{
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