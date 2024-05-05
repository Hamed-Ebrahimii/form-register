import { useCallback, useRef, useState } from "react";
import SelectOption from "./component/option";
import Search from "./component/search";
import { DropDownProps, ISearch } from "./type";
import anime from "animejs/lib/anime.es.js";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useClickOutside } from "@mantine/hooks";
import { Tooltip } from "@mui/material";
import Chip from "./component/chip";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
const DropDown = (props: DropDownProps) => {
  const input = useRef<HTMLInputElement>(null);
  const [showDrop, setShowDrop] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const ref = useClickOutside(() => setShowDrop(false));
  const [showSelected, setShowSelected] = useState(false);
  const handleItem = (data: string) => {
    const response = value.findIndex((item) => item === data);
    if (!props.multiple) {
      setShowDrop(false);
    }
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

    props.setSearchValue("");
  };
  const handleRemove = (name: string) => {
    setValue(value.filter((item) => item !== name));
  };
  const handleShowAnime = useCallback(() => {
    anime({
      targets: ".drop",
      opacity: "1",
      duration: 3000,
    }).play();
  }, []);
  const animeRotate = useCallback(() => {
    anime({
      targets: `.${props.name}`,
      rotate: showDrop ? "360deg" : "180deg",
      duration: 1000,
    }).play();
  }, []);
  const newState: ISearch = JSON.parse(JSON.stringify(props.searchData || {}));
  return (
    <div
      className="flex w-full items-center justify-center gap-2 relative "
      ref={ref}
    >
      <div
        id="drop"
        className={
          "flex flex-col w-full gap-2 bg-inherit rounded-lg  relative "
        }
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
            id="drop"
            className={`z-30 bg-inherit outline-none w-full text-ellipsis overflow-hidden whitespace-nowrap text-xs   rounded-full focus:border-blue-300 text-gray-400  font-bold flex items-center justify-between ${
              props.error ? "border-red-400" : "border-gray-200 "
            }`}
            onClick={() => {
              setShowDrop(!showDrop);
              animeRotate();
              handleShowAnime();
              setShowSelected(false);
            }}
            onKeyDown={() => {
              input.current?.focus();
            }}
          >
            <span>{value.length === 0 ? props.placeholder : value[0]}</span>
            <MdOutlineArrowDropDown className="!text-xl" />
          </button>
          {showDrop && (
            <div className="flex items-start justify-between absolute z-40 top-11 w-full">
              <div className="drop  bg-gray-100 border px-3  rounded-lg mt-5 max-h-40 py-2 overflow-auto relative w-full">
                <div className="w-full flex items-center gap-4 ">
                  <div className="w-full">
                    <div className="py-1 mb-2 border-b flex  items-center gap-2">
                      {props.selectAll && (
                        <SelectOption
                          onChange={props.onChange}
                          isChecked={value.length === props.data?.length}
                          setValue={() => {
                            setValue(props.data || []);
                            if (value.length !== props.data?.length) {
                              setValue(props.data || []);
                            } else {
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
                            (props.searchData &&
                              props.searchData[props.name]) ||
                            ""
                          }
                          onChange={(e) => {
                            newState[props.name] = e;
                            props.setSearchValue(newState);
                          }}
                        />
                      )}
                      {props.multiple && (
                        <Tooltip title="نمایش موارد انتخاب شده" placement="top">
                          <button
                            type="button"
                            onClick={() => setShowSelected(!showSelected)}
                          >
                            {!showSelected ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </button>
                        </Tooltip>
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
                          props.multiple
                            ? undefined
                            : value.includes("انتخاب کنید")
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
                        isChecked={value.includes(item)}
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
              {showSelected && (
                <div className="w-32  rounded-lg absolute top-5 right-full border bg-gray-100 z-50 h-[160px] overflow-y-auto">
                  {value.length <= 0 ? (
                    <Chip
                      lable="موردی یافت نشد"
                      onDelete={() => {}}
                      type="defaulte"
                    />
                  ) : (
                    value.map((item) => (
                      <Chip
                        key={item}
                        onDelete={handleRemove}
                        lable={item}
                        type="delete"
                      />
                    ))
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        {props.multiple && (
          <div className="gap-2 absolute bg-gray-100 top-10 overflow-hidden pr-2 cursor-pointer right-0 flex items-center w-10/12">
            {value &&
              value.map(
                (item) =>
                  item !== "انتخاب کنید" && (
                    <div
                      key={item}
                      className="z-40 bg-gray-100 whitespace-nowrap rounded-lg  text-xs text-gray-400 flex gap-1 cursor-default items-center justify-between"
                    >
                      <span
                        onClick={(e) => {
                          const target = e.target as HTMLDivElement;
                          if (
                            target.id !== "delete-val" ||
                            target.tagName !== "svg"
                          ) {
                            setShowDrop(!showDrop);
                          }
                        }}
                      >
                        {item}
                      </span>
                      <button
                        id="delete-val"
                        className=" bg-inherit bg-opacity-100"
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
    </div>
  );
};
export default DropDown;
