import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { devices } from '../../state';
import { useRef } from 'react';
import './addDevice.css';

function AddDevice(){
    const device_name = useRef("");
    const device_id = useRef("");
    async function add_device(){
        const name = device_name.current.value;
        const uniqueId = device_id.current.value;
        const add_device_response = await fetch("/api/devices",{
                method: "POST",
                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify({name, uniqueId})
        });

        if(add_device_response.status === 200){
            const device_response = await fetch('/api/devices');
            if(device_response.ok){
                const device_list = await device_response.json();
                devices.value = device_list
            }
            else{
                console.log("error")
            }
        }

        else if(add_device_response.status === 400){
                console.log("device exists")
        }
    }
    return(
        <Dialog.Root>
        <Dialog.Trigger asChild>
            <button type="button" className="device-btn">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#ebebeb" stroke-width="1.5" stroke-linecap="round"/> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#ebebeb" stroke-width="1.5" stroke-linecap="round"/> </g>
                </svg>
            </button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="add-device-dialogOverlay" />
            <Dialog.Content className="add-device-dialogContent">
            <Dialog.Title className="add-device-dialogTitle">Add new device</Dialog.Title>
            <fieldset className="add-device-fieldset">
                <label className="Label" htmlFor="name">
                    Name
                </label>
                <input className="Input" id="name" placeholder='Device 1' ref={device_name}/>
            </fieldset>
            <fieldset className="add-device-fieldset">
                <label className="Label">
                    Identifier
                </label>
                <input className="Input" id="username" placeholder='Imei' ref={device_id}/>
            </fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                <Dialog.Close asChild>
                <button className="add-device-btn" onClick={add_device}>Add</button>
                </Dialog.Close>
            </div>
            <Dialog.Close asChild>
                <button className="IconButton" aria-label="Close">
                <Cross2Icon />
                </button>
            </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
        </Dialog.Root>
    )
}

export default AddDevice;