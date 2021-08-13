import { Reservations } from "./Reservations.js"
import { ServiceForm } from "./ServiceForm.js"

// we needed to interpolate the array of requests that we converted to a list element.

export const ButtonsTheClown = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Reservations()}
        </section>
    `
}