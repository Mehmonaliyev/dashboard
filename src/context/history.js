import { createContext, useContext, useState } from "react";

const ContextHistory= createContext()

export default function  History({ children }) {
    const [history, setHistory] = useState([])
    
    return (
        <ContextHistory.Provider value={[history, setHistory]}>
            {children}
        </ContextHistory.Provider>
    )
}

const useHistory = () => useContext(ContextHistory);

export { useHistory }