import { signal } from "@preact/signals-react"

export let devices = signal([]);
export let user = signal({"sam": "sam"});
export let popups = signal({
    "is_sidebar_open": false,
    "is_device_pop_open": false,
    "device_pop_data": {
        "name": "name",
        "speed": "10km/h",
        "distance": "100km",
        "notifications": "5"
    }
})
