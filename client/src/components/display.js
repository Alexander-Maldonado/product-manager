import React, {useState} from 'react';
import axios from 'axios';

const display=(props)=>{
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const submitForm=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',{title,price,description})
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setTitle('');
                setPrice('');
                setDescription('');
            })
            .catch((err)=>{console.log(err);
            })
    }
    return(
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitForm}>
                <div className='title'>
                    <label>Title</label>
                    <input
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                    name='title'
                    type='text'/>
                </div>
                <div className='price'>
                    <label>Price</label>
                    <input
                    onChange={(e)=>setPrice(e.target.value)}
                    value={price}
                    name='price'
                    type='number'/>
                </div>
                <div className='description'>
                    <label>Description</label>
                    <input
                    onChange={(e)=>setDescription(e.target.value)}
                    value={description}
                    name='description'
                    type='text'/>
                </div>
                <br/>
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
};

export default display;
