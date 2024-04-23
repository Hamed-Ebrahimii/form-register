import { Controller, useForm } from "react-hook-form";
import DropDown from "../dropDown";
import Input from "../form/component/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { EducationForm, EducationFormType } from "../../validation/registerFormValidation";
import Datalist from "../datalist";
const FormEducation = () => {
  const {control , formState : {errors} , handleSubmit} = useForm<EducationFormType>({
    mode : 'all',
    resolver : zodResolver(EducationForm)
  })
  const onSubmit = (data : EducationFormType) =>{
    console.log(data);
    
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-full rounded-xl px-8 py-12  shadow-sm ">
      <section className="w-full grid grid-cols-4 gap-5 mt-6">
        <Controller
        name='degreeOfEducation'
        control={control}
         render={({field})=>(
          <div>
          <Input htmlFor=""  lable="آخرین مدرک تحصیلی" error={errors.degreeOfEducation?.message} requier list="degreeOfEducation" {...field}/>
          <Datalist
           id="degreeOfEducation"
            data={ ['دیپلم' , 'فوق دیپلم' ,'لیسانس' , 'فوق لیسانس' , 'دکترا']}
          />
          </div>
         )}
        />
        <Controller
        name='average'
        control={control}
         render={({field})=>(
           <Input
            onChange={(e)=>{
              field.onChange(+e.target.value)
            }}
            error={errors.average?.message}
             htmlFor=""
             lable="معدل اخرین مدرک خود"
             requier
             type="number"
             placeholder="معدل خود را وارد کنید"
             id="family"
           />
         )}
        />
        <Controller
        name='dateOfObtainingDegree'
        control={control}
         render={({field})=>(
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
        name='averageString'
        control={control}
         render={({field})=>(
           <Input
           {...field}
           error={errors.averageString?.message}
             htmlFor="code"
             lable="معدل کل به حروف"
             requier
             placeholder="معدل  خود را وارد کنید"
             type="text"
             id="code"
           />
         )}
        />
        <Controller
        name='degreeSeries'
        control={control}
         render={({field})=>(
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
        name='degreePhoto'
        control={control}
         render={({field})=>(
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
        name='studentPhoto'
        control={control}
         render={({field})=>(
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
