import {  LegacyRef, RefObject, forwardRef } from "react"
interface SearchProps { onChange: (value: string) => void, value: string , ref? : RefObject<HTMLInputElement> } 
const Search = forwardRef(({ onChange, value  }: SearchProps , ref : LegacyRef<HTMLInputElement> | undefined) => {
    return (
       
            <input type="text" ref={ref} className="bg-gray-50 w-full outline-none mb-2 py-1 px-3 border rounded-lg " value={value} placeholder="جست و جو" onChange={(e) => onChange(e.target.value)} />
           
    )
})
export default Search