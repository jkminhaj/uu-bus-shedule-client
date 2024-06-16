import { useEffect, useState } from "react";
import SingleShedule from "../components/Shedules/SingleShedule";
import TopMenu from "../components/TopMenu";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const api = "http://localhost:2000/shedules";
    // const api = "../../public/route.json";
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);
    // console.log(data)
    return (
        <div>
            <section className="sticky top-0 z-50 pb-1 bg-white">
                {/* Top Menu */}
                <div>
                    <TopMenu></TopMenu>
                </div>
                <h1 className="text-2xl font-bold mt-3 mb-5 px-4">
                    Recent Shedules
                </h1>
            </section>

            {/* Shedules component */}
            <section className="px-4">
                <div className="overflow-scroll">
                    {
                        data.map(shedule => <SingleShedule key={shedule.bus_no}
                            up_time={shedule.up_time}
                            down_time={shedule.down_time}
                            route={shedule.route}
                            bus={shedule.bus_no}></SingleShedule>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
