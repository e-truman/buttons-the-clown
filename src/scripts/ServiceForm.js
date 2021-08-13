import { sendReservation } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partySize">Party Size</label>
            <input type="number" name="partySize" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date Needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationLength">Reservation Length (hours)</label>
            <input type="number" name="reservationLength" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userPartySize = document.querySelector("input[name='partySize']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userReservationLength = document.querySelector("input[name='reservationLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
        "parentName": userParentName,
        "childName" : userChildName,
        "address": userAddress,
        "numberOfAttendees": userPartySize,
        "reservationDate": userDate,
        "reservationLength": userReservationLength
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})
