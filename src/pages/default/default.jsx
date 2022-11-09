import m from "mithril"
import { facebook, github, mail, phone, twitter } from "../../assets/icons.jsx"
import footer from "../../components/footer.jsx"

export default {
    view: function () {
        return <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle peer" />
            <div class="drawer-content flex flex-col peer-checked:translate-x-10">
                <div class="bg-slate-900/60 p-3 flex flex-col sm:flex-row gap-y-4 items-center justify-between">
                    <div class="flex items-center gap-x-2">
                        <a href="#" class="w-5 h-5 fill-sky-400/80 hover:fill-sky-400 transition-colors">
                            {
                                facebook()
                            }
                        </a>

                        <a href="#" class="w-5 h-5 fill-sky-400/80 hover:fill-sky-400 transition-colors">
                            {
                                mail()
                            }
                        </a>

                        <a href="#" class="w-5 h-5 fill-sky-400/80 hover:fill-sky-400 transition-colors">
                            {
                                twitter()
                            }
                        </a>

                        <a href="#" class="w-5 h-5 fill-sky-400/80 hover:fill-sky-400 transition-colors">
                            {
                                github()
                            }
                        </a>
                    </div>

                    <div class="flex items-center gap-x-4">
                        <div class="flex items-center gap-x-1">
                            <span class="text-white/60 font-semibold fill-white/70 w-5 h-5">
                                {
                                    phone()
                                }
                            </span>
                            <span class="text-white/50">+23-345-67890 </span>
                        </div>

                        <div class="flex items-center gap-x-1">
                            <span class="text-white/60 font-semibold fill-white/70 w-5 h-5">
                                {
                                    mail()
                                }
                            </span>
                            <span class="text-white/50">examle@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div class="w-full navbar justify-between bg-slate-900/60 border-t border-t-white/10 py-10">
                    <div class="flex-1">
                        <m.route.Link href="home" class="px-2 mx-2 font-bold text-2xl">
                            <span class="text-sky-500">Tech</span>
                            <span class="text-gray-400">News.</span>
                        </m.route.Link>
                    </div>
                    <div class="lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="flex gap-x-1">
                            {
                                window.appRoutes.map(function (appRoute) {
                                    return <li>
                                        <m.route.Link
                                            data-app-route-name={appRoute.name.toLowerCase()}
                                            href={appRoute.link}
                                            class="btn btn-sm btn-ghost text-white/50 capitalize">
                                            {appRoute.name}
                                        </m.route.Link>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div id="root"></div>
                <div id="footer"></div>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="flex flex-col p-4 w-72 bg-base-100 items-center gap-y-1">
                    {
                        window.appRoutes.map(function (appRoute) {
                            return <li>
                                <m.route.Link
                                    data-app-route-name={appRoute.name.toLowerCase()}
                                    href={appRoute.link}
                                    class="btn btn-sm btn-ghost text-white/50 text-base capitalize">
                                    {appRoute.name}
                                </m.route.Link>
                            </li>
                        })
                    }
                </ul>

            </div>
        </div>
    },

    oncreate: function () {
        const root = document.getElementById("root"),
            footer_element = document.getElementById("footer")


        let currentItem = null, prevItem = null
        function changeNavActiveItem(current) {
            currentItem = current
            if (!prevItem) {
                prevItem = currentItem
                currentItem.classList.add("btn-active")
            }
            else {
                prevItem.classList.remove("btn-active")
                currentItem = current
                currentItem.classList.add("btn-active")
                prevItem = currentItem
            }
        }

        m.mount(footer_element, footer)

        m.route(root, "/home", {
            "/home": {
                onmatch: function () {
                    changeNavActiveItem(document.querySelector(`[data-app-route-name='${location.hash.slice(3).toLowerCase()}']`))
                    return new Promise(function (resolve) {
                        import(/*webpackChunkName: "homePage"*/"../home/home.jsx")
                            .then(function (module) {
                                resolve(module.default)
                            })
                    })
                }
            },
            "/about": {
                onmatch: function () {
                    changeNavActiveItem(document.querySelector(`[data-app-route-name='${location.hash.slice(3).toLowerCase()}']`))
                    return new Promise(function (resolve) {
                        import(/*webpackChunkName: "aboutPage"*/"../about/about.jsx")
                            .then(function (module) {
                                resolve(module.default)
                            })
                    })
                }
            },
            "/services": {
                onmatch: function () {
                    changeNavActiveItem(document.querySelector(`[data-app-route-name='${location.hash.slice(3).toLowerCase()}']`))
                    return new Promise(function (resolve) {
                        import(/*webpackChunkName: "servicesPage"*/"../services/services.jsx")
                            .then(function (module) {
                                resolve(module.default)
                            })
                    })
                }
            },
            "/blog": {
                onmatch: function () {
                    changeNavActiveItem(document.querySelector(`[data-app-route-name='${location.hash.slice(3).toLowerCase()}']`))
                    return new Promise(function (resolve) {
                        import(/*webpackChunkName: "blogPage"*/"../blog/blog.jsx")
                            .then(function (module) {
                                resolve(module.default)
                            })
                    })
                }
            },
            "/login": {
                onmatch: function () {
                    changeNavActiveItem(document.querySelector(`[data-app-route-name='${location.hash.slice(3).toLowerCase()}']`))
                    return new Promise(function (resolve) {
                        import(/*webpackChunkName: "loginPage"*/"../login/login.jsx")
                            .then(function (module) {
                                resolve(module.default)
                            })
                    })
                }
            },
            "/signup": {
                onmatch: function () {
                    console.log("signup");
                    // changeNavActiveItem(document.querySelector(`[data-app-route-name='${location.hash.slice(3).toLowerCase()}']`))
                    return new Promise(function (resolve) {
                        import(/*webpackChunkName: "signupPage"*/"../signup/signup.jsx")
                            .then(function (module) {
                                resolve(module.default)
                            })
                    })
                }
            }
        })
    }
}