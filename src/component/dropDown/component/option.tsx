import {  ReactNode } from "react"

interface Iprops {
    checkBox : boolean
    value : string,
    children : ReactNode,
    isChecked : boolean | undefined
   
    setValue : (value : string) => void
}
const SelectOption = ({checkBox , children , value  , setValue , isChecked} : Iprops) =>{
    return(
        <div  className="flex items-center justify-between gap-2 hover:bg-slate-400 my-4 px-3 hover:text-white rounded-md cursor-pointer">
            {
                checkBox ? 
                <> 
                <label htmlFor={value}>{children}</label>
                    <input checked={isChecked} type="checkbox" className="checkbox" id={value} onChange={()=>  setValue(value)}/>
                </>
                :
                <div onClick={()=>setValue(value)}>
                        {
                            children
                        }
                </div>
            }
        </div>
    )
}
export default SelectOption