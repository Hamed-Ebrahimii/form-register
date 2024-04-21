import { Link } from "react-router-dom"
import DropDown from "../dropDown"
import Input from "../form/component/input"

const FormEducation = () =>{
    return(
        <form className=" w-full rounded-xl px-8 py-12  shadow-sm ">
        <section className="w-full grid grid-cols-4 gap-5 mt-6">
        <DropDown
            requier
            lable="آخرین مدر تحصیلی"
            fnData={() => {}}
            name="education"
            data={['دیپلم' , 'فوق دیپلم' , 'لیسانس' , 'فوق لیسانس']}
          />
          <Input
            htmlFor=""
            lable="معدل اخرین مدرک خود"
            requier
            type="number"
            placeholder="نام خانوادگی خود را وارد کنید"
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
        </section>
        <section className="w-full grid grid-cols-4 gap-5 mt-6 items-start">
          {/* <DropDown
            requier
            lable="محل تولد"
            fnData={() => {}}
            name="city"
            searchData={search}
            setSearchValue={setSearch}
            data={city?.data.map((item) => item.name)}
          /> */}
  
          <Input
            htmlFor="phone"
            lable="شماره تماس"
            requier
            placeholder="شماره تماس خود را وارد کنید"
            type="text"
            id="phone"
          />
          <div className="col-span-2">
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
          <Link to={'/education'} className="col-start-4 justify-self-end self-end">
            <button
              type="button"
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
            >
              بعدی
            </button>
          </Link>
        </section>
      </form>
    )
}
export default FormEducation