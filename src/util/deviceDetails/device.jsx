import { Cross1Icon } from "@radix-ui/react-icons";
import { popups, current_position, devices } from "../../state";
import "./device.css"
import Confirm from "../confirm/confirm";
import Commands from "../commandUtil/commands";
import { useEffect } from "react";
function deviceDetails() {

    async function delete_device(){
        try{
            const res = await fetch(`/api/devices/${popups.value.current_device.id}`, {
                method: "DELETE",
            });
            if(res.status === 204){
                const device_response = await fetch('/api/devices');
                if(device_response.ok){
                    const device_list = await device_response.json();
                    console.log(device_list)
                    devices.value = device_list
                }
                else{
                    console.log("error")
                }
            }
            else{
                console.log("error")
            }
            popups.value = {...popups.value, is_device_pop_open: false}
        }
        catch{
            console.log("Error")
        }
        
        
    }
    

        return(
               
                <>
                    <div className="device-wrapper" style={{top: popups.value.is_device_pop_open ? "0.5rem": "-"+"500px"}}>
                        <div className="device-header">
                            <h3>{popups.value.current_device.name}</h3>
                            <button onClick={() => popups.value = {...popups.value, is_device_pop_open: false}}><Cross1Icon color="black"/></button>
                        </div>
                            <div className="device-main">
                            <div className="device-data">
                                <div><span>Speed</span></div>
                                <div><span>{current_position.value !== undefined ? current_position.value.speed : "None"}</span></div>
                            </div>
                            <div className="device-data">
                                <div><span>Distance</span></div>
                                <div><span>{current_position.value.attributes}</span></div>
                            </div>
                            {/* <div className="device-data">
                                <div><span>Ignition</span></div>
                                <div><span>{current_position.value.attributes !== undefined ? current_position.value.attributes.ignition ? "On" : "Off" : "None"}</span></div>
                            </div>
                            <div className="device-data">
                                <div><span>Motion</span></div>
                                <div><span>{current_position.value.attributes !== undefined ? current_position.value.attributes.motion ? "On" : "Off" : "None"}</span></div>
                            </div> */}
                        </div> 
                        <div className="device-footer">
                            <Confirm message="Are you sure you want to delete this device" onClick={delete_device}>
                                <button>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 7V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </Confirm>
                            <button>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button>
                                <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="ic_fluent_directions_24_filled" fill="#212121" fill-rule="nonzero">
                                    <path d="M14.298097,2.98438854 L21.0156115,9.70190296 C22.2848154,10.9711069 22.2848154,13.0288931 21.0156115,14.298097 L14.298097,21.0156115 C13.0288931,22.2848154 10.9711069,22.2848154 9.70190296,21.0156115 L2.98438854,14.298097 C1.71518459,13.0288931 1.71518459,10.9711069 2.98438854,9.70190296 L9.70190296,2.98438854 C10.9711069,1.71518459 13.0288931,1.71518459 14.298097,2.98438854 Z M13.5909903,7.22033009 L13.5068718,7.14771193 C13.2458838,6.95406352 12.8876694,6.9516728 12.6242808,7.14053977 L12.5303301,7.22033009 L12.4577119,7.30444852 C12.2640635,7.56543651 12.2616728,7.92365093 12.4505398,8.18703958 L12.5303301,8.28099026 L13.249,8.99966017 L11.75,9 L11.5824777,9.00501879 C10.1993355,9.08813264 9.09181488,10.1935732 9.00542625,11.5758301 L9,11.75 L9,15 L9.00684662,15.1017706 C9.05650904,15.4678461 9.37030423,15.75 9.75,15.75 C10.1296958,15.75 10.443491,15.4678461 10.4931534,15.1017706 L10.5,15 L10.5,11.75 L10.5064536,11.6221948 C10.5661986,11.033896 11.033896,10.5661986 11.6221948,10.5064536 L11.75,10.5 L13.25,10.4996602 L12.5303301,11.2203301 L12.4577119,11.3044485 C12.2398575,11.59806 12.2640635,12.0147237 12.5303301,12.2809903 C12.7965966,12.5472568 13.2132603,12.5714629 13.5068718,12.3536084 L13.5909903,12.2809903 L15.5909903,10.2809903 L15.6636084,10.1968718 C15.8572568,9.93588383 15.8596475,9.57766942 15.6707806,9.31428077 L15.5909903,9.22033009 L13.5909903,7.22033009 L13.5068718,7.14771193 L13.5909903,7.22033009 Z" id="🎨-Color">
                                    </path>
                                    </g>
                                    </g>
                                </svg>
                            </button>
                            <Commands>
                                <button>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0004 18.5816V12.5M12.7976 18.754L15.8103 19.7625C17.4511 20.3118 18.2714 20.5864 18.7773 20.3893C19.2166 20.2182 19.5499 19.8505 19.6771 19.3965C19.8236 18.8737 19.4699 18.0843 18.7624 16.5053L14.2198 6.36709C13.5279 4.82299 13.182 4.05094 12.7001 3.81172C12.2814 3.60388 11.7898 3.60309 11.3705 3.80958C10.8878 4.04726 10.5394 4.8182 9.84259 6.36006L5.25633 16.5082C4.54325 18.086 4.18671 18.875 4.33169 19.3983C4.4576 19.8528 4.78992 20.2216 5.22888 20.394C5.73435 20.5926 6.55603 20.3198 8.19939 19.7744L11.2797 18.752C11.5614 18.6585 11.7023 18.6117 11.8464 18.5933C11.9742 18.5769 12.1036 18.5771 12.2314 18.5938C12.3754 18.6126 12.5162 18.6597 12.7976 18.754Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </Commands>
                        </div>
                    </div>
                </>
            
        );

                                 
 }
                             
        


export default deviceDetails;