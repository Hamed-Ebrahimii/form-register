import { Avatar } from "@mui/material"
import { FaRegFileLines } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { MdDelete, MdMusicNote } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";
const HandleICon = ({type , file} : {type : string , file : File}) =>{
    switch(type){
        case "image/jpeg" : 
        return (
            <Avatar variant="rounded">
                <img src={URL.createObjectURL(file)}/>
            </Avatar>
        );
        case "video" :
            return <FaVideo className="text-lg text-white"/>;
        case "audio" : 
        return <MdMusicNote className="text-lg text-white"/>
        case "pdf" : 
        return <FaFilePdf className="text-white text-lg"/>
        default : 
        return <FaRegFileLines className="text-lg text-white" />
    }
}
const BoxFile = ({type , file  , onClick } : BoxFileProps) =>{
    return(
        <div className="relative flex items-center w-full gap-3">

        <Avatar variant="rounded" >
                <HandleICon type={type} file={file}/>
        </Avatar>
        <p className="w-10/12 text-ellipsis text-gray-400 text-sm overflow-hidden whitespace-nowrap ">{file.name}</p>
        <button type="button" className="absolute -top-1 -right-1 size-5 flex items-center justify-center text-white rounded-full bg-red-400" onClick={()=> onClick(file)}>
        <MdDelete />
        </button>
        </div>
    )
}
export default BoxFile