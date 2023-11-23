import "./account.css"
import {user, devices} from "../../state"
import { is_sidebar_open } from "../../state";
function Account() {
    return ( 
        <div className="account-container">
              <div className="report-nav">
                <h1>Account</h1>
                <button type="button" className="account-btn" onClick={() => is_sidebar_open.value = false}>
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