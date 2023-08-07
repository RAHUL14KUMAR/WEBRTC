import React,{useState,useEffect, useCallback}from 'react';
import {useNavigate} from 'react-router-dom';
import {useSocket} from '../context/SocketProvider';

function Lobby() {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [room,setRoom]=useState("");
 
    const socket=useSocket();
    console.log("socket info",socket);

    const handleSubmit=(e)=>{
        e.preventDefault();
        socket.emit('room:join',{email,room});
    }

    const handleRoom=useCallback((data)=>{
        const {email,room}=data;
        console.log("email:-",email,"room:-",room);
        navigate(`/room/${room}`)
    },[])

    useEffect(()=>{
        socket.on("room:joined",handleRoom);
        // because humare component multiple time rerender karta h toh yeh baar baar ek hi read kare isko rokne k liye hum
        return ()=>{
            socket.off("room:joined",handleRoom)
        }
    },[socket]);

  return (
    <div>
      <h1>Lobby</h1>
      <form>
        <label htmlFor="email">Email Id</label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <label htmlFor="room">Room Number</label>
        <input type="text" id="room" value={room} onChange={(e)=>setRoom(e.target.value)} />
        <br/>
        <button onClick={handleSubmit}>Join</button>
      </form>
    </div>
  )
}

export default Lobby
