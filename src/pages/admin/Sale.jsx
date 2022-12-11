import React from 'react'
import { useHistory } from '../../context/history';

function Sale() {
    const [history, setHistory] = useHistory();
    console.log(history);
    return (
        <>

            <div className="row">
                {
                    history.length ? history.map((item) => {
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
                                                <button className='btn btn-outline-success p-1' >Sale</button>

                                                <button className='btn btn-outline-danger p-1'>Edit</button>
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
        </>
    )
}

export default Sale
