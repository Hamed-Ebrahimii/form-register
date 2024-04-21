import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "../component/form";
import Header from "../layout/header";
import FormEducation from "../component/formEducation";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Header/>,
        children : [
            {
                       index : true,
                       element : <Form/>
            },
            {
                path : '/education',
                element : <FormEducation/>
            }
        ]
    }
])
 const AppRouter = () =>{
        return(
            <RouterProvider router={router}/>    
        )
 }
 export default AppRouter