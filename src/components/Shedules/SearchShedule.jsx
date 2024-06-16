
import {CiSearch} from "react-icons/ci";
const SearchShedule = () => {
    return (
        <div className="bg-white flex shadow md:w-1/2 rounded-full pl-2 items-center sticky top-0 ">    
            <CiSearch className="text-2xl text-gray-400 my-1 fontbold" />
            <input type="text" className="outline-none pl-2 w-11/12" placeholder="Search here" />
        </div>
    )
}
export default SearchShedule;