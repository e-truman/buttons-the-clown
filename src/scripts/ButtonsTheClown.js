import { Reservations } from "./Reservations.js"
import { ServiceForm } from "./ServiceForm.js"

// we needed to interpolate the array of requests that we converted to a list element.

export const ButtonsTheClown = () => {
    return `
        <h1>Buttons the Clown!</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Reservations</h2>
            ${Reservations()}
        </section>
    `
}