import React, {useState,useEffect} from 'react';


export default function useCryptoData(url:string){
    const [data,setData]=useState(null);
    const [isLoading,setisLoading]=useState(true);
    const [error,setError]=useState<string | null>(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response= await fetch(url);
                if(!response.ok){
                    throw new Error("Failed to fetch data!")
                }
                const data=await response.json();
                setData(data); 
            }
            catch{
                setError("Some unexpected error occured!");
            }
            finally{
                setisLoading(false);
            }
        }
        fetchData();
    },[url]);

    return {data,isLoading,error}
}