

import { GroceryGridCard } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){
    return(
        <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="flex items-center font-bold text-3xl container mx-auto">Shop Groceries on Instamart</h1>
            
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-16">
                {
                    GroceryGridCard.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
                }
            </div>
        </div>
    )
}