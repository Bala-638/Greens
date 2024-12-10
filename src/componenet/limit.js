import { useEffect, useState } from "react";
import useEffect_function from "./useEffect";

export default function Limit(){

    const [data] = useEffect_function('https://fakestoreapi.com/products?limit=9')

    return(
        <>
        {data?(
            <>
            {data.map((value) =>
            <h1>{value.title}</h1>
            )}
            </>
        ):(
            <>

            </>
        )}
        
        </>
    )
}