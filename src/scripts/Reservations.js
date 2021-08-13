import { getReservations, deleteReservation } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [, reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})



export const Reservations = () => {
    const reservations = getReservations()

    let html = `
        <ul>
           ${reservations.map(reservation => {
        return `<li> ${reservation.childName} </li>
        <li>${reservation.date}<button class="reservation__delete"id="reservation--${reservation.id}">Delete</button></li>`
    }).join("")
        }
        </ul>`
    html += "</ul>"

    return html
}
