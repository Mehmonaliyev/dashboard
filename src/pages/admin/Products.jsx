import React, { useState } from 'react';
import ModalComp from '../../components/ModalComp';
import { useHistory } from '../../context/history';
import { useProduct } from '../../context/product';

function Products(props) {
//hooks
    const [product, setProduct] = useProduct();
    const [history, setHistory] = useHistory();

    // state
    const [count, setCount] = useState(0)
    const [isOpen, setIsOpen] = useState({
        id: null,
        open: false

    });


    const [isModal, setIsModal] = useState({
        isOpen: false,
        id: null
    });
    // console.log(product);

    const Sale = (item) => {
        try {
            setIsOpen({ open: true, id: item.id })

        } catch (error) {
            console.log(error);
        }
    }


    const Buy = (e) => {
        e.preventDefault()
        try {
            let NewMass = product.products.map((item) => {
                if (item.id == isOpen.id) {
                    return {
                        ...item,
                        count: item.count - count
                    }
                } else {
                    return item
                }
            });
            let historyObj = NewMass.filter(s => s.id == isOpen.id);

            historyObj = historyObj.map((c) => {
                if (c.id == isOpen.id) {
                    return {
                        ...c,
                        count,
                        price: c.price * count
                    }
                } else {
                    return c
                }
            })
            setHistory([...history, historyObj[0]])



            setProduct({ ...product, products: NewMass })
            isOpen({})
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="row">
            {
                product?.products?.length ? product?.products?.map((item) => {
                    return (
                        <div className="col-md-4 " key={item.id}>
                            <div className="card m-2 p-3 bg-light shadow">
                                <div className="card-body">
                                    <h4 className='card-title'>
                                        {item.title}
                                    </h4>
                                    <p className='card-text'>{item.desc}</p>
                                    <b className='text-muted'>
                                        {item?.price?.toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'USD'
                                        })}
                                    </b>
                                    <br />
                                    <b>{item.count}</b>

                                    <div className="card-action">
                                        <div className='d-flex justify-content-between'>
                                            <button className='btn btn-outline-success p-1' onClick={() => Sale(item)}>Sale</button>
                                            {
                                                (isOpen.open && item.id == isOpen.id) &&
                                                <form onSubmit={Buy}>
                                                    <input className='form-control' type="number" placeholder='Count...  ' value={count} onChange={(e) => setCount(e.target.value)} />
                                                </form>
                                            }
                                            <button className='btn btn-outline-danger p-1'
                                                onClick={() => setIsModal({ isOpen: true, id:item.id})}
                                            >Edit</button>

                                            <ModalComp isModal={isModal} setIsModal={setIsModal} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                    : 'Loading'
            }
        </div>
    )
}

export default Products
