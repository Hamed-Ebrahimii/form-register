import { ReactNode } from "react";

interface Iprops {
  checkBox: boolean;
  value: string;
  children: ReactNode;
  isChecked: boolean | undefined;
  onChange?: (value: string) => void;
  setValue: (value: string) => void;
}
const SelectOption = ({
  checkBox,
  children,
  value,
  setValue,
  isChecked,
  onChange,
}: Iprops) => {
  return (
    <div
      onClick={() => {
        setValue(value);
        onChange && onChange(value);
      }}
      className="flex items-center justify-between gap-2 hover:bg-slate-400 my-4 px-3 hover:text-white rounded-md cursor-pointer"
    >
      {checkBox ? (
        <>
          <label htmlFor={value}>{children}</label>
          <input
            checked={isChecked}
            type="checkbox"
            className="checkbox"
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
