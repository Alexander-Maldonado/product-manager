import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const OneProduct = (props)=>{
    const [oneProduct, setOneProduct] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost/8000/api/product/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err)=>console.log(err))
    },[]);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    return(
        <div>
            <h2>{oneProduct.title}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: ${oneProduct.description}</p>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    );
};

export default OneProduct;