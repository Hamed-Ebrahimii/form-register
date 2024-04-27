import {  EducationFormType, profileFormValidationType } from "../validation/registerFormValidation";

export let student : EducationFormType & profileFormValidationType ={
        address : '',
        average : 0,
        averageString : '',
        BirthCertificatePhoto : new File([''] , ''),
        dateOfBirth : '',
        dateOfBirthFather : '',
        dateOfObtainingDegree : '',
        degreeOfEducation : '',
        degreePhoto : new File([''] , ''),
        degreeSeries : '',
        family : '',
        fatherName : '',
        militaryService : '',
        name : '',
        nationalCart : new File([] , '') ,
        nationalCode : '',
        nationalCodeFather : '',
        phone : '',
        phoneFather : '',
        placeOfBirth : '',
        studentPhoto : new File([''] , '')



}
export const setStudent = (data : EducationFormType & profileFormValidationType) =>{
    student = data
}
