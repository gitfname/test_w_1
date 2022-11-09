import m from "mithril"

import heroImg from "../../assets/home-1.jpg"
import whatWeAreImg from "../../assets/home-8.jpg"
import weCreateForYou from "../../assets/home-3.jpg"
import { android, content, desktopSvg, desktopSvg_2, layersSvg, medalSvg, phone, statitics, vector } from "../../assets/icons.jsx"
import man1Img from "../../assets/man-1.jpg"
import man2Img from "../../assets/man-2.jpg"
import home5Img from "../../assets/home-5.jpg"
import woman1Img from "../../assets/woman-1.jpg"

const Home = {
    view: function () {
        return <>
            {/* hero */}
            <div class="hero w-full min-h-screen" style={`background-image: url('${heroImg}')`}>
                <div class="hero-overlay bg-opacity-60">
                    <div class="hero-content flex-col items-start justify-center h-full gap-y-7">
                        <span class="text-white text-lg">Prepare Yourself For New Future</span>
                        <p class="text-5xl font-bold max-w-xl leading-[55px] bg-gradient-to-r from-sky-500 to-white bg-clip-text text-transparent">
                            Our work is
                            presentation of our
                            capabilities.
                        </p>
                        <button class="btn btn-ghost btn-lg bg-rose-500 text-white rounded-full py-2 hover:bg-rose-600">Get Started</button>
                    </div>
                </div>
            </div>

            <div data-theme="light">
                {/* section-1 */}
                <div class="pt-28 w-full">
                    <div class="w-11/12 mx-auto">
                        <span class="text-lg font-bold text-rose-600">We are creative & expert people</span>
                        <p class="text-4xl max-w-lg text-black/90 mt-8 font-bold">
                            We work with business & provide solution to client with their business problem
                        </p>

                        <div class="mt-16 grid md:grid-cols-3 text-center gap-y-14 gap-x-3 items-center">
                            <div class="flex flex-col gap-y-4">
                                <span class="w-14 h-14 fill-rose-500 mx-auto">
                                    {
                                        desktopSvg_2()
                                    }
                                </span>

                                <h2 class="text-black/80 text-xl font-bold">Modern & Responsive design</h2>

                                <p class="text-black/70">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.
                                </p>
                            </div>

                            <div class="flex flex-col gap-y-4">
                                <span class="w-14 h-14 fill-rose-500 mx-auto">
                                    {
                                        medalSvg()
                                    }
                                </span>

                                <h2 class="text-black/80 text-xl font-bold">Awarded licensed company</h2>

                                <p class="text-black/70">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.
                                </p>
                            </div>

                            <div class="flex flex-col gap-y-4">
                                <span class="w-14 h-14 fill-rose-500 mx-auto">
                                    {
                                        layersSvg()
                                    }
                                </span>

                                <h2 class="text-black/80 text-xl font-bold">Build your website Professionally</h2>

                                <p class="text-black/70">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* what we are */}
                <div class="card card-side mt-32 w-full px-2">
                    <figure class="!hidden md:!block max-w-md rounded-none h-[500px] shadow-lg shadow-black/70"><img src={whatWeAreImg} class="h-full" /></figure>
                    <div class="card-body justify-center h-max">
                        <span class="text-rose-500 text-base font-semibold">waht we are</span>
                        <h2 class="card-title text-4xl font-bold text-black/80 max-w-sm">
                            We are dynamic team of creative people
                        </h2>

                        <p class="max-w-sm mt-7 text-black/60">
                            We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.
                        </p>

                        <div class="card-actions mt-5">
                            <button class="btn btn-ghost border-2 border-white hover:bg-white hover:text-black/80 hover:border-rose-500 bg-rose-500 text-white rounded-xl">get started</button>
                        </div>
                    </div>
                </div>

                {/* stats */}
                <div class="mt-28 bg-gray-100/70 py-10">
                    <div class="mx-auto w-max">
                        <div class="stats text-center stats-vertical md:stats-horizontal">
                            <div class="stat">
                                <span class="stat-value text-4xl md:text-5xl">170+</span>
                                <span class="text-black/60 text-base mt-1 capitalize">project done</span>
                            </div>

                            <div class="stat">
                                <span class="stat-value text-4xl md:text-5xl">125M</span>
                                <span class="text-black/60 text-base mt-1 capitalize">user world wide</span>
                            </div>

                            <div class="stat">
                                <span class="stat-value text-4xl md:text-5xl">39</span>
                                <span class="text-black/60 text-base mt-1 capitalize">available country</span>
                            </div>

                            <div class="stat">
                                <span class="stat-value text-4xl md:text-5xl">23</span>
                                <span class="text-black/60 text-base mt-1 capitalize">award winner</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="border-black/10 mt-28" />

                {/* features */}
                <div class="bg-white mt-28">
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

                {/* we create for you */}
                <div
                    class="relative mt-28 w-full h-[500px] bg-cover bg-fixed
                    before:absolute before:top-0 before:right-0 before:bottom-0
                    before:left-0 before:z-10 before:bg-black/50 px-4 flex items-center justify-center md:justify-start"
                    style={`background-image: url(${weCreateForYou})`}>

                    <div class="py-8 px-10 rounded-lg bg-white flex flex-col z-10 gap-y-4">
                        <span class="text-lg font-semibold text-rose-500">we create for you</span>
                        <p class="max-w-xs text-black/80 text-3xl font-bold">
                            Entrust Your Project to Our Best Team of Professionals
                        </p>
                        <p class="text-black/60 max-w-xs text-lg">
                            Have any project on mind? For immidiate support :
                        </p>

                        <div class="flex items-center">
                            <span class="w-7 h-7 fill-rose-500">
                                {
                                    phone()
                                }
                            </span>
                            <span class="text-black/70 text-lg font-semibold">+23-345-67890</span>
                        </div>
                    </div>

                </div>

                {/* Reviews */}
                <div class="w-11/12 mt-28 mx-auto">
                    <p class="text-rose-400 text-lg font-bold capitalize">our customers reviews</p>
                    <p class="text-4xl font-bold text-black/80 mx-auto mt-5">
                        <p class="max-w-sm">
                            Check what's our clients say about us
                        </p>
                    </p>

                    <div class="mt-16 space-y-5 w-full">
                        <div>
                            <section class="rounded-lg bg-gray-100/60 p-8">
                                <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                                    <blockquote class="sm:col-span-2">
                                        <p class="text-xl font-medium sm:text-2xl">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                            perspiciatis cumque neque ut nobis excepturi, quasi iure quisquam
                                            autem alias.
                                        </p>

                                        <cite class="mt-8 inline-flex items-center not-italic">
                                            <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                                            <p class="text-sm uppercase text-gray-500 sm:ml-3">
                                                <strong>Full Name</strong>
                                            </p>
                                        </cite>
                                    </blockquote>

                                    <img
                                        alt="Man"
                                        src={man1Img}
                                        class="aspect-square w-full rounded-lg object-cover max-h-80"
                                    />
                                </div>
                            </section>
                        </div>

                        <div>
                            <section class="rounded-lg bg-gray-100/60 p-8">
                                <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                                    <img
                                        alt="Man"
                                        src={woman1Img}
                                        class="aspect-square w-full rounded-lg object-cover max-h-80"
                                    />
                                    <blockquote class="sm:col-span-2">
                                        <p class="text-xl font-medium sm:text-2xl">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                            perspiciatis cumque neque ut nobis excepturi, quasi iure quisquam
                                            autem alias.
                                        </p>

                                        <cite class="mt-8 inline-flex items-center not-italic">
                                            <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                                            <p class="text-sm uppercase text-gray-500 sm:ml-3">
                                                <strong>Full Name</strong>
                                            </p>
                                        </cite>
                                    </blockquote>
                                </div>
                            </section>
                        </div>

                        <div>
                            <section class="rounded-lg bg-gray-100/60 p-8">
                                <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                                    <blockquote class="sm:col-span-2">
                                        <p class="text-xl font-medium sm:text-2xl">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                            perspiciatis cumque neque ut nobis excepturi, quasi iure quisquam
                                            autem alias.
                                        </p>

                                        <cite class="mt-8 inline-flex items-center not-italic">
                                            <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                                            <p class="text-sm uppercase text-gray-500 sm:ml-3">
                                                <strong>Full Name</strong>
                                            </p>
                                        </cite>
                                    </blockquote>
                                    <img
                                        alt="Man"
                                        src={man2Img}
                                        class="aspect-square w-full rounded-lg object-cover max-h-80"
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Latest Articles */}
                <div
                    class="gap-x-4 bg-center relative py-28 pb-36 px-4 bg-no-repeat bg-cover
                    before:absolute before:top-0 before:right-0 before:bottom-0
                    before:left-0 before:bg-black/80 before:-z-10 z-10"
                    style={`background-image: url(${home5Img})`}>

                    <p class="text-rose-400 text-lg font-bold text-center capitalize">latest news</p>
                    <p class="text-white text-4xl lg:text-5xl max-w-sm text-center mx-auto font-bold mt-4">
                        Latest articles to enrich knowledge
                    </p>

                    <div class="grid md:grid-cols-3 place-content-center mt-14 gap-x-8 gap-y-6">
                        <article class="group">
                            <img
                                alt="Lava"
                                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div class="p-4">
                                <div class="breadcrumbs text-white/60 text-sm">
                                    <ul>
                                        <li><a href="#">Articles</a></li>
                                        <li><a href="#">UI-UX</a></li>
                                        <li><a href="#">article-1</a></li>
                                    </ul>
                                </div>
                                <a href="#" class="inline-block mt-3">
                                    <h3 class="text-lg font-medium text-gray-100">
                                        Finding the Journey to Mordor
                                    </h3>
                                </a>

                                <p class="mt-2 text-sm leading-relaxed text-gray-300 line-clamp-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                    Molestias explicabo corporis voluptatem?
                                </p>

                                <a href="#" class="btn btn-ghost bg-rose-500 hover:bg-rose-600 text-white capitalize rounded-2xl mt-6">read more</a>
                            </div>
                        </article>

                        <article class="group">
                            <img
                                alt="Lava"
                                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div class="p-4">
                                <div class="breadcrumbs text-white/60 text-sm">
                                    <ul>
                                        <li><a href="#">Articles</a></li>
                                        <li><a href="#">UI-UX</a></li>
                                        <li><a href="#">article-2</a></li>
                                    </ul>
                                </div>
                                <a href="#" class="inline-block mt-3">
                                    <h3 class="text-lg font-medium text-gray-100">
                                        Finding the Journey to Mordor
                                    </h3>
                                </a>

                                <p class="mt-2 text-sm leading-relaxed text-gray-300 line-clamp-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                    Molestias explicabo corporis voluptatem?
                                </p>

                                <a href="#" class="btn btn-ghost bg-rose-500 hover:bg-rose-600 text-white capitalize rounded-2xl mt-6">read more</a>
                            </div>
                        </article>

                        <article class="group">
                            <img
                                alt="Lava"
                                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div class="p-4">
                                <div class="breadcrumbs text-white/60 text-sm">
                                    <ul>
                                        <li><a href="#">Articles</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                        <li><a href="#">article-42</a></li>
                                    </ul>
                                </div>

                                <a href="#" class="inline-block mt-3">
                                    <h3 class="text-lg font-medium text-gray-100">
                                        Finding the Journey to Mordor
                                    </h3>
                                </a>

                                <p class="mt-2 text-sm leading-relaxed text-gray-300 line-clamp-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                    Molestias explicabo corporis voluptatem?
                                </p>

                                <a href="#" class="btn btn-ghost bg-rose-500 hover:bg-rose-600 text-white capitalize rounded-2xl mt-6">read more</a>
                            </div>
                        </article>
                    </div>

                    <div class="bg-slate-200 py-10 md:bg-gradient-to-r mx-auto w-11/12 lg:w-full lg:max-w-4xl rounded-lg absolute -bottom-36 left-1/2 -translate-x-1/2">
                        <div class="container m-auto px-6 text-center md:px-12 lg:px-20">
                            <h2 class="mb-5 text-3xl lg:text-4xl font-bold text-black/80 md:text-4xl">
                                Your money in your hands, but safe.
                            </h2>
                            <a href="#" class="btn btn-ghost bg-transparent hover:bg-rose-500 text-rose-500 border-2 border-rose-500 hover:text-white capitalize rounded-2xl mt-6 px-10">get started</a>
                            {/* <a
                                href="#"
                                class="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                <span class="relative text-base font-semibold text-rose-500">
                                    Create an Account now
                                </span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    onbeforeremove: function() {
        window.routeChangeStart()
        document.getElementById("footer-section").classList.remove("pt-64")
    },
    oncreate: function() {
        window.routeChanged()
        document.getElementById("footer-section").classList.add("pt-64")
    }
}

export default Home