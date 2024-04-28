import { CiFileOff } from "react-icons/ci"
import Modal from "../modal"
import { GoFileDirectory } from "react-icons/go"
import { useState } from "react"
import BoxFile from "./boxFile"
import { FaCloudUploadAlt } from "react-icons/fa"
const FileManager = ({handleFile , type , multiple} : IFileManager) =>{
    const [listFile , setListFile] = useState<File[]>([])
    const handleremove = (file : File) =>{
        setListFile(listFile.filter(item => item.name !== file.name))
    }
    return(
        <Modal >
          <div  className="w-1/2 bg-white rounded-lg px-3 py-2 grid grid-cols-3">
            <div className="col-span-2 border-l justify-center w-full flex items-center flex-col">
            {
                listFile.length <=0  && <>
                <CiFileOff className="text-8xl mx-auto"/>
                <span className="text-lg font-semibold text-gray-500">موردی انتخاب نشده </span>
                </>
            }
            <div className="w-full grid grid-cols-2 gap-3 max-h-48 p-6 overflow-auto">
            {
                listFile.map(item => <BoxFile key={item.name} file={item} type={item.type} handleRemove={handleremove}/>)
            }
            </div>
            </div>
            <label htmlFor="file">

            <div className="w-full flex items-center justify-center cursor-pointer">
                <div className="p-4 border-2 w-11/12 border-dashed space-y-4 flex flex-col items-center">
                <GoFileDirectory className="text-6xl" />
                <p className=" font-bold text-gray-500">انتخاب کنید</p>
                </div>
            </div>
            </label>
            <input type="file" accept={type} name="" id="file" className="hidden"
            multiple={multiple}
                onChange={(e)=>{
                    setListFile(Array.from(e.target.files!))
                    handleFile(e)
                }}
            />
            <div className="col-span-2 flex justify-center mt-5">
                  <button type="button" className="btn btn-success btn-sm text-white">
                        آپلود
                        <FaCloudUploadAlt />
                  </button>
            </div>
          </div>
        </Modal>
    )
}
export default FileManager