import { Avatar } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { InputProps } from "./type";
import Modal from "../modal";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";
interface Accept {
  image: "image/*";
  video: "video/mp4,video/x-m4v,video/*";
  music: "audio/mp3";
  pdf: "application/pdf";
  all: "";
}
const acceptType: Accept = {
  image: "image/*",
  video: "video/mp4,video/x-m4v,video/*",
  music: "audio/mp3",
  pdf: "application/pdf",
  all: "",
};
type AcceptInput = "image" | "video" | "music" | "pdf" | "all";
const Input = (props: InputProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationFn: (file: FormData) =>
      axios<AxiosResponse>("http://localhost:3000/student", {
        method: "post",
        data: file,
      }),
  });
  function checkType(files: FileList, type: AcceptInput) {
    const listFile = Array.from(files);
    let checked: boolean = true;
    listFile.map((item) => {
      checked = item.type.includes(acceptType[type]);
    });
    return checked;
  }
  const handleRemoveFile = (item: File) => {
    setFile(file.filter((value) => value.name !== item.name));
  };
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
          {props.multiple ? (
            <div className="w-full flex items-center px-2 py-0.5 gap-4 border bg-gray-100 rounded-full">
              <button
                type="button"
                className="btn bg-blue-500 btn-sm text-white"
              >
                Choose Files
              </button>
              <p className="text-gray-500 font-medium">No file choosen</p>
            </div>
          ) : (
            <input
              type="file"
              multiple={props.multiple}
              onChange={(e) => {
                if (e.target.files!.length > props.numberFile!) {
                  props.setError &&
                    props?.setError(
                      `تعداد فایل های انتخاب شده بیشتر از ${props.numberFile} هست`
                    );
                  return;
                }
                props.onChange && props.onChange(e);
                if (
                  e.target.files &&
                  props.uploadWidthChange &&
                  checkType(e.target.files, props.accept || "all")
                ) {
                  const formdata = new FormData();
                  const files = Array.from(e.target.files);
                  setFile([...file, ...files]);
                  mutate(formdata);
                }
              }}
              accept={acceptType[props.accept || "all"]}
              className={`border w-full bg-gray-100  rounded-full py-1  outline-none placeholder:text-gray-400 text-gray-500 placeholder:text-xs placeholder:font-semibold file:mr-1 file:rounded-md file:border-0 file:ml-4  file:bg-blue-500 file:py-1 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 ${
                props.type === "file" ? "px-1" : "px-5"
              } ${props.error ? "border-red-400" : "border-gray-200"}`}
            />
          )}
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
              <div className="" key={item.name}>
                <Avatar
                  onClick={() => setShowImagePreview(true)}
                  variant="rounded"
                  className="cursor-pointer"
                >
                  <img src={URL.createObjectURL(item)} alt="" />
                </Avatar>
                {showImagePreview && (
                  <Modal>
                    <div
                      className="w-1/4 bg-white p-5 rounded-lg space-y-4"
                      onClick={() => setShowImagePreview(false)}
                    >
                      <button type="button">
                        <IoMdCloseCircleOutline />
                      </button>
                      <img
                        src={URL.createObjectURL(item)}
                        alt=""
                        className="size-32 rounded-md mx-auto"
                      />
                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-error text-white  rounded"
                          onClick={() => handleRemoveFile(item)}
                        >
                          حذف فایل
                          <FaRegTrashCan />
                        </button>
                      </div>
                    </div>
                  </Modal>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Input;
