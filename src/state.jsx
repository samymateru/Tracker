import { signal } from "@preact/signals-react"

export let devices = signal([]);
export let user = signal({});
export let positions = signal([])
export let popups = signal({
    "is_sidebar_open": false,
    "is_device_pop_open": false,
})
