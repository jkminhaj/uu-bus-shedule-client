import SingleShedule from "../components/Shedules/SingleShedule";
import SearchShdedule from "../components/Shedules/SearchShedule";
import { useEffect } from "react";
const Shedules = () => {
    useEffect(()=>{
        fetch( "../../public/route.json")
        .then(res=>res.json())
        .then(data=>console.log(data));
    },[])
    return (
        <div className="dynamicPage overflow-scroll">
            {/* search bar here */}
            <div>
                <SearchShdedule></SearchShdedule>
            </div>
            {/* main single component */}
            <section className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-3 mt-3">
                
                <SingleShedule />
            </section>

        </div>
    );
};

export default Shedules;