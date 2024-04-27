import { httpServic } from "./httpServic"

export const createStudent = async (data : FormData) =>{
        return await httpServic('/student' , {
            method : 'post',
            data 
        })
}