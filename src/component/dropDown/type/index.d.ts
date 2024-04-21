import { HTMLAttributes, ReactNode } from "react";

interface Iprops extends HTMLAttributes<HTMLDivElement> {
    children? : ReactNode,
    multiple? : boolean,
    search? : boolean,
    isLoading? : boolean,
    fnData : Function,
   
    setSearchValue? : Dispatch<React.SetStateAction<ISearch>>
    checkBox? : boolean,
    data? : string[]
    searchData? : ISearch
    name : "name" | "website" | "company" | "phone" | "city" | "job" | "education",
    lable : string
    requier? : boolean

}
interface ISearch  {
    name : string,
    website : string,
    company : string,
    phone : string
    city : string,
    job : stringو
    education : string
}
