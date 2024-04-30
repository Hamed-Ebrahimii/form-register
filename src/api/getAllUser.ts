import axios, {  } from "axios"
import { ISearch } from "../components/dropDown/type"

interface ResponseApi {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng":string
      }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
  }
export const getAllUser = async (search : ISearch)=> {
        const response = await axios<ResponseApi[]> ({
            url : `https://jsonplaceholder.typicode.com/users?${search.name && 'q='}${name}`
        })

        return response
        
}