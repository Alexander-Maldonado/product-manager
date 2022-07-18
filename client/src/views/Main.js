import React, {useState, useEffect} from 'react';
import NewProduct from '../components/NewProduct';
import DisplayAll from '../components/DisplayAll';

const Main = (props)=>{
    const [products, setProducts] = useState([]);

    return(
        <div>
            <NewProduct products={products} setProducts={setProducts}/>
            <DisplayAll products={products} setProducts={setProducts}/>
        </div>
    )
}

export default Main;