import { useSelector } from "react-redux"
import { Link } from "react-router";

export default function RestHeader(){

    const counter = useSelector(state => state.cartSlice.count);

    return(
        <div className="container w-[80%] rounded-2xl mx-auto mt-20 py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center">
            <div> 
                <p className="text-orange-600 font-bold">Swiggy</p>
            </div>

            <div className="text-xl">
                <Link to="/Corporate">
                <p>Swiggy Corporate</p>
                </Link>
            </div>

            <div className="text-center text-xl"> 
                <button>Search</button>
            </div>

            <div className="text-xl">
                <p>Offers</p>
            </div>

            <div className="text-xl">
                <p>Help</p>
            </div>

            <div className="text-xl">
                <p>Sign In</p>
                
            </div>

            <div>
                <Link to="/Checkout">
                <p>Cart {`(${counter})`}</p>
                </Link>
            </div>
        </div>
    )
}