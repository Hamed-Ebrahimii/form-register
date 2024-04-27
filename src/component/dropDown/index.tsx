import { useEffect, useRef, useState } from "react";
import SelectOption from "./component/option";
import Search from "./component/search";
import { ISearch, Iprops } from "./type";
import anime from "animejs/lib/anime.es.js";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useClickOutside } from "@mantine/hooks";
const DropDown = (props: Iprops) => {
  const [selectAll, setSelectAll] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const [showDrop, setShowDrop] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const [selected, setSelected] = useState(props.placeholder || "");
  const ref = useClickOutside(() => setShowDrop(false));
  const handleItem = (data: string) => {
    const response = value.findIndex((item) => item === data);
    if (props.multiple) {
      if (response === -1) {
        setValue([...value, data]);
        setSelected(data);
      } else {
        setValue(value.filter((item) => item !== data));
        setSelected(data);
      }
      return;
    }
    if (response >= 0) {
      setValue([""]);
      setSelected(data);
      return;
    }
    setValue([data]);
    setSelected(data);
    props.setSearchValue("");
  };
  const handleRemove = (name: string) => {
    setValue(value.filter((item) => item !== name));
    setSelected("انتخاب کنید");
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
  const newState: ISearch = JSON.parse(JSON.stringify(props.searchData || {}));
  useEffect(() => {
    if (showDrop) {
      handleShowAnime();
    }
    animeRotate();
  }, [showDrop]);
  useEffect(() => {
    if (selectAll) {
      setValue(props.data || []);
      setSelected("");
    } else {
      setValue([]);
    }
  }, [selectAll]);

  return (
    <div
      ref={ref}
      id="drop"
      className={"flex flex-col w-full gap-2 bg-inherit rounded-lg  relative "}
    >
      <label
        className="text-sm text-gray-500 font-medium"
        htmlFor={props.lable}
      >
        {props.lable}
        {props.requier && <span className="text-red-400 font-bold"> *</span>}
      </label>
      <div
        className={`bg-gray-100 border rounded-lg w-full text-ellipsis overflow-hidden whitespace-nowrap text-xs py-2 px-2   focus:border-blue-300 text-gray-400  font-bold flex items-center justify-center ${
          props.error ? "border-red-400" : "border-gray-200 "
        }`}
      >
        <button
          type="button"
          className={`drop bg-inherit outline-none w-full text-ellipsis overflow-hidden whitespace-nowrap text-xs   rounded-full focus:border-blue-300 text-gray-400  font-bold flex items-center justify-between ${
            props.error ? "border-red-400" : "border-gray-200 "
          }`}
          onClick={() => {
            setShowDrop(!showDrop);
            animeRotate();
          }}
          onKeyDown={() => {
            input.current?.focus();
          }}
        >
          <span>{selected}</span>
          <MdOutlineArrowDropDown className="text-xl" />
        </button>
        {showDrop && (
          <div className="drop opacity-0 bg-gray-100 border px-3  rounded-lg mt-5 max-h-40 py-2 overflow-auto absolute z-40 top-11 w-full">
            <div className="w-full flex items-center gap-4">
              <div className="w-full">
                <div className="py-1 mb-2 border-b flex">
                {props.selectAll && (
                  <SelectOption
                    onChange={props.onChange}
                    isChecked={selectAll}
                    setValue={(e) => {
                      
                      setSelectAll(!selectAll)
                      console.log(selectAll);
                      setValue([...value , e])
                      if (selectAll) {
                        setValue(props.data || []);
                      }
                      if (selectAll === false) {
                        setValue([]);
                      }
                    }}
                    checkBox={true}
                    children={" همه"}
                    value={" همه"}
                  />
                )}
                {props.search && (
                  <Search
                    ref={input}
                    value={
                      (props.searchData && props.searchData[props.name]) || ""
                    }
                    onChange={(e) => {
                      newState[props.name] = e;
                      props.setSearchValue(newState);
                      setSelectAll(false);
                    }}
                  />
                )}
                </div>
                
              </div>
            </div>
            {props.children ? (
              props.children
            ) : props.data?.length === 0 ? (
              <SelectOption
                isChecked={false}
                setValue={handleItem}
                checkBox={props.checkBox || false}
                children={["گزینه ای یافت نشد"]}
                value={""}
              />
            ) : (
              <>
                {!props.search && (
                  <SelectOption
                    onChange={props.onChange}
                    isChecked={
                      props.multiple ? undefined : value.includes("انتخاب کنید")
                    }
                    setValue={handleItem}
                    checkBox={false}
                    children={"انتخاب کنید"}
                    value={"انتخاب کنید"}
                  />
                )}
                
                {props.data?.map((item) => (
                  <SelectOption
                    onChange={props.onChange}
                    isChecked={selectAll || value.includes(item)}
                    setValue={handleItem}
                    checkBox={props.checkBox || false}
                    key={item}
                    children={item}
                    value={item}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </div>
      {props.multiple && (
        <div className="w-10/12 z-20 gap-2 absolute bg-gray-100 top-10 overflow-hidden pr-6 right-2 flex items-center ">
          {value &&
            value.map(
              (item) =>
                item !== "انتخاب کنید" && (
                  <div
                    key={item}
                    className=" bg-gray-100 whitespace-nowrap rounded-lg  text-xs text-gray-400 flex gap-1 items-center justify-between"
                  >
                    {item}
                    <button
                      onClick={() => {
                        handleRemove(item);
                      }}
                    >
                      <IoMdClose />
                    </button>
                  </div>
                )
            )}
        </div>
      )}
      {props.error && (
        <p className="text-xs text-red-400 font-medium">{props.error}</p>
      )}
    </div>
  );
};
export default DropDown;
