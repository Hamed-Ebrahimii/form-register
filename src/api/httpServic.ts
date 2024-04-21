import axios from "axios";

export const httpServic = axios.create({
    baseURL : 'http://localhost:3000'
})