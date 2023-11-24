import "./reports.css"
import { popups } from "../../state";
function Reports() {
    return ( 
        <div className="reports-container">
            <div className="report-nav">
                <h1>Reports</h1>
                <button type="button" className="report-btn" onClick={() => popups.value = {...popups.value, is_sidebar_open: false}}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </g>
                        </svg>
                </button>
            </div>
            
            <ul>
                <li className="report-item">
                    <svg fill="#e8e8e8" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#e8e8e8">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M132.741,108.06C59.546,108.06,0,167.606,0,240.801c0,34.903,16.315,85.856,41.556,129.805 c28.759,50.069,61.991,78.787,91.185,78.787c29.194,0,62.426-28.718,91.185-78.787c25.241-43.949,41.555-94.903,41.555-129.805 C265.482,167.606,205.935,108.06,132.741,108.06z M132.741,430.431c-41.194,0-113.778-109.625-113.778-189.63 c0-62.736,51.037-113.778,113.778-113.778c62.741,0,113.778,51.042,113.778,113.778 C246.518,320.805,173.935,430.431,132.741,430.431z"/> </g> </g> <g> <g> <path d="M132.741,174.431c-36.593,0-66.37,29.773-66.37,66.37c0,36.597,29.778,66.37,66.37,66.37s66.37-29.773,66.37-66.37 C199.111,204.204,169.333,174.431,132.741,174.431z M132.741,288.208c-26.139,0-47.407-21.269-47.407-47.407 c0-26.139,21.269-47.407,47.407-47.407c26.139,0,47.407,21.268,47.407,47.407C180.148,266.94,158.88,288.208,132.741,288.208z"/> </g> </g> <g> <g> <path d="M417.185,13.245c-52.278,0-94.815,42.532-94.815,94.815c0,47.736,57.62,142.222,94.815,142.222S512,155.796,512,108.06 C512,55.778,469.463,13.245,417.185,13.245z M417.185,231.319c-19.907,0-75.852-77.81-75.852-123.259 c0-41.824,34.028-75.852,75.852-75.852c41.824,0,75.852,34.028,75.852,75.852C493.037,153.509,437.093,231.319,417.185,231.319z"/> </g> </g> <g> <g> <path d="M417.185,60.653c-26.139,0-47.407,21.268-47.407,47.407c0,26.139,21.269,47.407,47.407,47.407 c26.139,0,47.407-21.269,47.407-47.407C464.593,81.921,443.324,60.653,417.185,60.653z M417.185,136.505 c-15.685,0-28.444-12.759-28.444-28.444c0-15.685,12.759-28.444,28.444-28.444s28.444,12.759,28.444,28.444 C445.63,123.745,432.87,136.505,417.185,136.505z"/> </g> </g> <g> <g> <path d="M347.407,366.259c-11.426-9.514-16.685-19.546-16.102-30.671c1.296-24.805,32.018-50.611,43.741-58.458 c4.343-2.912,5.518-8.796,2.611-13.148c-2.907-4.357-8.806-5.537-13.139-2.625c-2.046,1.361-50.046,33.801-52.148,73.19 c-0.926,17.278,6.778,32.852,22.889,46.278c35.158,29.301,54.657,58.958,49.667,75.56c-4.259,14.153-26.63,19.509-44.639,21.514 c-81.602,9.079-146.278-17.986-146.935-18.259c-4.824-2.069-10.38,0.181-12.435,4.991c-2.056,4.815,0.167,10.38,4.981,12.44 c2.389,1.028,51.5,21.685,119.88,21.685c11.676,0,23.935-0.602,36.602-2.014c34.472-3.829,54.889-15.57,60.704-34.898 C413.371,427.62,372.611,387.268,347.407,366.259z"/> </g> </g> </g>
                    </svg>
                    <span>Routes</span>
                </li>
                <li className="report-item">
                    <svg fill="#d9d9d9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve" stroke="#d9d9d9">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M8.8,9C4.4,13.5,2,19.4,2,25.6C2,27,3.1,28,4.4,28s2.4-1.1,2.4-2.4c-0.1-4.9,1.9-9.6,5.4-13.1 s8.3-5.4,13.1-5.4c1.4,0,2.4-1.1,2.4-2.4c0-1.4-1.1-2.4-2.4-2.4C19.2,2.2,13.2,4.6,8.8,9z M11.7,25.6c0,1.4,1,2.4,2.4,2.4 s2.4-1.1,2.4-2.4c0-2.3,0.9-4.6,2.6-6.2c1.7-1.7,3.9-2.5,6.2-2.6c1.4,0,2.4-1.1,2.4-2.4c0-1.4-1-2.4-2.4-2.4 c-3.6,0-7.1,1.4-9.7,3.9C15.2,16.4,11.5,20.1,11.7,25.6z"/> </g> <path d="M45.5,15.2c-0.9-1.2-2.1-2.6-2.3-2.8c-0.3-0.2-0.7-0.4-1.1-0.4c-0.4,0-0.8,0.1-1,0.4L31,22.4 c-2.4-2-6-1.9-8.3,0.4c-2.3,2.3-2.4,5.9-0.4,8.3l-9.7,9.7c-0.3,0.3-0.5,0.7-0.5,1.1c0,0.5,0.2,1,0.6,1.3l2.7,2 c3.7,2.9,8.3,4.5,13.2,4.5c11.8,0,21.4-9.6,21.4-21.4C50,23.5,48.3,18.9,45.5,15.2z"/> </g> </g>
                    </svg>
                    <span>Events</span>
                </li>
                <li className="report-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M14.5501 2H9.45007C7.65007 2 7.25008 2.90001 7.02008 4.01001L6.20007 7.92999H17.8001L16.9801 4.01001C16.7501 2.90001 16.3501 2 14.5501 2Z" stroke="#dddedf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.2401 14.3199C19.3201 15.1699 18.6401 15.9 17.7701 15.9H16.4101C15.6301 15.9 15.5201 15.57 15.3801 15.15L15.23 14.7199C15.03 14.1299 14.9001 13.7299 13.8501 13.7299H10.1401C9.10005 13.7299 8.94005 14.1799 8.76005 14.7199L8.61005 15.15C8.47005 15.56 8.36006 15.9 7.58006 15.9H6.22005C5.35005 15.9 4.67005 15.1699 4.75005 14.3199L5.16006 9.89996C5.26006 8.80996 5.47005 7.91992 7.37005 7.91992H16.62C18.52 7.91992 18.7301 8.80996 18.8301 9.89996L19.2401 14.3199Z" stroke="#dddedf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6.20009 5.75H5.47009" stroke="#dddedf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M18.53 5.75H17.8" stroke="#dddedf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M7.65002 10.8301H9.82004" stroke="#dddedf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14.1801 10.8301H16.3501" stroke="#dddedf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 17V18" stroke="#dddedf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 21V22" stroke="#dddedf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 18L2 22" stroke="#dddedf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M21 18L22 22" stroke="#dddedf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                    </svg>
                    <span>Driving</span>
                </li>
                <li className="report-item">
                    <svg fill="#e6e6e6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 361.647 361.647" xml:space="preserve" stroke="#e6e6e6">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <g> <path d="M341.324,294.169h-18.787l-16.461-52.325c-0.983-3.136-4.083-5.412-7.37-5.412H62.941c-3.285,0-6.384,2.274-7.37,5.407 l-16.461,52.33H20.324c-11.028,0-20,8.972-20,20v27.478c0,11.028,8.972,20,20,20h321c11.028,0,20-8.972,20-20v-27.478 C361.324,303.142,352.352,294.169,341.324,294.169z"/> <path d="M122.24,70.508h117.667c4.878,0,7.206-2.067,8.301-3.802c1.561-2.474,1.3-5.309,0.487-7.287l-10.089-32.07 C233.864,12.268,217.144,0,201.335,0h-41.023c-15.808,0-32.527,12.268-37.271,27.348l-10.122,32.179l-0.082,0.294 c-0.17,0.682-0.895,4.242,1.508,7.316C115.546,68.674,117.892,70.508,122.24,70.508z"/> <path d="M81.021,188.954h199.605c2.134,0,4.054-0.949,5.268-2.603c1.214-1.654,1.543-3.77,0.902-5.805l-17.979-57.152 c-0.985-3.133-4.085-5.407-7.369-5.407h-161.25c-3.285,0-6.384,2.274-7.37,5.407l-17.978,57.152 c-0.641,2.036-0.312,4.152,0.902,5.806C76.967,188.005,78.887,188.954,81.021,188.954z"/> </g> </g>
                    </svg>
                    <span>Stops</span>
                </li>
                <li className="report-item">
                    <svg fill="#e6e6e6" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#e6e6e6">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M29.5 7c-1.381 0-2.5 1.12-2.5 2.5 0 0.284 0.058 0.551 0.144 0.805l-6.094 5.247c-0.427-0.341-0.961-0.553-1.55-0.553-0.68 0-1.294 0.273-1.744 0.713l-4.774-2.39c-0.093-1.296-1.162-2.323-2.482-2.323-1.38 0-2.5 1.12-2.5 2.5 0 0.378 0.090 0.732 0.24 1.053l-4.867 5.612c-0.273-0.102-0.564-0.166-0.873-0.166-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5 0-0.332-0.068-0.649-0.186-0.939l4.946-5.685c0.236 0.073 0.48 0.124 0.74 0.124 0.727 0 1.377-0.316 1.834-0.813l4.669 2.341c0.017 1.367 1.127 2.471 2.497 2.471 1.381 0 2.5-1.119 2.5-2.5 0-0.044-0.011-0.086-0.013-0.13l6.503-5.587c0.309 0.137 0.649 0.216 1.010 0.216 1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5z"/> </g>
                    </svg>
                    <span>Charts</span>
                </li>
                <li className="report-item">
                    <svg fill="#e3e3e3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 430 430" xml:space="preserve" stroke="#e3e3e3">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M323.424,128.966c-4.113,0-8.213,0.234-12.277,0.703c-4.898-20.225-15.654-38.647-31.178-53.025 c-19.752-18.294-45.463-28.369-72.4-28.369c-49.559,0-91.801,33.842-103.422,80.719C46.496,130.286,0,177.587,0,235.542 c0,58.77,47.811,106.58,106.576,106.58h62.537l17.182,24.629c6.541,9.377,17.272,14.975,28.705,14.975s22.164-5.598,28.706-14.976 l17.181-24.628h62.537c58.766,0,106.576-47.81,106.576-106.58C430,176.776,382.19,128.966,323.424,128.966z M277.339,285.248 l-50.036,71.726c-2.806,4.021-7.399,6.418-12.303,6.418c-4.903,0-9.497-2.397-12.303-6.418l-50.036-71.727 c-3.197-4.584-3.581-10.565-0.996-15.52c2.585-4.955,7.71-8.063,13.299-8.063H186v-62.143c0-8.284,6.716-15,15-15h28 c8.284,0,15,6.716,15,15v62.143h21.036c5.589,0,10.714,3.108,13.299,8.063C280.92,274.684,280.536,280.664,277.339,285.248z"/> </g>
                    </svg>
                    <span>Export</span>
                </li>
            </ul>
        </div>
     );
}

export default Reports;