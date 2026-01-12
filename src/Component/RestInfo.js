import { useState } from "react";
import {addItems, incrementItems, decrementItems} from "../Stored/CartSlice";
import { useDispatch, useSelector } from "react-redux";


export default function RestInfo({restData}){

    // const [count, setCount] = useState(0);

    const dispatch = useDispatch();
    const items = useSelector(state=>state.cartSlice.items);

    const element = items.find(item=>item.id === restData.id);

    const count = element? element.quantity:0;

    function handleAddItems(){
        // setCount(1);
        dispatch(addItems(restData));
    }

    function handleIncrementItems(){
        // setCount(count+1);
        dispatch(incrementItems(restData));
    }

    function handleDecrementItems(){
        // setCount(count-1);
        dispatch(decrementItems(restData));
    }

    return(

        <>
        <div className="flex w-full justify-between mb-2 pb-2 mt-6">
            <div className="w-[70%]">
                <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
                <p className="text-xl">{"₹"+("defaultPrice" in restData? restData?.defaultPrice/100:restData?.price/100)}</p>
                <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
                <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                <p>{restData?.description}</p>
            </div>
            
            <div className="w-[20%] relative h-42">
                <img className="w-60 h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId}></img>

                {
                    count==0?(<button className="absolute w-24 bottom-1 left-20 rounded-xl text-2xl text-green-600 px-4 py-2 bg-white shadow-md border border-white cursor-pointer" onClick={()=>handleAddItems()}>ADD</button>):
                    
                    (
                        <div className="absolute rounded-xl bottom-1 left-20 flex gap-3 text-2xl text-green-600 px-4 py-2 bg-white shadow-md border border-white">
                            <button onClick={()=>handleDecrementItems()} className="cursor-pointer">-</button>
                            <span>{count}</span>
                            <button onClick={()=>handleIncrementItems()} className="cursor-pointer">+</button>
                        </div>
                    )
                }
                
            </div>
        </div>

        <hr></hr>
        </>        
    )
}