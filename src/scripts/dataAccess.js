//You will need to store that external data in your application state when you fetch it. Create a property named requests in your application state object. Its initial value must be an empty array.



const applicationState = {
    reservations: [],
}

const mainContainer = document.querySelector("#container")
// this is fetching the data so that it is moved from application state.
const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            // this function puts the service requests, the paramater we called in the then function, into the empty array me made
            (partyReservations) => {
                // Store the external state in application state
                applicationState.reservations = partyReservations
            }
        )
}

// this function creates a copy of the array we put in the requests container
export const getReservations = () => {
    return applicationState.reservations
}




export const sendReservation = (userReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/reservations`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}


export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}