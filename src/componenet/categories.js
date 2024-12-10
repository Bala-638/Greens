import { useEffect, useState,link } from "react";
import useEffect_function from "./useEffect";


export default function Categories (){


    const [data] = useEffect_function('https://fakestoreapi.com/products/categories')

    // const [data,setData] = useState(null);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products/categories')
    //         .then(response => response.json())
    //         .then(data => setData(data))
    //         .catch((error) => console.error("Error"))
    // },[]);

    return(
        <>
            {data ? (
                <>
                <div className="categories">
                    <div className="welcome">
                        <div className="welcome_txt">
                            <h5>welcome to</h5>
                            <h1>Greens</h1>
                            <p>Your Trusted Partner</p>
                            <a className="btn wel-btn" href="#cat">Explore Now</a>
                            <a className="btn wel-btn" href="/products">All Product</a>                        </div>
                    </div>

                    <div id="cat" className="cat">  
                    <h1 className="cat-title">Browse by Categories</h1>                          
                        <ul className="cat_cart">
                            {data.map((value) => 
                            <a href={value}>
                                <li>
                                <h2>{value}</h2>
                            </li>
                            </a>
                            )}
                        </ul>
                    </div>
                </div>
                </>
            ):(
                <p>Loading...</p>
            )}
        
        </>
    );
} 