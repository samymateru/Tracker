import { useEffect } from 'react'
import {user, positions, devices} from "./state"
import './App.css'
import { Outlet, useNavigate } from 'react-router'
import Device from './util/deviceDetails/device'

function App() {

  const navigate = useNavigate();
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
    
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const socket = new WebSocket(`${protocol}//localhost:8082/api/socket`);
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.positions){
          positions.value = data.positions
      }
      
    };
      check();
  }, [])


  
  return (
    <>

      <Outlet/>

    </>

    
  )
}

export default App
