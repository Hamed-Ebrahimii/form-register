

interface BoxFileProps {
  type: string;
  file: File;
  onClick: (file: File) => void;
}

interface FileManagerProps {
    type : string ,
    handleFile : (file : File[]) => void,
    multiple? : boolean,
    close? : (value : boolean) => void
}