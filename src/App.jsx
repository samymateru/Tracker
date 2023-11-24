import { useEffect } from 'react'
import {user, devices} from "./state"
import './App.css'
import { Outlet, useNavigate } from 'react-router'
import Device from './util/device/device'
import { io } from "socket.io-client";

function App() {
  const navigate = useNavigate();
  const socket = io('ws://localhost:5000')
  async function check(){
    const response = await fetch("/api/session");
    if(response.status === 200){
      const user_response = await response.json();
      user.value = user_response
      const device_response = await fetch('/api/devices');
      if(device_response.ok){
        const device_list = await device_response.json();
        devices.value = device_list
      }
      else{
        console.log("error")
      }

      navigate("/")
    }

    else if(response.status === 404){
      navigate("/login")
    }

  }
  useEffect(() => {
    socket.on('message', (message) => {
      console.log(message)
    });
      check();
  }, [])


  
  return (
    <>
      <Outlet/>
      <Device/>
    </>

    
  )
}

export default App
