import { Link } from "react-router-dom";
import DropDown from "../dropDown";
import Input from "../form/component/input";

const FormEducation = () => {
  return (
    <form className=" w-full rounded-xl px-8 py-12  shadow-sm ">
      <section className="w-full grid grid-cols-4 gap-5 mt-6">
        <DropDown
          requier
          lable="آخرین مدرک تحصیلی"
          fnData={() => {}}
          name="education"
          data={["دیپلم", "فوق دیپلم", "لیسانس", "فوق لیسانس"]}
        />
        <Input
          htmlFor=""
          lable="معدل اخرین مدرک خود"
          requier
          type="number"
          placeholder="معدل خود را وارد کنید"
          id="family"
        />
        <Input
          htmlFor=""
          lable="تاریخ اخذ مدرک"
          requier
          placeholder="تاریخ اخذ مدرک خود را وارد کنید"
          type="date"
          id=""
        />
        <Input
          htmlFor="code"
          lable="معدل کل به حروف"
          requier
          placeholder="معدل  خود را وارد کنید"
          type="text"
          id="code"
        />
        <Input
          htmlFor="fatherName"
          lable="سریال اخرین مدرک تحصیلی"
          requier
          placeholder="سریال اخرین مدرک تحصیلی خود را وارد کنید"
          id="fatherName"
        />
        <Input
          lable="فایل اسکن شده مدرک تحصیلی"
          htmlFor="certificate"
          id="certificate"
          type="file"
          requier
        />
        <Input
          lable="تصویر پرسنلی دانشجو"
          htmlFor="certificate"
          id="certificate"
          type="file"
          requier
        />
      </section>
      <section className="w-full grid grid-cols-4 gap-5 mt-6 items-start">
        <button
          type="button"
          className="rounded-lg border col-start-4 justify-self-end self-end w-1/3 border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
        >
          ثبت نام
        </button>
      </section>
    </form>
  );
};
export default FormEducation;
