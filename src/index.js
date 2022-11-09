import m from "mithril"
import defaultPage from "./pages/default/default.jsx"

window.appRoutes = [
    {
        name: "Home",
        link: "/home"
    },
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Services",
        link: "/services"
    },
    {
        name: "Blog",
        link: "/blog"
    },
    {
        name: "Login",
        link: "/login"
    }
]

window.routeChangeStart = function() {
    document.body.classList.add("hidden")    
}
window.routeChanged = function() {
    document.body.classList.remove("hidden")    
}

const main_container = document.getElementById("main_container")

m.mount(main_container, defaultPage)