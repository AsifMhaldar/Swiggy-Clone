
import { Link } from "react-router";

export default function RestCard({restInfo}){

    return(
        <Link to={"/city/mumbai/"+restInfo?.info?.id}>
        <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
            <img className="w-70 h-45 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
            <div className="w-[95%] mx-auto mt-3">
                <div className="font-bold text-xl">{restInfo?.info?.name}</div>
                <div className="flex items-center gap-2">
                    <svg
                    
                        className={`w-6 h-6 fill-green-600`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            d="M12 17.77l-5.6 3.11 1.07-6.23-4.54-4.42 6.28-.92L12 2l2.73 5.42 6.28.92-4.54 4.42 1.07 6.23L12 17.77z"
                        />
                    </svg>
                    <span className="text-lg">{restInfo?.info?.avgRating}</span>
                    <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
                </div>

                <div className="text-gray-600 text-md mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
                
                <div className="text-gray-600 text-md">{restInfo?.info?.areaName}</div>
            </div>
        </div>
        </Link>
    )
}