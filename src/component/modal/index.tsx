
import { ReactNode } from "react"

const Modal = ({children } : {children : ReactNode , ref? : React.MutableRefObject<HTMLDivElement>}) =>{
   
    return(
        <div  className="w-screen h-screen fixed top-0 left-0 bg-black/50 flex items-center justify-center z-50">
                
                {
                    children
                }
        
                </div>
               
    )
}
export default Modal