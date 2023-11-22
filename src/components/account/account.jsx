import "./account.css"
import {user, devices} from "../../state"
function Account() {
    return ( 
        <div className="account-container">
            <h1>Account</h1>
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