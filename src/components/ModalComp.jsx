import {Modal} from 'antd'
import React, { useState } from 'react'
import { useProduct } from '../context/product'

function ModalComp({ isModal, setIsModal }) {

    const [product, setProduct] = useProduct();

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [count, setCount] = useState('')
    return (
        <>

            <Modal open={isModal.isOpen} footer={false} onCancel={() => setIsModal({ isOpen: false })}>
                <form>

                    <input
                        className='form-control my-3 p-2'
                        type="text"
                        placeholder='Enter Title'
                        value={title}
                    />

                    <input
                        className='form-control my-3 p-2'
                        type="text"
                        placeholder='Enter Descripshin'
                        value={desc}
                    />

                    <input
                        className='form-control my-3 p-2'
                        type="number"
                        placeholder='Enter Price'
                        value={price}
                    />

                    <input
                        className='form-control my-3 p-2'
                        type="number"
                        placeholder='Enter Count'
                        value={count}
                    />

                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-danger'>Remove</button>
                        <button className='btn btn-warning'>Edit</button>
                    </div>

                </form>

            </Modal>
        </>

    )
}

export default ModalComp
