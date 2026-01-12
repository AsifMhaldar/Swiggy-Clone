

export default function FoodDeliveryCard({deliveryData}){
    return(
        <div className=" w-[30%] p-2 border border-gray-300 rounded-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href={deliveryData?.link}>
            <p className="ml-10">{deliveryData?.text}</p>
            </a>
        </div>
    )
}