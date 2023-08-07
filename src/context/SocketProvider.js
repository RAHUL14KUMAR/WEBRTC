import React,{createContext,useMemo,useContext} from 'react'
import {io} from 'socket.io-client'


// main thing to use useMemo is The useMemo hook in React is used to memoize (or cache) the result of an expensive computation and return it when the same input is provided again. It can help optimize the performance of your application by avoiding unnecessary re-calculations and improving responsiveness


const SocketContext=createContext(null);

export const useSocket=()=>{
    const socket=useContext(SocketContext);
    return socket;
}

export const SocketProvider=(props)=>{

    const socket=useMemo(()=>io('http://localhost:8000'),[])

    return(
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}