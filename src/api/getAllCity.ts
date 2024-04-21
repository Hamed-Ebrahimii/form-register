import { httpServic } from "./httpServic"
export interface Iserver  {
    id : number,
    name : string
}
export const getAllCity =  async () =>{
    return await httpServic<Iserver[]>({
        url : '/city',
        method : 'get'
    })
}