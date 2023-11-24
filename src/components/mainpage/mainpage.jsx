import "./mainpage.css"
import Tab from "../../util/tabs/tabs";
import { popups } from "../../state";



function Mainpage() {

    return ( 
        <>  
            <div className="sidebar" style={{top: popups.value.is_sidebar_open ? "0": "calc(-100svh - 1rem)"}}>
                <Tab /> 
            </div>
            <section className="main-app">
                <button type="button" className="main-app-btn" onClick={() => popups.value = {...popups.value, is_sidebar_open: true}}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M4 6H20M7 12H17M9 18H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                    </svg>
                </button>
            </section>
        </>
     
     );
}
export default Mainpage;