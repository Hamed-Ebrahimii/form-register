import { Controller, useForm } from "react-hook-form";
import DropDown from "../dropDown";
import Input from "../form/component/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EducationForm,
  EducationFormType,
} from "../../validation/registerFormValidation";
import { parsNumberToString } from "../../utils/parsNumberToString";
import { useState } from "react";
import { ISearch } from "../dropDown/type";
import { useQuery } from "@tanstack/react-query";
import { getAllEducation } from "../../api/getAllEducation";
import { FaRegFileAlt } from "react-icons/fa";
import {  Tooltip } from "@mui/material";
import Modal from "../modal";
const FormEducation = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<EducationFormType>({
    mode: "all",
    resolver: zodResolver(EducationForm),
  });
  const onSubmit = (data: EducationFormType) => {
    console.log(data);
  };

  const [convertNumberToString, setConvertNumberToString] = useState("");
  const [search, setSearch] = useState<ISearch>({
    city: "",
    company: "",
    name: "",
    phone: "",
    website: "",
    job: "",
    education: "",
    militaryService: "",
  });
  const [open , handleOpen] = useState(false)
  const {data} = useQuery({
    queryKey : [search.education],
    queryFn : ()=> getAllEducation(search.education)
  })
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full rounded-xl px-8 py-12  shadow-sm "
    >
      <section className="w-full grid grid-cols-4 gap-5 mt-6">
        <div className="flex items-end justify-between gap-4">
        <Controller
          name="degreeOfEducation"
          control={control}
          render={({ field }) => (
            <DropDown
              {...field}
              checkBox
              multiple
              search={true}
              error={errors.degreeOfEducation?.message}
              fnData={() => {}}
              lable="آخرین مدرک تحصیلی"
              requier
              name="education"
              data={data?.data.map(item => item.name)}
              setSearchValue={setSearch}
              searchData={search}
              placeholder="انتخاب کنید"
              selectAll
            />
          )}
        />
        <Tooltip title='نمایش موارد انتخاب شده ' placement="top">
        <button className="mb-2" type="button">
        <FaRegFileAlt className="text-lg" />
        </button>
        </Tooltip>
        {/* <Modal>
          <div className="w-1/4 py-6 bg-white rounded-xl">

          </div>
        </Modal> */}
        </div>
        <Controller
          name="average"
          control={control}
          render={({ field }) => (
            <Input
              onChange={(e) => {
                field.onChange(+e.target.value);
                setConvertNumberToString(parsNumberToString(+e.target.value));
              }}
              error={errors.average?.message}
              htmlFor=""
              lable="معدل اخرین مدرک خود"
              requier
              min={0}
              max={20}
              type="number"
              placeholder="معدل خود را وارد کنید"
              id="family"
            />
          )}
        />
        <Controller
          name="dateOfObtainingDegree"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              error={errors.dateOfObtainingDegree?.message}
              htmlFor=""
              lable="تاریخ اخذ مدرک"
              requier
              placeholder="تاریخ اخذ مدرک خود را وارد کنید"
              type="date"
              id=""
            />
          )}
        />
        <Controller
          name="averageString"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              error={errors.averageString?.message}
              htmlFor="code"
              lable="معدل کل به حروف"
              requier
              value={convertNumberToString}
              readOnly
              placeholder="معدل  خود را وارد کنید"
              type="text"
              id="code"
            />
          )}
        />
        <Controller
          name="degreeSeries"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              error={errors.degreeSeries?.message}
              htmlFor="fatherName"
              lable="سریال اخرین مدرک تحصیلی"
              requier
              placeholder="سریال اخرین مدرک تحصیلی خود را وارد کنید"
              id="fatherName"
            />
          )}
        />
        <Controller
          name="degreePhoto"
          control={control}
          render={({ field }) => (
            <Input
              onChange={(e) => {
                const file = Array.from(e.target.files || []);
                field.onChange(file[0]);
              }}
              error={errors.degreePhoto?.message}
              lable="فایل اسکن شده مدرک تحصیلی"
              htmlFor="certificate"
              id="certificate"
              type="file"
              requier
            />
          )}
        />
        <Controller
          name="studentPhoto"
          control={control}
          render={({ field }) => (
            <Input
              error={errors.studentPhoto?.message}
              onChange={(e) => {
                const file = Array.from(e.target.files || []);
                field.onChange(file[0]);
              }}
              lable="تصویر پرسنلی دانشجو"
              htmlFor="certificate"
              id="certificate"
              type="file"
              requier
            />
          )}
        />
      </section>
      <section className="w-full grid grid-cols-4 gap-5 mt-6 items-start">
        <button
          type="submit"
          className="rounded-lg border col-start-4 justify-self-end self-end w-1/3 border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
        >
          ثبت نام
        </button>
      </section>
    </form>
  );
};
export default FormEducation;
