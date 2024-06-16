import { NavLink } from "react-router-dom";

const DeskTopNav = () => {
    return (
        <div className="p-5">
            <ol className="space-y-2">
                {/* search input */}
                <li>
                    <input type="text" className="bg-gray-100 p-2 pl-4 mb-5 outline-none font-medium rounded-lg" placeholder="Search here" />
                </li>

                {/* navigations links */}
                <div className="space-y-5 pl-3 desktopNav"> 
                    <li><NavLink to='/'>Dashboard</NavLink></li>
                    <li><NavLink to='/shedules'>Shedule</NavLink></li>
                    <li><NavLink to='/shedule'>Users</NavLink></li>
                    <li><NavLink to='/shedule'>Profile</NavLink></li>
                    <li><NavLink to='/shedule'>Log in</NavLink></li> 
                    <li><NavLink to='/shedule'>Shedule</NavLink></li>
                </div>
            </ol>
        </div>
    );
};

export default DeskTopNav;