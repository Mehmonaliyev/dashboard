import React, { useState } from 'react'
import { useProduct } from '../../context/product'

function CeratProduct(props) {
     // hook
     const [product, setProduct] = useProduct()

     // state
     const [title, setTitle] = useState('')
     const [desc, setDesc] = useState('')
     const [price, setPrice] = useState(0)
     const [count, setCount] = useState(1)


    const hendleProduct = (e) => {
        e.preventDefault()
        try {
            let arr = {...product, products:[...product.products, {id: Date.now(), title, desc, price, count}]};
            setProduct(arr)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-8 mx-auto mt-5 pt-5">
                    <form onSubmit={hendleProduct}>
                        
                        <input 
                        className='form-control my-3 p-2' 
                        type="text" 
                        placeholder='Enter Title' 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                        
                        <input 
                        className='form-control my-3 p-2' 
                        type="text" 
                        placeholder='Enter Descripshin' 
                        value={desc}
                        onChange={(e)=>setDesc(e.target.value)}
                        />
                        
                        <input 
                        className='form-control my-3 p-2' 
                        type="number" 
                        placeholder='Enter Price' 
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        />
                        
                        <input 
                        className='form-control my-3 p-2' 
                        type="number" 
                        placeholder='Enter Count'
                        value={count}
                        onChange={(e)=>setCount(e.target.value)}
                        />

                        <button className='btn btn-outline-warning p-2' onClick={hendleProduct}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CeratProduct
