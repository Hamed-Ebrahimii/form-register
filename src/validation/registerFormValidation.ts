import { z } from "zod";
export const profileFormValidation = z.object({
    name : z.string({required_error : 'نام نمیتواند خالی باشد'}).min(2, 'نام شما باید حداقل دو حرف باشد'),
    family : z.string({required_error : 'نام خانوادگی نمیتواند خالی باشد'}).min(2, 'نام خانوادگی شما باید حداقل دو حرف باشد'),
    dateOfBirth : z.string({required_error : 'لطفا تاریخ تولد خود را انتخاب کنید'}).min(10 , 'تاریخ وارد شده معتبر نیست'),
    dateOfBirthFather : z.string({required_error : 'لطفا تاریخ تولد خود را انتخاب کنید'}).min(10 , 'تاریخ وارد شده معتبر نیست'),
    nationalCode : z.string({required_error : 'کد ملی نمیتواند خالی باشد'}).min(10 , 'کد ملی باید 10 رقم باشد').max(10 , 'کد ملی نمیتواند بیشتر از 10 رقم باشد'),
    nationalCodeFather : z.string({required_error : 'کد ملی نمیتواند خالی باشد'}).min(10 , 'کد ملی باید 10 رقم باشد').max(10 , 'کد ملی نمیتواند بیشتر از 10 رقم باشد'),
    phone : z.string({required_error : 'شماره تماس نمیتواند خالی باشد'}).min(11 , 'شماره تماس باید 11 رقم باشد').startsWith('09' , 'شماره تماس معتبر نیست').max(11 , 'شماره تماس نباید بیشتر از 11 رقم باشد '),
    phoneFather : z.string({required_error : 'شماره تماس نمیتواند خالی باشد'}).min(11 , 'شماره تماس باید 11 رقم باشد').startsWith('09' , 'شماره تماس معتبر نیست').max(11 , 'شماره تماس نباید بیشتر از 11 رقم باشد '),
    fatherName  : z.string({required_error : 'نام پدر نمیتواند خالی باشد'}).min(3 , 'نام پدر حداقل باید 3 حرف باشد'),
    militaryService : z.string({required_error : 'لطفا وظیعت نظام وظیفه را انتخاب کنید '}),
    address : z.string({required_error : 'آدرس نمیتواند خالی باشد'}).min(10 , 'آدرس معتبر نمیباشد'),
    placeOfBirth : z.string({required_error : 'لطفا محل تولد خود را انتخاب کنید'}),
    BirthCertificatePhoto : z.instanceof(File, {message : 'لطفا عکس شناسنامه خود را آپلود کنید'}).refine(file => file.type !== 'jpeg' , 'لطفا  عکس را آپلود کنید'),
    nationalCart : z.instanceof(File , {message : 'لطفا عکس کارت ملی خود را آپلود کنید '}).refine(file => file.type !== 'jpeg' , 'لطفا  عکس را آپلود کنید'),
}) 

export type profileFormValidationType = z.infer<typeof profileFormValidation> 