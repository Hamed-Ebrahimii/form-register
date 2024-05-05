import { z } from "zod";
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const profileFormValidation = z.object({
  name: z
    .string({ required_error: "نام نمیتواند خالی باشد" })
    .min(2, "نام شما باید حداقل دو حرف باشد"),
  family: z
    .string({ required_error: "نام خانوادگی نمیتواند خالی باشد" })
    .min(4, "نام خانوادگی شما باید حداقل چهار حرف باشد"),
  dateOfBirth: z
    .string({ required_error: "لطفا تاریخ تولد خود را انتخاب کنید" })
    .min(10, "تاریخ وارد شده معتبر نیست"),
  dateOfBirthFather: z
    .string({ required_error: "لطفا تاریخ تولد خود را انتخاب کنید" })
    .min(10, "تاریخ وارد شده معتبر نیست"),
  nationalCode: z
    .string({ required_error: "کد ملی نمیتواند خالی باشد" })
    .min(10, "کد ملی باید 10 رقم باشد")
    .max(10, "کد ملی نمیتواند بیشتر از 10 رقم باشد"),
  nationalCodeFather: z
    .string({ required_error: "کد ملی نمیتواند خالی باشد" })
    .min(10, "کد ملی باید 10 رقم باشد")
    .max(10, "کد ملی نمیتواند بیشتر از 10 رقم باشد"),
  phone: z
    .string({ required_error: "شماره تماس نمیتواند خالی باشد" })
    .min(11, "شماره تماس باید 11 رقم باشد")
    .startsWith("09", "شماره تماس معتبر نیست")
    .max(11, "شماره تماس نباید بیشتر از 11 رقم باشد "),
  phoneFather: z
    .string({ required_error: "شماره تماس نمیتواند خالی باشد" })
    .min(11, "شماره تماس باید 11 رقم باشد")
    .startsWith("09", "شماره تماس معتبر نیست")
    .max(11, "شماره تماس نباید بیشتر از 11 رقم باشد "),
  fatherName: z
    .string({ required_error: "نام پدر نمیتواند خالی باشد" })
    .min(3, "نام پدر حداقل باید 3 حرف باشد"),
  militaryService: z.string({
    required_error: "لطفا وظیعت نظام وظیفه را انتخاب کنید ",
  }),
  address: z
    .string({ required_error: "آدرس نمیتواند خالی باشد" })
    .min(10, "آدرس معتبر نمیباشد"),
  placeOfBirth: z.string({
    required_error: "لطفا محل تولد خود را انتخاب کنید",
  }),
  BirthCertificatePhoto: z
    .instanceof(File, { message: "لطفا عکس شناسنامه خود را آپلود کنید" })
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "تنها عکس های که پسوند jpg , jpeg , png , webp مورد تایید هست "
    ),
  nationalCart: z
    .instanceof(File, { message: "لطفا عکس کارت ملی خود را آپلود کنید " })
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "تنها عکس های که پسوند jpg , jpeg , png , webp مورد تایید هست "
    ),
});
export type profileFormValidationType = z.infer<typeof profileFormValidation>;
export const EducationForm = z.object({
  degreeOfEducation: z.string({
    required_error: "لطفا مدرک تحصیلی خود راانتخاب کنید ",
  }),
  average: z
    .number({ required_error: "لطفا معدل خود را وارد کنید " })
    .min(0, "معدل نیمتواند کمتر از 0 باشد")
    .max(20, "معدل نمیتواند بیشتر از 20 باشد"),
  dateOfObtainingDegree: z
    .string({ required_error: "لطفا تاریخ دریافت مدرک خود را وارد نمایید" })
    .min(10, "تاریخ وارد شده معتبر نیست"),
  averageString: z
    .string({ required_error: "لطفا معدل خود را به حروف وارد کنید" })
    .min(2, "معدل وارد شده نمیتواند کمتر از 2 حرف باشد"),
  degreeSeries: z
    .string({
      required_error: "لطفا سریال اخرین مدرک تحصیلی خود را وارد کنید ",
    })
    .min(4, "سریال نمیتواند کمتر از 4 رقم باشد")
    .max(6, "سریال نمیتواند بیشتر از 6 رقم باشد"),
  degreePhoto: z
    .instanceof(File, { message: "لطفا عکس مدرک تحصیلی خود را آپلود کنید " })
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "تنها عکس های که پسوند jpg , jpeg , png , webp مورد تایید هست "
    ),
  studentPhoto: z
    .instanceof(File, { message: "لطفا عکس دانشجو را آپلود کنید " })
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "تنها عکس های که پسوند jpg , jpeg , png , webp مورد تایید هست "
    ),
});
export type EducationFormType = z.infer<typeof EducationForm>;
