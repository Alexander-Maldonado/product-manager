import React,{useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const DisplayAll = (props)=>{
    const {products, setProducts} = props;

    useEffect(()=>{
        axios.get('http://localhost/8000/api/product')
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err)=>console.log(err))
    },[])
    return(
        <div>
            <h1>All Products</h1>
            {products.map((product, index)=>(
                <div key={product._id}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                </div>
            ))}
        </div>
    )
}

export default DisplayAll;