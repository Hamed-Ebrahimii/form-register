import { Iserver } from "./getAllCity"
import { httpServic } from "./httpServic"

export const getAllEducation = async (search : string) =>{
    const response = await httpServic<Iserver[]>({
        url : '/education',
        method : 'get'
    })
    if(search) {
        response.data = response.data.filter(item => item.name.includes(search))
    }
    return response
}