import { useEffect } from 'react'
import './App.css'
import { Outlet, useNavigate } from 'react-router'

function App() {
  const navigate = useNavigate();
  async function check(){
    const response = await fetch("/api/session");
    console.log(response)
    if(response.status === 200){
      const user = await response.json()
      navigate("/")
    }

    else if(response.status === 404){
      navigate("/login")
    }

  }
  useEffect(() => {
      check();
  }, [])


  
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
