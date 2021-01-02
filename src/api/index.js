import axios from 'axios'

const URL='https://uxcandy.com/~shapoval/test-task-backend/v2'
const developer='developer=Fedor.'

const create_instance=(header_required)=>{
    const instance = axios.create({
        baseURL : URL
    })
    if(header_required)instance.defaults.headers.common['Content-Type'] = "multipart/form-data";
    return instance
}

const LOG_IN=(data)=> {
    const formData=new FormData()
    for(let i =0;i<Object.keys(data).length;i++){
        formData.append(`${Object.keys(data)[i]}`,`${data[Object.keys(data)[i]]}`)
    }
    return create_instance(1).post(`/login?${developer}`,formData)
        .then((res)=>{
            return res.data})
        .catch((err)=>err)
}

const GET_TASKS= (sort_field='id' ,sort_direction='desc',page='1')=>{
    return create_instance().get(`?${developer}&sort_field=${sort_field}&sort_direction=${sort_direction}&page=${page}`)
        .then((res)=> {
            return {res,page}
        })
        .catch((err)=>err)}

const CREATE_TASK=(data)=>{
    return create_instance(1).post(`/create?${developer}`,data)
        .then((res)=>res)
        .catch((err)=>err)
}

const EDIT_TASK=({token,id,text,status})=> {
    const formData=new FormData();
    formData.set("token",token)
    formData.set("text",text)
    formData.set("status",status)
       return create_instance(1).post(`/edit/${id}?${developer}`, formData)
        .then((res) => {
            return res.data
        })
}

export {LOG_IN,GET_TASKS,CREATE_TASK,EDIT_TASK}
