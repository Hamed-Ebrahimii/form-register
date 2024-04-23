import { HTMLAttributes, ReactNode } from "react";

interface Iprops extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  multiple?: boolean;
  search?: boolean;
  isLoading?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  fnData: Function;
  setSearchValue?: Dispatch<React.SetStateAction<ISearch>>;
  checkBox?: boolean;
  data?: string[];
  searchData?: ISearch;
  name:
    | "name"
    | "website"
    | "company"
    | "phone"
    | "city"
    | "job"
    | "education"
    | "militaryService";
  lable: string;
  requier?: boolean;
  error?: string;
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
}
interface ISearch {
  name: string;
  website: string;
  company: string;
  phone: string;
  city: string;
  job: stringو;
  education: string;
  militaryService;
}
