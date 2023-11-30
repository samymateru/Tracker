import "./account.css"
import {user, devices} from "../../state"
import { popups } from "../../state";
import {useDeleteCookie} from "../../util/hooks/helpers";
import { useNavigate } from 'react-router'
function Account() {
    const {value: username, deleteCookie} = useDeleteCookie("JSESSIONID");
    const navigate = useNavigate();
    return ( 
        <div className="account-container">
              <button className="logout-btn" onClick={() => {deleteCookie(); navigate("/login") }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15 12H3.62" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                </svg>
              </button>
              <div className="account-nav">
                <h1>Account</h1>
                <button type="button" className="account-btn" onClick={() => popups.value = {...popups.value, is_sidebar_open: false}}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </g>
                        </svg>
                </button>
            </div>
            <div className="account-item">
                <ul>
                    <li className="account-info">
                        <div>
                            <div><span>Name:</span></div>
                            <div><span>{user.value.name}</span></div>
                        </div>
                        <div>
                            <div><span>Email:</span></div>
                            <div><span>{user.value.email}</span></div>
                        </div>
                        <div>
                            <div><span>Tel:</span></div>
                            <div><span>{(user.value.phone === null) ? "Not set": user.value.phone}</span></div>
                        </div>
                    </li>
                    <li>
                        <div><span>Devices:</span></div>
                        <div><span>{devices.value.length}</span></div>
                    </li>
                    <li>
                        <div><span>Notifications:</span></div>
                        <div><span>10</span></div>
                    </li>
                    <li>
                        <div><span>Status:</span></div>
                        <div><span>{user.value.disabled ? "Inactive": "Active"}</span></div>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default Account;