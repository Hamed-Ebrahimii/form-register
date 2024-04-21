import { Iserver } from "./getAllCity"
import { httpServic } from "./httpServic"

export const getAllJob = async () =>{
    return await httpServic<Iserver[]>({
        url : 'job',
        method : 'get'
    })
}