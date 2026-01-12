import { useEffect, useState } from "react"


export default function Instamart1(){

    const [InstaData, setInstaData] = useState([]);

    useEffect(()=>{
        async function fetchInstaData(){
            const proxyServer =  "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = "https://www.swiggy.com/api/instamart/home?pageNo=2&layoutId=2671&storeId=1062416&primaryStoreId=1062416&secondaryStoreId=1399809";
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            setInstaData(data?.data?.widgets[0]?.data);
        }

        fetchInstaData();
    },[]);

    console.log(InstaData);
    return(
        <div>
            {
                InstaData?.map((instaInfo)=><InstaCard key={instaInfo?.nodeId} instaInfo={instaInfo}></InstaCard>)
            }
        </div>

    )
}