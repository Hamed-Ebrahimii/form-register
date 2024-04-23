import { httpServic } from "./httpServic"
export interface Iserver  {
    id : number,
    name : string
}
export const getAllCity =  async (search? : string) =>{
    const response = await httpServic<Iserver[]>({
        url : '/city',
        method : 'get'
    })
    if(search) {
        response.data = response.data.filter(item => item.name.includes(search))
    }
    return response
}