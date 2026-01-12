



export default function GroceryCard({foodData}){
    return(
        <div className="flex-none">
            <a href={foodData?.action?.link}>
            <img className=" w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
            </a>
            <h2 className="font-bold text-center text-wrap items-center">{foodData?.action?.text}</h2>
        </div>  
    )
}