import { ReactNode, useEffect } from "react";

interface Iprops {
  checkBox: boolean;
  value: string;
  children: ReactNode;
  isChecked: boolean | undefined;
  onChange?: (value: string | undefined) => void;
  setValue: (value: string) => void;
  handleRemove ? : (val : string) => void
}
const SelectOption = ({
  checkBox,
  children,
  value,
  setValue,
  isChecked,
  onChange,
}: Iprops) => {

  useEffect(()=>{

    if(isChecked){
  
        onChange && onChange(value === "انتخاب کنید" ? undefined :  value);
    }
  } , [isChecked])
  return (
    <div
      onClick={() => {
        setValue(value);
        onChange && onChange(value === "انتخاب کنید" ? undefined :  value);
      }}
      className="flex flex-row-reverse items-center justify-end gap-2 hover:bg-gray-400 mb-4 px-3 py-1 hover:text-white rounded-md cursor-pointer"
    >
      {checkBox ?  (
        <>
          <label htmlFor={value}>{children}</label>
          <input
            checked={isChecked}
            type="checkbox"
            className="checkbox checkbox-sm"
            id={value}
            onChange={() => setValue(value)}
          />
        </>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};
export default SelectOption;
