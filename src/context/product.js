import { createContext, useContext, useState } from "react";

const ContextProduct = createContext()

export default function Context({ children }) {
    const [product, setProduct] = useState({
       products: [
        {id:1, title:"Iphone", desc:'Lorem ipson dolor....', price:1200, count:23},
        {id:2, title:"Iphone 5", desc:'Lorem ipson dolor....', price:1500, count:53},
        {id:3, title:"Iphone 6", desc:'Lorem ipson dolor....', price:1600, count:63},
        {id:4, title:"Iphone X", desc:'Lorem ipson dolor....', price:8200, count:53},
       ],
       sales:[
        {id:1, title:"Iphone", desc:'Lorem ipson dolor....', price:1200, count:23},
        {id:2, title:"Iphone 5", desc:'Lorem ipson dolor....', price:1500, count:53},
        {id:3, title:"Iphone 6", desc:'Lorem ipson dolor....', price:1600, count:63},
       ]
})
    return (
        <ContextProduct.Provider value={[product, setProduct]}>
            {children}
        </ContextProduct.Provider>
    )
}

const useProduct = () => useContext(ContextProduct);

export { useProduct }