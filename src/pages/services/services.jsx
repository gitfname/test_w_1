import m from "mithril"
import heroImg from "../../assets/home-2.jpg"
import { android, content, desktopSvg, desktopSvg_2, layersSvg, medalSvg, phone, statitics, vector } from "../../assets/icons.jsx"
import ctaImg from "../../assets/counter.jpg"

const services = {
    view: function () {
        return <>
            {/* hero */}
            <div class="hero min-h-screen" style={`background-image: url(${heroImg})`}>
                <div class="hero-overlay bg-black/60"></div>
                <div class="hero-content w-full h-full justify-start pt-10 flex-col">
                    <p class="text-white/80 font-bold text-lg text-center">Our Services</p>
                    <h2 class="text-5xl md:text-6xl font-bold text-white/90">What We Do</h2>
                    <div class="breadcrumbs text-white/80">
                        <ul class="flex-wrap gap-y-2">
                            <li>{<m.route.Link href="home">Home</m.route.Link>}</li>
                            <li>{<span>Services</span>}</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="w-full py-16" data-theme="light">
                <div class="w-11/12 mx-auto">
                    {/* our services */}
                    <div class="bg-white">
                        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                            <div class="mb-10 md:mb-16">
                                <p class="text-center text-rose-500 text-lg font-semibold">our services</p>
                                <h2 class="text-gray-800 text-2xl lg:text-4xl font-bold text-center mb-4 mt-3 max-w-md mx-auto">
                                    We provide a wide range of creative services
                                </h2>
                            </div>

                            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16 mt-3">
                                <div class="flex gap-4 md:gap-6">
                                    <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0">
                                        <span class="w-11 h-11 fill-indigo-500">
                                            {
                                                desktopSvg()
                                            }
                                        </span>
                                    </div>

                                    <div>
                                        <h3 class="text-lg md:text-xl font-semibold mb-2">Web development.</h3>
                                        <p class="text-gray-500 mb-2">
                                            A digital agency isn't here to replace your internal team, we're here to partner
                                        </p>
                                        <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
                                    </div>
                                </div>

                                <div class="flex gap-4 md:gap-6">
                                    <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0">
                                        <span class="w-11 h-11 fill-indigo-500">
                                            {
                                                layersSvg()
                                            }
                                        </span>
                                    </div>

                                    <div>
                                        <h3 class="text-lg md:text-xl font-semibold mb-2">Interface Design.</h3>
                                        <p class="text-gray-500 mb-2">
                                            A digital agency isn't here to replace your internal team, we're here to partner
                                        </p>
                                        <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
                                    </div>
                                </div>

                                <div class="flex gap-4 md:gap-6">
                                    <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0">
                                        <span class="w-11 h-11 fill-indigo-500">
                                            {
                                                statitics()
                                            }
                                        </span>
                                    </div>

                                    <div>
                                        <h3 class="text-lg md:text-xl font-semibold mb-2">Business Consulting.</h3>
                                        <p class="text-gray-500 mb-2">
                                            A digital agency isn't here to replace your internal team, we're here to partner
                                        </p>
                                        <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
                                    </div>
                                </div>

                                <div class="flex gap-4 md:gap-6">
                                    <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0">
                                        <span class="w-11 h-11 fill-indigo-500">
                                            {
                                                vector()
                                            }
                                        </span>
                                    </div>

                                    <div>
                                        <h3 class="text-lg md:text-xl font-semibold mb-2">Branding.</h3>
                                        <p class="text-gray-500 mb-2">
                                            A digital agency isn't here to replace your internal team, we're here to partner
                                        </p>
                                        <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
                                    </div>
                                </div>

                                <div class="flex gap-4 md:gap-6">
                                    <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0">
                                        <span class="w-11 h-11 fill-indigo-500">
                                            {
                                                android()
                                            }
                                        </span>
                                    </div>

                                    <div>
                                        <h3 class="text-lg md:text-xl font-semibold mb-2">App development.</h3>
                                        <p class="text-gray-500 mb-2">
                                            A digital agency isn't here to replace your internal team, we're here to partner
                                        </p>
                                        <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
                                    </div>
                                </div>

                                <div class="flex gap-4 md:gap-6">
                                    <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0">
                                        <span class="w-11 h-11 fill-indigo-500">
                                            {
                                                content()
                                            }
                                        </span>
                                    </div>

                                    <div>
                                        <h3 class="text-lg md:text-xl font-semibold mb-2">Content creation.</h3>
                                        <p class="text-gray-500 mb-2">
                                            A digital agency isn't here to replace your internal team, we're here to partner
                                        </p>
                                        <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hero mt-28" style={`background-image: url(${ctaImg})`}>
                        <div class="hero-overlay bg-black/70"></div>

                        <div class="hero-content w-11/12 flex-col h-full items-start py-10">
                           <p class="text-rose-500 text-lg font-semibold">
                                For Every type business
                           </p>

                           <div class="flex flex-col gap-y-8 md:flex-row items-center justify-between w-full">
                                <p class="text-white/90 text-3xl font-bold max-w-sm">
                                    Entrust Your Project to Our Best Team of Professionals
                                </p>
                                <button class="btn btn-ghost bg-rose-500 text-white hover:bg-rose-600 rounded-2xl">get started</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    onbeforeremove: function() {
        window.routeChangeStart()
    },
    oncreate: function() {
        window.routeChanged()
    }
}

export default services