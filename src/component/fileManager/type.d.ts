

interface IBoxFile {
  type: string;
  file: File;
  handleRemove: (file: File) => void;
}

interface IFileManager {
    type : string ,
    handleFile : (event : ChangeEvent<HTMLInputElement>) => void,
    multiple? : boolean
}