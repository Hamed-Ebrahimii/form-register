import { ReactNode, useEffect } from "react";
import { useOs } from '@mantine/hooks';
interface Iprops {
  checkBox: boolean;
  value: string;
  children: ReactNode;
  isChecked: boolean | undefined;
  onChange?: (value: string | undefined) => void;
  setValue: (value: string) => void;
  handleRemove?: (val: string) => void;
}
const SelectOption = ({
  checkBox,
  children,
  value,
  setValue,
  isChecked,
  onChange,
}: Iprops) => {
  const os = useOs()
  useEffect(() => {
    if (isChecked) {
      onChange && onChange(value === "انتخاب کنید" ? undefined : value);
      
    }
    console.log(os);
  }, [isChecked]);
  return (
    <div
      onClick={() => {
        setValue(value);
        onChange && onChange(value === "انتخاب کنید" ? undefined : value);
        console.log(isChecked);
        
      }}
      className="flex py-2 text-sm flex-row-reverse items-center justify-end gap-2 hover:bg-gray-400 mb-1 px-3  hover:text-white rounded-md cursor-pointer"
    >
      {checkBox ? (
        <>
          <label htmlFor={value}>{children}</label>
          <input
           type="checkbox"
           checked={isChecked}
           className=" h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-success checked:bg-success checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
          />
        </>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};
export default SelectOption;
