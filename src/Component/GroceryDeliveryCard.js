

export default function GroceryDeliveryCard({groceryDeliveryData}){
    return(
        <div className=" w-[30%] p-2 border border-gray-300 rounded-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href={groceryDeliveryData?.link}>
            <p className="ml-10">{groceryDeliveryData?.text}</p>
            </a>
        </div>
    )
}