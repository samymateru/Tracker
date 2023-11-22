import "./account.css"
function Account() {
    return ( 
        <div className="account-container">
            <h1>Account</h1>
            <div className="account-item">
                <ul>
                    <li className="account-info">
                        <div>
                            <div><span>Name:</span></div>
                            <div><span>Samuel Materu</span></div>
                        </div>
                        <div>
                            <div><span>Email:</span></div>
                            <div><span>samymateru1999@gmail.com</span></div>
                        </div>
                        <div>
                            <div><span>Tel:</span></div>
                            <div><span>0787306314</span></div>
                        </div>
                    </li>
                    <li>
                        <div><span>Devices:</span></div>
                        <div><span>10</span></div>
                    </li>
                    <li>
                        <div><span>Notifications:</span></div>
                        <div><span>10</span></div>
                    </li>
                    <li>
                        <div><span>Status:</span></div>
                        <div><span>Inactive</span></div>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default Account;