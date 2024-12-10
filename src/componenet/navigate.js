import { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';

export default function Navigate(){

    const History = useNavigate()

    const [data,setData] = useState(null);

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(response => response.json())
        .then(data => setData(data))
        .catch((error) => console.error("Error"))
    },[]); 


    const navigate =  (id) => {
        History(`https://fakestoreapi.com/products/${id}`);
    }
    
    // const [detail,setDetail] = useState(null);

    // const [close,setClose] = useState(false);

    // const detailPage = (Product) =>{
    //     setDetail([{...Product}])
    //     setClose(true)
    // }





    return(
        <>
        {/* {data ? (
            <>
                        {
                data.map((value) => (
                    <button key={data.id} className="datalist" onClick={() => navigate(value.id)}>
                        {value.title}
                    </button>
                ))

            }
            </>
        ):(
            <>
            </>
        )}


                     */}

        

        {/* <>
            {close ? (
                <div>
                {detail ? (
                    <div className="product_detail">
                        {detail.map((get) =>
                        <>
                            <div className="product">
                                <div className="img">
                                    <div className="product_img">
                                        <img src={get.image}/>
                                    </div>
                                    <div className="btn-group btn-group2">
                                        <button className="btn btn2">Add Cart</button>
                                        <button className="btn btn2">Buy Now</button>
                                    </div>
                                </div>
                                <div className="img_detail">
                                    <button className="close" onClick={() => setClose(false)}><i class="fa-regular fa-circle-xmark"></i></button>
                                    <h2>{get.title}</h2>
                                    <p>{get.description}</p>
                                    <span className="ratting"> {get.rating.rate}<i class="fa-solid fa-star"></i></span>
                                    <p className="product_price">₹{get.price}</p>
                                </div>

                            </div>
                        </>)}      
                    </div>):(
                    <>

                    </>
                    )}
            </div>
            ):(
                <>
                </> */}
            {/* )}  */}
            <div>
                {data ? (
                    <ul className="full-card">
                        {data.map((value) =>
                        <li className="card">
                        <div className="img">
                            <a onClick={() => navigate(value.id)}>
                                <img src={value.image} className="card-img-top"/>
                            </a>
                        </div>
                            <div className="card-body">
                                <h5>{value.title}</h5>
                                <span className="ratting"> {value.rating.rate}<i class="fa-solid fa-star"></i></span>
                                <p className="card-text">₹{value.price}</p>
                            </div>
                            <div className="btn-group">
                                <a className="btn">Buy Now</a>
                                <a className="btn" >Add Cart</a>
                            </div>
                        </li>)}
                    </ul>
                ):(
                    <p>Please Waiting.....</p>
                )}

            </div>
            </>
                // </>
    );
}