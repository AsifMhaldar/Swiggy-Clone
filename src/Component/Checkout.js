import { useSelector } from "react-redux"



export default function Checkout(){

    const items = useSelector(state=>state.cartSlice.items);


    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="w-[40%] flex flex-col gap-4 px-5 py-5 shadow-lg bg-white rounded-2xl">
                {
                    items.map((value) => (<div key={value.name} className="text-4xl text-center">{value.name} ({value.quantity})</div>
                ))}
            </div>
        </div>
    )
}