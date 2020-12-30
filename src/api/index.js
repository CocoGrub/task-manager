import axios from 'axios'

const base_URL='https://uxcandy.com/~shapoval/test-task-backend/v2'
const developer='developer=Fedor.'

const create_instance=(header_required)=>{
    const instance = axios.create({
        base_URL,
    })
    if(header_required)instance.defaults.headers.common['mimeType'] = "multipart/form-data";
    return instance
}


const LOGIN=(username,password)=> {
    return create_instance(1).post(`/login?`,{username,password})
        .then((res) => res)
        .catch((err)=>err)
}

const GET_TASK= (sort_field,sort_direction,page)=>{ 
    return create_instance().get(`${developer}&${sort_field}&${sort_direction}&${page}`)
    .then((res)=>res)
    .catch((err)=>err)}

const CREATE_TASK=(username,email,text)=>{
    return reate_instance(1).post(`/create?${developer}`,{username,email,text})
        .then((res)=>res)
        .catch((err)=>err)
}

const EDIT_TASK=(id,token,text,status)=> {
    return reate_instance(1).post(`/edid/${id}?${developer}`,{token,text,status})
    .then((res) => {
        return res.data
    })
}

export {LOGIN,GET_TASK,CREATE_TASK,EDIT_TASK}
