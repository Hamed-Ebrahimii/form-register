import {  MutationFunction, useMutation } from "@tanstack/react-query";
import axios from "axios";

import { DetailedHTMLProps } from "react";
interface Iprops
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  lable: string;
  htmlFor: string;
  requier?: boolean;
  error? : string,
  accept? : 'image' | 'video' | 'music' | 'pdf'  | 'all',
  uploadWidthChange? : boolean,
  fnUpload? : (file : File) => MutationFunction<unknown, File>
  fildeState? : boolean
}
const acceptType = {
  image : 'image/*',
  video : 'video/mp4,video/x-m4v,video/*',
  music : 'audio/mp3',
  pdf : 'application/pdf',
  all : ''
}
const Input = (props: Iprops) => {

  const {mutate , isPending} = useMutation({
    mutationFn : (data : FormData) => axios('/', {
      method : 'post',
      data
    })
  })
  return (
    <div className="w-full flex flex-col items-start justify-center self-start gap-2 relative">
      <label
        className="text-sm text-gray-500 font-medium"
        htmlFor={props.htmlFor}
      >
        {props.lable}
        {props.requier && <span className="text-red-400 font-bold"> *</span>}
      </label>
      {
        props.type === "file" ?
        <>
        <input
        type="file"
        onChange={(e)=>{
          if(e.target.files && props.uploadWidthChange){
           props.onChange && props.onChange(e)
              const formdata = new FormData()
              formdata.append(e.target.files[0].name , e.target.files[0])
              if(props.fildeState) mutate(formdata)
          }
        }}
        accept={acceptType[props.accept || 'all']}
        className={`border w-full bg-gray-100  rounded-full py-1  outline-none placeholder:text-gray-400 text-gray-500 placeholder:text-xs placeholder:font-semibold file:mr-1 file:rounded-md file:border-0 file:ml-4  file:bg-blue-500 file:py-1 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 ${props.type=== 'file' ? 'px-1' : 'px-5'} ${props.error ? 'border-red-400' : 'border-gray-200'}`}
      />
      
        </>
      :
      <input
        
        {...props}
        className={`border w-full bg-gray-100  rounded-full py-1  outline-none placeholder:text-gray-400 text-gray-500 placeholder:text-xs placeholder:font-semibold file:mr-1 file:rounded-md file:border-0 file:ml-4  file:bg-blue-500 file:py-1 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 ${props.type=== 'file' ? 'px-1' : 'px-5'} ${props.error ? 'border-red-400' : 'border-gray-200'}`}
      />
      }
      {
        isPending && <progress className="progress w-56"></progress>
      }
      {
        props.error && <p className="text-xs text-red-400 font-medium">{props.error}</p>
      }
    </div>
  );
};
export default Input;
