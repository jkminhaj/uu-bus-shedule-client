import { BiHomeAlt2 } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const MobileNav = () => {
    return (
        <div className="flex absolute w-full bottom-0 justify-around pt-4 pb-3 px-3 bg-slate-50 rounded-t-3xl">
            <NavLink to='/' className="flex flex-col menu cursor-pointer gap-1 items-center  text-gray-500">
                <BiHomeAlt2 className="text-2xl" />
                <p className="text-sm">Home</p>
            </NavLink>
            <NavLink to='/shedules' className="flex flex-col menu cursor-pointer gap-1 items-center text-gray-500">
                <FaRegClock className="text-2xl " />
                <p className="text-sm font-[]">Schedule</p>
            </NavLink>
            <NavLink to='/maps' className="flex flex-col menu cursor-pointer gap-1 items-center text-gray-500">
                <FiMapPin className="text-2xl " />
                <p className="text-sm">Maps</p>
            </NavLink>
            <NavLink to='/option' className="flex flex-col menu cursor-pointer gap-1 items-center text-gray-500">
                <AiOutlineMenu className="text-2xl " />
                <p className="text-sm">More</p>
            </NavLink>
        </div>
    );
};

export default MobileNav;