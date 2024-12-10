import { useMatch } from 'react-router-dom';

export default function Result(){
    const{
        params: { id },
    } =useMatch('https://fakestoreapi.com/products/:id');

    console.log(id);

    return(
        <>
        <h1>hii</h1>
        </>
    )
    

}