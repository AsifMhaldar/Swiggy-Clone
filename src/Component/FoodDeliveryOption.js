
import {categories } from "../Utils/FoodDeliveryData";
import FoodDeliveryCard from "./FoodDeliveryCard";

export default function FoodDeliveryOption(){
    return(
        <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="flex items-center font-bold text-3xl container mx-auto">Cities with Food Delivery</h1>
            <div className="flex flex-wrap h-75 overflow-y-auto gap-5 w-full text-center whitespace-nowrap mt-10 mb-10">
                {
                    categories.map((deliveryData)=><FoodDeliveryCard deliveryData={deliveryData}></FoodDeliveryCard>)
                }
            </div>
        </div>
    )

}