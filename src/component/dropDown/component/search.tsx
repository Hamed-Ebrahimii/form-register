import {  LegacyRef, RefObject, forwardRef } from "react"
interface Iprops { onChange: (value: string) => void, value: string , ref? : RefObject<HTMLInputElement> } 
const Search = forwardRef(({ onChange, value  }: Iprops , ref : LegacyRef<HTMLInputElement> | undefined) => {
    return (
       
            <input type="text" ref={ref} className="bg-inherit w-full outline-none mb-4 p-2 border rounded-lg " value={value} placeholder="جست و جو" onChange={(e) => onChange(e.target.value)} />
           
    )
})
export default Search