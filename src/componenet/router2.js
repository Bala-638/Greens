import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navigate from "./navigate";
import Layout2 from "./layout2";
import Result from "./result";
import Single_product from "./single_product";

export default function Router2(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout2 />}>
                        <Route index element={<Navigate  />} />
                        <Route path="https://fakestoreapi.com/products/:id" element={<Single_product />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
        
    )
}