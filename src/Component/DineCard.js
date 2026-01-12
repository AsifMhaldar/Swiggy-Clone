

export default function DineCard({RestData}){

    return(
        <div className="relative max-w-sm flex-none shadow-lg bg-white mb-3 rounded-2xl">
            <a href={RestData?.cta?.link}>
            <div className="relative"> 
                <img className="w-80 h-50 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.info?.mediaFiles[0]?.url}></img>
                <p className="absolute bottom-2 left-2 text-xl text-white font-bold z-10">{RestData?.info?.name}</p>
                <p className="absolute bottom-2 right-2 text-xl text-white font-bold z-10">{RestData?.info?.rating?.value}</p>
                <div className="absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0"></div>
                
            </div>
            <p className="absolute mt-2 text-left text-sm ml-2 mr-2">{RestData?.info?.cuisines}</p>
            <p className=" mt-2 text-right text-sm ml-2 mr-2">{RestData?.info?.costForTwo}</p>
            <p className="absolute text-left text-sm ml-2 mt-1 mr-2">{RestData?.info?.locationInfo?.formattedAddress}</p>
            <p className="text-sm text-right mt-1 mr-2">{RestData?.info?.locationInfo?.distanceString}</p>
            <p className="w-[50%] ml-2 mb-1 mt-2 pl-5 bg-green-600 rounded-full">{RestData?.info?.offerInfoV2?.otherOffers?.offers[0].header}</p>
            </a>  
            
        </div>
    )
}