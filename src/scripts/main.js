import { fetchReservations } from "./dataAccess.js"
import { ButtonsTheClown } from "./ButtonsTheClown.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
    )
}

render()

// main container has to listen for custom events and re-render html
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)