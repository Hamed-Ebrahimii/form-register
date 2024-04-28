import { HTMLAttributes } from "react";

interface IdataList extends HTMLAttributes<HTMLDataListElement> {
  error?: string;
  data: string[];
}
const Datalist = (props: IdataList) => {
  return (
    <div>
      <datalist
        id="data"
        {...props}
        className={`border w-full bg-gray-100  rounded-full py-1  outline-none placeholder:text-gray-400 text-gray-500 placeholder:text-xs placeholder:font-semibold file:mr-1 file:rounded-md file:border-0 file:ml-4  file:bg-blue-500 file:py-1 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700  ${
          props.error ? "border-red-400" : "border-gray-200"
        }`}
      >
        {props.data.map((item) => (
          <option className="w-full font-yekan" key={item} value={item} />
        ))}
      </datalist>
    </div>
  );
};
export default Datalist;
