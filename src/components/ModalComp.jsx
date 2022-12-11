import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useProduct } from '../context/product'

function ModalComp({ isModal, setIsModal }) {

    const [product, setProduct] = useProduct();

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [count, setCount] = useState('')


    useEffect(() => {
        let newMass = product.products.filter(s => s.id == isModal.id);
        console.log(newMass);
        console.log(isModal.id);
        setTitle(newMass[0]?.title);
        setDesc(newMass[0]?.desc);
        setPrice(newMass[0]?.price);
        setCount(newMass[0]?.count);

    }, [isModal.id])

    const hendleClick = () => {
        try {
            let newMass = product.products.map((s) => {
                if (s.id == isModal.id) {
                    return {
                        ...s,
                        title: title,
                        desc: desc,
                        price: price,
                        count: count
                    }
                } else {
                    return s
                }
            });
            setProduct({ ...product, products: newMass })
            setIsModal({ isOpen: false })
        } catch (error) {
            console.log(error);
        }
    }

    const hendleRemove = (e)=>{
        e.preventDefaul()
        try {
            let NewMass = product.products.filter(s => s.id == isModal.id)
            setProduct({ ...product, products: NewMass })
            setIsModal({ isOpen: false })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>

            <Modal open={isModal.isOpen} footer={false} onCancel={() => setIsModal({ isOpen: false })}>
                <form className='p-4 ' onSubmit={hendleClick}>

                    <input
                        className='form-control my-3 p-2'
                        type="text"
                        placeholder='Enter Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        className='form-control my-3 p-2'
                        type="text"
                        placeholder='Enter Descripshin'
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />

                    <input
                        className='form-control my-3 p-2'
                        type="number"
                        placeholder='Enter Price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <input
                        className='form-control my-3 p-2'
                        type="number"
                        placeholder='Enter Count'
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />

                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-danger p-1' onClick={hendleRemove}>Remove</button>
                        <button className='btn btn-warning p-1' onClick={hendleClick}>Edit</button>
                    </div>

                </form>

            </Modal>
        </>

    )
}

export default ModalComp
