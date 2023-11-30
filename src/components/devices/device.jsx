import "./device.css"
import { devices } from "../../state";
import AddDevice from "../../util/addDevice/addDevice";
import { popups, current_position, positions } from "../../state";
import { motion } from "framer-motion"
import DeviceDetails from "../../util/deviceDetails/device";
function Device() {
    function handle_btn_click(e){
        popups.value = {...popups.value, is_device_pop_open: true, current_device: e}
        if(positions.value.length !== 0){
            const position = positions.value.find(pos => pos.deviceId === e.id);
            if(position === undefined){
                current_position.value = {}
            }
            current_position.value = position
        }

        console.log(current_position.value)

        const sidebar = document.querySelector(".sidebar");
        if(sidebar.offsetWidth !== 370){
            popups.value.is_sidebar_open = false
        }
        
    }
    return ( 
        <>
        <div className="device-container">
            <div className="device-head">
                <div className="device-search">
                    <AddDevice />
                    <input type="text" autoComplete="" placeholder="Search devices"/>
                </div>
                <button type="button" className="device-btn" onClick={() => {popups.value = {...popups.value, is_sidebar_open: false}; popups.value = {...popups.value, is_device_pop_open: false} }}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </g>
                    </svg>
                </button>
            </div>
            <div className="device-item">
                <ul>
                    {    
                        devices.value.map(device => (
                            <motion.li key={device.id} onClick={() => handle_btn_click(device)}
                            initial={{ opacity: 0, scale: 0.3 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            >
                                
                                <div className="device-name">
                                    <span>{device.name}</span>
                                    <span>{device.uniqueId}</span>
                                </div>
                                <span className="device-status">
                                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill={(device.status === "offline") ? "red": "green"} stroke={(device.status === "offline") ? "red": "green"}>
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                        <g id="SVGRepo_iconCarrier"> <path fill={(device.status === "offline") ? "red": "green"} d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/> </g>
                                    </svg>
                                </span>
                            </motion.li>
                        )) 
                    }
                </ul>
            </div>
        </div>
        <DeviceDetails/>
        </>
     );
}

export default Device;