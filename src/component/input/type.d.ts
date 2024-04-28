import { MutationFunction } from "@tanstack/react-query";
import React, { DetailedHTMLProps } from "react";

interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  lable: string;
  htmlFor: string;
  requier?: boolean;
  error?: string;
  accept?: "image" | "video" | "music" | "pdf" | "all";
  uploadWidthChange?: boolean;
  fnUpload?: (file: File) => MutationFunction<unknown, File>;
  isPending?: boolean;
  numberFile? : number,
  setError?  : (error : string) => void
}