

interface IBoxFile {
  type: string;
  file: File;
  handleRemove: (file: File) => void;
}

interface IFileManager {
    type : string ,
    handleFile : (file : File[]) => void,
    multiple? : boolean,
    close? : (value : boolean) => void
}