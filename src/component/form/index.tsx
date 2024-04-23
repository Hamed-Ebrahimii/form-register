import Input from "./component/input";
import DropDown from "../dropDown";
import { useState } from "react";
import { ISearch } from "../dropDown/type";
import { useQuery } from "@tanstack/react-query";
import { getAllCity } from "../../api/getAllCity";
import { IoMdArrowDropdown } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileFormValidation, profileFormValidationType } from "../../validation/registerFormValidation";
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
    queryKey: [search.city],
    queryFn: () => getAllCity(search.city),
  });

  const [showAccordion, setShowAccordion] = useState(false);
  const {control , formState : {errors} , handleSubmit} = useForm<profileFormValidationType>({
    mode : 'all',
    resolver : zodResolver(profileFormValidation)
    
  })
  const onSubmit = (data : profileFormValidationType) =>{
        console.log(data);

  }
  return (
    <form className=" w-full rounded-xl px-8 py-12 " onSubmit={handleSubmit(onSubmit)}>
      <section className="w-full grid grid-cols-4 gap-5 mt-6">
        <Controller
        name="name"
        control={control}
        render={({field})=>(
          <Input
          htmlFor="name"
          lable="نام"
          requier
          placeholder="نام خود را وارد کنید"
          id="name"
          {...field}
          error={errors.name?.message}
        />
        )}
        />
        <Controller
          name="family"
          control={control}
          render={({field})=>(
            <Input
              htmlFor="family"
              lable=" نام خانوادگی"
              requier
              placeholder="نام خانوادگی خود را وارد کنید"
              id="family"
              {...field}
              error={errors.family?.message}
            />
          )}      
        />
        <Controller
          name="dateOfBirth"
          control={control}
          render={({field})=>(
            <Input
              {...field}
              htmlFor="bearthDate"
              lable="تاریخ تولد"
              requier
              placeholder="تاریخ تولد خود را وارد کنید"
              type="date"
              id="bearthDate"
              error={errors.dateOfBirth?.message}
              />
              
          )}      
        />
        <Controller
          name="nationalCode"
          control={control}
          render={({field})=>(
            <Input
              {...field}
              error={errors.nationalCode?.message}
              htmlFor="code"
              lable="کد ملی"
              requier
              placeholder="کد ملی خود را وارد کنید"
              type="text"
              id="code"
            />
          )}      
        />
        <Controller
          name="fatherName"
          control={control}
          render={({field})=>(
            <Input
            {...field}
            error={errors.fatherName?.message}
              htmlFor="fatherName"
              lable="نام پدر"
              requier
              placeholder="نام پدر خود را وارد کنید"
              id="fatherName"
            />
          )}      
        />
        <Controller
          name="militaryService"
          control={control}
          render={({field})=>(
            <DropDown
            {...field}
            error={errors.militaryService?.message}
              fnData={() => {}}
              lable="وضیعت نظام وظیفه"
              requier
              searchData={search.militaryService}
              setSearchValue={setSearch}
              name="militaryService"
              data={["معافیت پزشکی", "معافیت تحصیلی", "مشمول", "پایان خدمت"]}
              placeholder="انتخاب کنید"
            />
          )}      
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
            <Controller
              control={control}
              name="address"
              render={({field})=>(
                <textarea
                {...field}
                  rows={3}
                  maxLength={1000}
                  className={`border w-full max-h-20 bg-gray-100 ${errors.address?.message ? 'border-red-500' : 'border-gray-200'} rounded-md py-1 px-5 outline-none placeholder:text-gray-400 text-gray-500 placeholder:text-xs placeholder:font-semibold`}
                />
              )}
              />
              {errors.address?.message && <p className="text-xs text-red-400 font-medium">{errors.address.message}</p>}
          </div>
        </div>
      </section>
      <section className="w-full grid grid-cols-4 gap-5 mt-6 items-start">
        <Controller
              control={control}
              name="placeOfBirth"
              render={({field})=>(

                <DropDown
                error={errors.placeOfBirth?.message}
                {...field}
                  requier
                  lable="محل تولد"
                  fnData={() => {}}
                  name="city"
                  placeholder="انتخاب کنید"
                  searchData={search}
                  search
                  setSearchValue={setSearch}
                  data={city?.data.map((item) => item.name)|| ['']}
                />
              )}
            />
        <Controller
              control={control}
              name="phone"
              render={({field})=>(
                <Input
                {...field}
                error={errors.phone?.message}
                  htmlFor="phone"
                  lable="شماره تماس"
                  requier
                  placeholder="شماره تماس خود را وارد کنید"
                  type="text"
                  id="phone"
                />
              )}
            />
        <Controller
              control={control}
              name="BirthCertificatePhoto"
              render={({field})=>(
                <Input
                error={errors.BirthCertificatePhoto?.message}
                onChange={(e) => {
                  const file = Array.from(e.target.files || [])
                  field.onChange(file[0])
              }}
                  lable="عکس شناسنامه"
                  htmlFor="certificate"
                  id="certificate"
                  type="file"
                  requier
                />
              )}
            />
            <Controller
              control={control}
              name="nationalCart"
              render={({field})=>(
                <Input
                onChange={(e) => {
                  const file = Array.from(e.target.files || [])
                  field.onChange(file[0])
              }}
                error={errors.nationalCart?.message}
                  lable="عکس کارت ملی"
                  htmlFor="certificate"
                  id="certificate"
                  type="file"
                  requier
                />
              )}
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
            <Controller
              control={control}
              name="fatherName"
              render={({field})=>(
                <Input
                  {...field}
                  error={errors.fatherName?.message}
                  htmlFor="fatherName"
                  lable="نام"
                  requier
                  placeholder="نام پدر را وارد کنید"
                  type="text"
                  id="fatherName"
                />
              )}
            />
            <Controller
              control={control}
              name="dateOfBirthFather"
              render={({field})=>(
                <Input
                  {...field}
                  error={errors.dateOfBirthFather?.message}
                  htmlFor="bearthDate"
                  lable="تاریخ تولد"
                  requier
                  placeholder="تاریخ تولد خود را وارد کنید"
                  type="date"
                  id="bearthDate"
                />
              )}
            />
            <Controller
              control={control}
              name="phoneFather"
              render={({field})=>(

                <Input
                {...field}
                error={errors.phoneFather?.message}
                  htmlFor="phone"
                  lable="شماره تماس"
                  requier
                  placeholder="شماره تماس خود را وارد کنید"
                  type="text"
                  id="phone"
                />
              )}
            />
            <Controller
              control={control}
              name="nationalCodeFather"
              render={({field})=>(
                <Input
                {...field}
                error={errors.nationalCodeFather?.message}
                htmlFor="phone"
                lable="کد ملی"
                requier
                placeholder="کد ملی پدر  خود را وارد کنید"
                type="text"
                id="phone"
              />
              )}
            />
          </section>
        )}
      </section>
      <div className="flex justify-end">
      
          <button
            type="submit"
            className=" mt-7 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
          >
            بعدی
          </button>
        
      </div>
    </form>
  );
};
export default Form;
