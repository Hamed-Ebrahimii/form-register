import { Outlet } from "react-router-dom";
import Tab from "../../component/Tab";


const Header = () =>{
    const tabs = [
        {
          path: "/",
          name: "مشخصات فردی",
        },
        {
          path: "/education",
          name: "سوابق تحصیلی",
        },
        {
          path: "/job",
          name: "شغل",
        },
      ];
    
    return(
    <div className="w-full">
        <header className="py-4 border-b w-full px-3">
        <Tab tab={tabs} />
      </header>
      <Outlet/>
      </div>
    )
}
export default Header