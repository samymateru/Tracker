import { Route, Routes } from "react-router";
import App from "./App";
import MainPage from "../src/components/mainpage/mainpage"
import Login from "./components/login/login";

function Navigation() {
    return ( 
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route  path="/" element={<App/>}>
                <Route index element={<MainPage/>}/>
            </Route>
        </Routes>
     );
}

export default Navigation;