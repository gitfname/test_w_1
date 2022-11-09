import m from "mithril"
import { phone } from "../assets/icons.jsx"
import { logo_styled, phoneNumber, phoneNumber_styled } from "../globalData.jsx"

const footer = {
    view: function () {
        return <div id="footer-section" class="bg-gray-100 py-10 grid md:grid-cols-2 lg:grid-cols-3 px-5 gap-y-9">
            <div class="flex flex-col gap-y-2 w-full md:w-max">
                <h2 class="text-black/80 text-xl font-bold mb-3">Compony</h2>
                <div class="flex items-center group">
                    <span class="h-px  bg-gray-500 w-4 mr-1"></span>
                    <a href="#" class="text-black/70 link link-hover group-hover:translate-x-1 transition-transform duration-200">Terms & Conditions</a>
                </div>
                <div class="flex items-center group">
                    <span class="h-px  bg-gray-500 w-4 mr-1"></span>
                    <a href="#" class="text-black/70 link link-hover group-hover:translate-x-1 transition-transform duration-200">Privacy Policy</a>
                </div>
                <div class="flex items-center group">
                    <span class="h-px  bg-gray-500 w-4 mr-1"></span>
                    <a href="#" class="text-black/70 link link-hover group-hover:translate-x-1 transition-transform duration-200">Support</a>
                </div>
                <div class="flex items-center group">
                    <span class="h-px  bg-gray-500 w-4 mr-1"></span>
                    <a href="#" class="text-black/70 link link-hover group-hover:translate-x-1 transition-transform duration-200">FAQ</a>
                </div>
            </div>

            <div class="flex flex-col gap-y-2 w-full md:w-max">
                <h2 class="text-black/80 text-xl font-bold mb-3">Quick Links</h2>
                {
                    window.appRoutes.map(function (appRoute) {
                        return <div class="flex items-center group">
                            <span class="h-px  bg-gray-500 w-4 mr-1"></span>
                            <m.route.Link href={appRoute.link} class="text-black/70 link link-hover group-hover:translate-x-1 transition-transform duration-200">{appRoute.name}</m.route.Link>
                        </div>
                    })
                }
            </div>

            <div class="flex flex-col gap-y-2 w-full">
                {
                    logo_styled()
                }
                {
                    phoneNumber_styled()
                }

                <div class="flex flex-col gap-y-3">
                    <input type="text" class="input max-w-[300px] text-black/70 p-5 w-full input-sm input-bordered rounded input-info bg-transparent"
                        placeholder="subscribe to our newsletter" />
                    <button
                        class="btn btn-sm btn-ghost bg-rose-500 text-white
                        capitalize hover:bg-rose-600 w-max rounded-none">
                        subscribe
                    </button>
                </div>
            </div>
        </div>
    }
}

export default footer