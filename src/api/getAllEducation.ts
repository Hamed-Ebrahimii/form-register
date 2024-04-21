import { Iserver } from "./getAllCity"
import { httpServic } from "./httpServic"

export const getAllEducation = async () =>{
    return await httpServic<Iserver[]>({
        url : '/education',
        method : 'get'
    })
}