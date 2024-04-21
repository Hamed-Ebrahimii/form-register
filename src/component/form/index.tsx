import Input from "./component/input";
import DropDown from "../dropDown";
import { useState } from "react";
import { ISearch } from "../dropDown/type";
import { useQuery } from "@tanstack/react-query";
import { getAllCity } from "../../api/getAllCity";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
const Form = () => {
  const [search, setSearch] = useState<ISearch>({
    city: "",
    company: "",
    name: "",
    phone: "",
    website: "",
    job: "",
    education: "",
    militaryService : ''
  });
  const { data: city } = useQuery({
    queryKey: ["city"],
    queryFn: getAllCity,
  });

  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <form className=" w-full rounded-xl px-8 py-12 ">
      <section className="w-full grid grid-cols-4 gap-5 mt-6">
        <Input
          htmlFor="name"
          lable="نام"
          requier
          placeholder="نام خود را وارد کنید"
          id="name"
        />
        <Input
          htmlFor="family"
          lable=" نام خانوادگی"
          requier
          placeholder="نام خانوادگی خود را وارد کنید"
          id="family"
        />
        <Input
          htmlFor="bearthDate"
          lable="تاریخ تولد"
          requier
          placeholder="تاریخ تولد خود را وارد کنید"
          type="date"
          id="bearthDate"
        />
        <Input
          htmlFor="code"
          lable="کد ملی"
          requier
          placeholder="کد ملی خود را وارد کنید"
          type="text"
          id="code"
        />
        <Input
          htmlFor="fatherName"
          lable="نام پدر"
          requier
          placeholder="نام پدر خود را وارد کنید"
          id="fatherName"
        />
        <DropDown
          fnData={() => {}}
          lable="وضیعت نظام وظیفه"
          requier
          name="militaryService"
          data={["معافیت پزشکی", "معافیت تحصیلی", "مشمول", "پایان خدمت"]}
        />
        <div className="col-span-2 col-start-3 row-start-2">
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label
              className="text-sm text-gray-500 font-medium"
              htmlFor={"address"}
            >
              آدرس
              <span className="text-red-400 font-bold"> *</span>
            </label>
            <textarea
              rows={3}
              maxLength={1000}
              className="border w-full max-h-20 bg-gray-100 border-gray-200 rounded-md py-1 px-5 outline-none placeholder:text-gray-400 text-gray-500 placeholder:text-xs placeholder:font-semibold"
            />
          </div>
        </div>
      </section>
      <section className="w-full grid grid-cols-4 gap-5 mt-6 items-start">
        <DropDown
          requier
          lable="محل تولد"
          fnData={() => {}}
          name="city"
          searchData={search}
          setSearchValue={setSearch}
          data={city?.data.map((item) => item.name)}
        />

        <Input
          htmlFor="phone"
          lable="شماره تماس"
          requier
          placeholder="شماره تماس خود را وارد کنید"
          type="text"
          id="phone"
        />
        
        <Input
          lable="عکس شناسنامه"
          htmlFor="certificate"
          id="certificate"
          type="file"
          requier
        />
        <Input
          lable="عکس کارت ملی"
          htmlFor="certificate"
          id="certificate"
          type="file"
          requier
        />
      </section>
      <section className="w-full">
        <div className="w-full flex items-center justify-between mt-7 border-b py-5">
          <h1 className="text-2xl font-semibold text-gray-700">مشخصات پدر</h1>
          <button
            onClick={() => setShowAccordion(!showAccordion)}
            type="button"
            className={`${showAccordion && "rotate-180"}`}
          >
            <IoMdArrowDropdown className="text-xl font-medium text-gray-500 " />
          </button>
        </div>
        {showAccordion && (
          <section className="w-full grid grid-cols-4 gap-5 mt-6 items-start">
            <Input
              htmlFor="fatherName"
              lable="نام"
              requier
              placeholder="نام پدر را وارد کنید"
              type="text"
              id="fatherName"
            />
            <Input
              htmlFor="bearthDate"
              lable="تاریخ تولد"
              requier
              placeholder="تاریخ تولد خود را وارد کنید"
              type="date"
              id="bearthDate"
            />
            <Input
              htmlFor="phone"
              lable="شماره تماس"
              requier
              placeholder="شماره تماس خود را وارد کنید"
              type="text"
              id="phone"
            />
              <Input
              htmlFor="phone"
              lable="کد ملی"
              requier
              placeholder="کد ملی پدر  خود را وارد کنید"
              type="text"
              id="phone"
            />
          </section>
        )}
      </section>
      <div className="flex justify-end">
        <Link
          to={"/education"}
          className="col-start-4 justify-self-end self-end"
        >
          <button
            type="button"
            className=" mt-7 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
          >
            بعدی
          </button>
        </Link>
      </div>
    </form>
  );
};
export default Form;
