import { useEffect, useState } from "react";
import SelectOption from "./component/option";
import Search from "./component/search";
import { ISearch, Iprops } from "./type";
import anime from "animejs/lib/anime.es.js";
import { MdOutlineArrowDropDown } from "react-icons/md";
const DropDown = (props: Iprops) => {
  const [showDrop, setShowDrop] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const [selected, setSelected] = useState(props.placeholder || "");
  const handleItem = (data: string) => {
    setShowDrop(false);
    const response = value.findIndex((item) => item === data);
    if (props.multiple) {
      if (response === -1) {
        setValue([...value, data]);
      } else {
        setValue(value.filter((item) => item !== data));
      }
      return;
    }
    if (response >= 0) {
      setValue([""]);
      return;
    }
    setValue([data]);
    setSelected(data);
  };
  const handleShowAnime = () => {
    anime({
      targets: ".drop",
      opacity: "1",
      duration: 3000,
    }).play();
  };
  const animeRotate = () => {
    anime({
      targets: `.${props.name}`,
      rotate: showDrop ? "360deg" : "180deg",
      duration: 1000,
    }).play();
  };
  useEffect(() => {
    if (showDrop) {
      handleShowAnime();
    }
    animeRotate();
  }, [showDrop]);
  return (
    <div
      className={"flex flex-col w-full gap-2 bg-inherit rounded-lg  relative "}
    >
      <label
        className="text-sm text-gray-500 font-medium"
        htmlFor={props.lable}
      >
        {props.lable}
        {props.requier && <span className="text-red-400 font-bold"> *</span>}
      </label>
      <button
        type="button"
        className={`bg-gray-100 border min-w-32 text-ellipsis overflow-hidden whitespace-nowrap text-xs py-2 px-2 md:px-5 rounded-full focus:border-blue-300 text-gray-400  font-bold flex items-center justify-between ${
          props.error ? "border-red-400" : "border-gray-200 "
        }`}
        onClick={() => {
          setShowDrop(!showDrop);
          animeRotate();
        }}
      >
        <span>{selected}</span>
        <MdOutlineArrowDropDown />
      </button>
      {showDrop && (
        <div className="drop opacity-0 bg-slate-100 px-3  rounded-lg mt-5 max-h-40 py-5 overflow-auto absolute z-20 top-12 w-full">
          {props.search && (
            <Search
              value={(props.searchData && props.searchData[props.name]) || ""}
              onChange={(e) => {
                const newState: ISearch = JSON.parse(
                  JSON.stringify(props.searchData)
                );
                newState[props.name] = e;
                props.setSearchValue(newState);
              }}
            />
          )}
          {props.children ? (
            props.children
          ) : props.data?.length === 0 ? (
            <SelectOption
              isChecked={false}
              setValue={handleItem}
              checkBox={props.checkBox || false}
              children={["please whate"]}
              value={""}
            />
          ) : (
            props.data?.map((item) => (
              <SelectOption
                onChange={props.onChange}
                isChecked={props.multiple ? undefined : value.includes(item)}
                setValue={handleItem}
                checkBox={props.checkBox || false}
                key={item}
                children={item}
                value={item}
              />
            ))
          )}
        </div>
      )}
      {props.multiple && (
        <div className="w-10/12 grid grid-cols-2 gap-4 absolute mt-6">
          {value &&
            value.map((item) => (
              <div key={item} className="badge badge-neutral">
                {item}
              </div>
            ))}
        </div>
      )}
      {props.error && (
        <p className="text-xs text-red-400 font-medium">{props.error}</p>
      )}
    </div>
  );
};
export default DropDown;
