
import { Link } from "react-router"

export default function InstaCard({instaInfo}){

    return(
        <Link to={"/Instamart/"+instaInfo?.nodeId}>
        <div>
            <img className="w-70 h-45 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
        </div>
        </Link>
    )
}