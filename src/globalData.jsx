import m from "mithril"
import { phone } from "./assets/icons.jsx"

// phone number
function phoneNumber() {
    return "+23-345-67890"
}
function phoneNumber_styled() {
    return <div class="flex items-center gap-x-2">
        <span class="w-6 h-6 fill-rose-500">
            {
                phone()
            }
        </span>
        <span class="text-black/70 text-lg font-bold">{phoneNumber()}</span>
    </div>
}


// logo
function logo_simple() {
    return "megakit"
}
function logo_styled() {
    return <h2 class="text-black/80 text-2xl font-bold mb-3">Mega<span class="text-rose-500">Kit</span></h2>
}


export {
    phoneNumber,
    phoneNumber_styled,
    logo_simple,
    logo_styled
}