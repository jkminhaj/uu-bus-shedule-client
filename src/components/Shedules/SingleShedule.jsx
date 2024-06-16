import { FaBusSimple } from "react-icons/fa6";
const SingleShedule = ({bus , up_time , down_time,route}) => {
    return (
        <div className="w-[500] border my-1 rounded-md p-3">
            <div className="flex justify-center">
                <FaBusSimple  className="text-5xl text-blue-800" />
            </div>
            <p className="text-xl text-center mt-2 font-bold text-blue-700">UU BUS NO -{bus}</p>
            {/* details */}
            <div className="text-center rounded-lg p-5 mt-2">
                <p>Azimpur – Sony Hall - Permanent Campus</p>
                <p>Pick Up Time: <span className="text-green-600 font-semibold">{up_time} am</span></p>
                <p>Campus Departure Time: <span className="text-red-600 font-semibold">{down_time} pm</span></p>
            </div>
        </div>
    );
};

export default SingleShedule;