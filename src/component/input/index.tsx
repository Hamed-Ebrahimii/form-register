import { Avatar } from "@mui/material";
import {  useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

import {  useState } from "react";
import { InputProps } from "./type";

const acceptType = {
  image: "image/*",
  video: "video/mp4,video/x-m4v,video/*",
  music: "audio/mp3",
  pdf: "application/pdf",
  all: "",
};
const Input = (props: InputProps) => {
  const [file] = useState<string[]>([]);
  const { mutate, isPending } = useMutation({
    mutationFn: (file: FormData) =>
      axios<AxiosResponse>("http://localhost:3000/student", {
        method: "post",
        data: file,
      }),
  });
  function isImage(filename: File) {
    const type = filename.type;
    console.log(type);

    switch (type.toLowerCase()) {
      case "image/jpg":
      case "image/gif":
      case "image/bmp":
      case "image/png":
      case "image/jpeg":
        //etc
        return true;
    }
    return false;
  }
  return (
    <div className="w-full flex flex-col items-start justify-center self-start gap-2 relative">
      <label
        className="text-sm text-gray-500 font-medium"
        htmlFor={props.htmlFor}
      >
        {props.lable}
        {props.requier && <span className="text-red-400 font-bold"> *</span>}
      </label>
      {props.type === "file" ? (
        <>
          <input
            type="file"
            multiple={props.multiple}
            onChange={(e) => {
              
              
              if( e.target.files!.length >= props.numberFile!){
                  props.setError &&  props?.setError(`تعداد فایل های انتخاب شده بیشتر از ${props.numberFile} هست`)
                  return
              }
              props.onChange && props.onChange(e);
              if (
                e.target.files &&
                props.uploadWidthChange &&
                isImage(e.target.files[0])
              ) {
                const formdata = new FormData();
                const files = Array.from(e.target.files);
                files.forEach((item) => {
                  formdata.append(item.name, item);
                });
                for (let i = 0; i < files.length; i++) {
                  file.push(URL.createObjectURL(files[i]));
                }
                mutate(formdata);
                
              }
            }}
            accept={acceptType[props.accept || "all"]}
            className={`border w-full bg-gray-100  rounded-full py-1  outline-none placeholder:text-gray-400 text-gray-500 placeholder:text-xs placeholder:font-semibold file:mr-1 file:rounded-md file:border-0 file:ml-4  file:bg-blue-500 file:py-1 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 ${
              props.type === "file" ? "px-1" : "px-5"
            } ${props.error ? "border-red-400" : "border-gray-200"}`}
          />
        </>
      ) : (
        <input
          {...props}
          className={`border w-full bg-gray-100  rounded-full py-1  outline-none placeholder:text-gray-400 text-gray-500 placeholder:text-xs placeholder:font-semibold file:mr-1 file:rounded-md file:border-0 file:ml-4  file:bg-blue-500 file:py-1 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 ${
            props.type === "file" ? "px-1" : "px-5"
          } ${props.error ? "border-red-400" : "border-gray-200"}`}
        />
      )}
      {isPending && <progress className="progress w-56"></progress>}
      {props.error && (
        <p className="text-xs text-red-400 font-medium">{props.error}</p>
      )}
      <div className="w-full flex items-center gap-3">
        {props.type === "file" &&
          file.map((item) => {
            return (
              <Avatar key={item} variant="rounded" className="cursor-pointer">
                <img src={item} alt="" />
              </Avatar>
            );
          })}
      </div>
    </div>
  );
};
export default Input;
