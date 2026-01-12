
import { categories } from "../Utils/GroceryDeliveryData"
import GroceryDeliveryCard from "./GroceryDeliveryCard";

export default function GroceryDeliveryOption(){

    return(
        <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="flex items-center font-bold text-3xl container mx-auto">Cities with Grocery Delivery</h1>
            <div>
                <div className="flex flex-wrap h-75 overflow-y-auto gap-5 w-full text-center whitespace-nowrap mt-10 mb-10">
                    {
                        categories.map((groceryDeliveryData)=><GroceryDeliveryCard groceryDeliveryData={groceryDeliveryData}></GroceryDeliveryCard>)
                    }
                </div>
            </div>
        </div>
    )
}