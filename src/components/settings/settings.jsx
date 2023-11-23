import "./settings.css"
import { is_sidebar_open } from "../../state";
const color = "rgb(192, 192, 192)"
function Settings() {
    return ( 
        <div className="settings-container">
              <div className="report-nav">
                <h1>Settings</h1>
                <button type="button" className="settings-btn" onClick={() => is_sidebar_open.value = false}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </g>
                        </svg>
                </button>
            </div>
            <ul>
                <li className="setting-item">
                    <svg fill="rgb(192, 192, 192)" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m13.58 11.6-1.33-2.18V6.33A4.36 4.36 0 0 0 10 2.26a2.45 2.45 0 0 0 0-.38A1.94 1.94 0 0 0 8 0a1.94 1.94 0 0 0-2 1.88 1.64 1.64 0 0 0 0 .38 4.36 4.36 0 0 0-2.25 4.07v3.09L2.42 11.6a1.25 1.25 0 0 0 1.06 1.9h1.77A2.68 2.68 0 0 0 8 16a2.68 2.68 0 0 0 2.75-2.5h1.77a1.25 1.25 0 0 0 1.06-1.9zM7.25 1.88A.7.7 0 0 1 8 1.25a.7.7 0 0 1 .75.63 6 6 0 0 0-.75 0 5.9 5.9 0 0 0-.75 0zM8 14.75a1.44 1.44 0 0 1-1.5-1.25h3A1.44 1.44 0 0 1 8 14.75zm-4.52-2.5 1.34-2.17.18-.31V6.33a4 4 0 0 1 .6-2.12A2.68 2.68 0 0 1 8 3.12a2.68 2.68 0 0 1 2.4 1.09 4 4 0 0 1 .6 2.12v3.44l.18.31 1.34 2.17z"/></svg>
                    <span>Notifications</span>
                </li>
                <li className="setting-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill={color}/> <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill={color}/> </g>
                    </svg>
                    <span>Account</span>
                </li>
                <li className="setting-item">
                    <svg fill={color} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 275.334 275.334" xml:space="preserve" stroke={color}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <g> <path d="M137.667,168.021c16.737,0,30.354-13.617,30.354-30.354s-13.617-30.354-30.354-30.354s-30.354,13.617-30.354,30.354 S120.93,168.021,137.667,168.021z M137.667,119.313c10.121,0,18.354,8.233,18.354,18.354s-8.233,18.354-18.354,18.354 s-18.354-8.233-18.354-18.354S127.546,119.313,137.667,119.313z"/> <path d="M269.334,131.667h-23.775c-3.015-54.818-47.074-98.877-101.892-101.892V6c0-3.313-2.687-6-6-6s-6,2.687-6,6v29.605 c0,3.313,2.687,6,6,6c52.969,0,96.062,43.093,96.062,96.062s-43.093,96.062-96.062,96.062s-96.062-43.093-96.062-96.062 c0-36.783,21.452-70.817,54.651-86.704c2.989-1.431,4.253-5.013,2.822-8.002c-1.43-2.988-5.015-4.252-8.002-2.822 c-18.131,8.676-33.473,22.217-44.366,39.158c-10.11,15.724-15.897,33.718-16.924,52.37H6c-3.313,0-6,2.687-6,6s2.687,6,6,6h23.775 c3.015,54.818,47.074,98.877,101.892,101.892v23.775c0,3.313,2.687,6,6,6s6-2.687,6-6v-23.775 c54.818-3.015,98.877-47.074,101.892-101.892h23.775c3.313,0,6-2.687,6-6S272.647,131.667,269.334,131.667z"/> </g> </g>
                    </svg>
                    <span>Devices</span>
                </li>
                <li className="setting-item">
                    <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill={color} stroke={color}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                        <path stroke="black" stroke-width="12" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"/>
                        <circle cx="96" cy="74" r="20" stroke="black" stroke-width="12"/>
                        </g>
                    </svg>
                    <span>Geofences</span>
                </li>
                <li className="setting-item">
                    <svg fill={color} viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke={color}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M1807.059 1270.091c-68.668 48.452-188.725 116.556-343.906 158.57-18.861-102.55-92.725-187.37-196.066-219.106-91.708-28.235-185.11-48.339-279.53-61.666 71.944-60.762 121.638-145.807 135.982-243.162 21.91-.791 44.837-1.243 71.04-1.243 166.023.904 331.143 26.316 490.955 75.445 72.621 22.362 121.525 87.755 121.525 162.861v128.301Zm-451.765 338.824c-114.183 80.753-330.24 198.099-621.176 198.099-129.43 0-379.144-26.203-621.177-198.1v-128.752c0-74.993 49.017-140.499 121.75-162.861 162.41-49.694 330.354-74.88 499.427-74.88h8.47c166.588.79 331.821 26.09 491.407 75.106 72.509 22.249 121.3 87.642 121.3 162.635v128.753Zm-903.53-761.901V734.072c0-155.632 126.608-282.352 282.354-282.352 155.746 0 282.353 126.72 282.353 282.352v112.942c0 155.746-126.607 282.353-282.353 282.353S451.765 1002.76 451.765 847.014Zm734.118-734.118c75.22 0 146.146 29.478 199.567 82.899 53.309 53.421 82.786 124.235 82.786 199.454V508.19c0 155.746-126.607 282.353-282.353 282.353-19.651 0-38.4-2.598-56.47-6.438v-50.033c0-156.423-92.047-290.71-224.188-354.748 8.357-148.066 130.447-266.428 280.658-266.428Zm532.857 758.061c-91.37-28.01-184.546-48.226-279.755-61.666 86.174-72.508 142.192-179.802 142.192-301.1V395.248c0-105.374-41.11-204.65-115.877-279.304-74.767-74.767-173.93-115.99-279.417-115.99-200.696 0-365.138 151.002-390.211 345.148-20.217-3.275-40.433-6.325-61.553-6.325-217.977 0-395.294 177.43-395.294 395.294v112.942c0 121.298 56.018 228.593 142.305 301.214-94.305 13.214-188.16 33.092-279.529 61.1C81.092 1246.375 0 1355.249 0 1480.163v185.675l22.588 16.941c275.238 206.344 563.803 237.177 711.53 237.177 344.244 0 593.618-148.63 711.53-237.177l22.587-16.94v-120.51c205.214-50.597 355.652-146.032 429.177-201.373l22.588-16.941V1141.79c0-125.026-80.979-233.901-201.261-270.833Z" fill-rule="evenodd"/> </g>
                    </svg>
                    <span>Groups</span>
                </li>
                <li className="setting-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#ffffff"/> <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="rgb(192, 192, 192)"/> </g>
                    </svg>
                    <span>Drivers</span>
                </li>
                <li className="setting-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M7 10H17M7 14H12M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                    </svg>
                    <span>Calenders</span>
                </li>
                <li className="setting-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M16 8.00002L19 8.00049C20.6569 8.00075 22.0002 6.65781 22.0005 5.00096C22.0007 3.34411 20.6578 2.00075 19.0009 2.00049C17.3441 2.00023 16.0007 3.34316 16.0005 5.00002L16 8.00002L8.00047 8L8 5.00002C7.99974 3.34316 6.65638 2.00023 4.99953 2.00049C3.34267 2.00075 1.99974 3.34411 2 5.00096C2.00026 6.65781 3.34362 8.00075 5.00047 8.00049L8.00047 8L8 16H16V8.00002Z" fill={color}/> <path d="M16 16L19 16.0005C20.6569 16.0002 22.0002 17.3432 22.0005 19C22.0007 20.6569 20.6578 22.0002 19.0009 22.0005C17.3441 22.0007 16.0007 20.6578 16.0005 19.001L16 16Z" fill={color}/> <path d="M5.00047 16.0005L8.00047 16.001L8 19.001C7.99974 20.6578 6.65638 22.0007 4.99953 22.0005C3.34267 22.0002 1.99974 20.6569 2 19C2.00026 17.3432 3.34362 16.0002 5.00047 16.0005Z" fill={color}/> </g>
                    </svg>
                    <span>Commands</span>
                </li>
                <li className="setting-item">
                    <svg viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill={color} stroke={color}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                        <defs>
                        <style></style>
                        </defs>
                        <title>tools</title>
                        <path class="cls-1" d="M13.32,44.31a4.5,4.5,0,0,0,6.36,6.36L34.44,35.91l-6.36-6.36Z"/>
                        <polygon class="cls-1" points="50.2 16.96 56.63 13.63 60 7.13 56.86 3.99 50.36 7.36 47.03 13.78 39.21 21.61 42.38 24.79 50.2 16.96"/>
                        <path class="cls-1" d="M51.61,34,51,34a8.9,8.9,0,0,0-3.11.58L29.45,16.09A8.9,8.9,0,0,0,30,13l-.06-.6A8.9,8.9,0,0,0,17.19,4.89l6,6a3,3,0,0,1,.68,1.08A3,3,0,0,1,21,16a2.92,2.92,0,0,1-1-.21,3.15,3.15,0,0,1-1.08-.67l-6-6a8.9,8.9,0,0,0,7.49,12.78L21,22a8.9,8.9,0,0,0,3.11-.58L42.6,39.84A8.9,8.9,0,0,0,42,43l.06.6A9,9,0,0,0,51,51.94a8.72,8.72,0,0,0,3.85-.9l-6-6A3.08,3.08,0,0,1,48.21,44,3,3,0,0,1,51,40a2.92,2.92,0,0,1,1,.21,2.72,2.72,0,0,1,1.08.67l6,6A8.9,8.9,0,0,0,51.61,34Z"/>
                        </g>
                    </svg>
                    <span>Maintanance</span>
                </li>

            </ul>
        </div>
     );
}

export default Settings;