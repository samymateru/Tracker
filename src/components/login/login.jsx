import { useNavigate } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';
import { useRef, useState } from 'react';
import './login.css';
import dayjs from 'dayjs';

const Login = () => {
  const navigate = useNavigate();
  const [loginResponse, setloginResponse] = useState("");
  const userName = useRef("");
  const passWord_login = useRef("");
  const fullName = useRef("");
  const user_email = useRef("");
  const passWord_register = useRef("");
  const confirmPassWord = useRef("");

  // --------------------------------> Function to handle login process <---------------------------------
   async function HandleLogin(){
    const query = `email=${encodeURIComponent(userName.current.value)}&password=${encodeURIComponent(passWord_login.current.value)}`;

    try {
      const response = await fetch('/api/session',{
        method: "POST",
        body: new URLSearchParams(query)
      });

      if(response.ok){
        const user = await response.json();
        console.log(user)
        generateLoginToken();
        navigate("/")
      }
      else if(response.status === 401){
          setloginResponse(prev => prev = "Invalid credentials")
          passWord_login.current.value = ""
      }

      else{
        setloginResponse(prev => prev = "Internal server errror");
        passWord_login.current.value = ""
      }
     
    } 
    catch (error) {
      setloginResponse(prev => prev = "Internal server errror");
    }
  }

  // ----------------------> Function to handle registration process <-------------------------------------
  async function HandleRegister() {
    const name = fullName.current.value
    const email = user_email.current.value
    const password = passWord_register.current.value
    const administrator  = true
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name, email, password, administrator}),
    });
    if (response.ok) {
      console.log(await response.json())
    } else {
      throw Error(await response.text());
    }
  }

  // --------------------------------------> Generate Login Token <-----------------------------------
  const generateLoginToken = async () => {
      let token = '';
      try {
        const expiration = dayjs().add(6, 'months').toISOString();
        const response = await fetch('/api/session/token', {
          method: 'POST',
          body: new URLSearchParams(`expiration=${expiration}`),
        });
        if (response.ok) {
          token = await response.text();
        }
      } catch (error) {
        token = '';
      }
  };


  return(
      <Tabs.Root className="account-tabsRoot" defaultValue="tab1">
        <Tabs.List className="account-tabsList" aria-label="Manage your account">
          <Tabs.Trigger className="account-tabsTrigger" value="tab1">
            Login
          </Tabs.Trigger>
          <Tabs.Trigger className="account-tabsTrigger" value="tab2">
            Register
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="account-tabsContent" value="tab1">
          <p className="Text">Please provide valid username and password to login</p>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Username
            </label>
            <input className="Input" id="name" placeholder="example@someone.co.tz" ref={userName} type='email'/>
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Password
            </label>
            <input className="Input" id="username" placeholder="password" ref={passWord_login}/>
          </fieldset>
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button className="Button green" type='button' onClick={HandleLogin}>Login</button>
          </div>
          <div className='login-response'>
            <p>{loginResponse}</p>
          </div>
        </Tabs.Content>
        <Tabs.Content className="account-tabsContent" value="tab2">
          <p className="Text">Please fill all the fields with valid details</p>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="fullname">
              Full Name
            </label>
            <input className="Input" id="fullname" type="text" placeholder="Samwel Alfred"ref={fullName}/>
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="email">
              Email
            </label>
            <input className="Input" id="email" type="email" placeholder='super@Tech.com' ref={user_email}/>
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="password">
              Password
            </label>
            <input className="Input" id="password" type="password" placeholder='Strong Password' ref={passWord_register}/>
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input className="Input" id="confirmPassword" type="password" placeholder='Strong Password' ref={confirmPassWord}/>
          </fieldset>
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button className="Button green" onClick={HandleRegister}>Register</button>
          </div>
          <button>Forgot password</button>
        </Tabs.Content>
      </Tabs.Root>
);
}
export default Login;