import axios from 'axios'

const URL='https://uxcandy.com/~shapoval/test-task-backend/v2'
const developer='developer=Fedor.'

const create_instance=(header_required)=>{
    const instance = axios.create({
        baseURL : URL
    })
    if(header_required)instance.defaults.headers.common['mimeType'] = "multipart/form-data";
    return instance
}




const LOGIN=(username,password)=> {
    return create_instance(1).post(`/login?`,{username,password})
        .then((res) => res)
        .catch((err)=>err)
}

const GET_TASKS= (sort_field='id' ,sort_direction='desc',page='1')=>{ 
    return create_instance().get(`?${developer}&sort_field=${sort_field}&sort_direction=${sort_direction}&page=${page}`)
        .then((res)=>res)
        .catch((err)=>err)}

const CREATE_TASK=(username,email,text)=>{
    return create_instance(1).post(`/create?${developer}`,{username,email,text})
        .then((res)=>res)
        .catch((err)=>err)
}

const EDIT_TASK=(id,token,text,status)=> {
    return create_instance(1).post(`/edit/${id}?${developer}`,{token,text,status})
        .then((res) => {
            return res.data
        })
}

export {LOGIN,GET_TASKS,CREATE_TASK,EDIT_TASK}
