import { Link, useLocation } from "react-router-dom";
interface Iprops {
    path : string,
    name : string
}
const Tab = ({ tab }: { tab: Iprops[]  }) => {
    const location = useLocation()
    const pathname = location.pathname
    console.log(pathname);
    
  return (
    <div className="w-full flex items-center justify-start">
      {tab.map((item) => (
        <div className={`px-3 ${pathname === item.path && 'border-b'} py-1`}>
            <Link className={` font-medium ${pathname === item.path ? 'text-gray-600' : 'text-gray-400'} `} to={`${item.path}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};
export default Tab;
