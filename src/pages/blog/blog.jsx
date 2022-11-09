import m from "mithril"
import heroImg from "../../assets/blog-bg-medium.jpg"
import thisWeekEndPopularAuthor from "../../assets/woman-1.jpg"
import article1CardImg from "../../assets/article-1-card-img.jpg"
import article2CardImg from "../../assets/article-2-card-img.jpg"
import article3CardImg from "../../assets/article-3-card-img.jpg"
import article4CardImg from "../../assets/article-4-card-img.jpg"
import article5CardImg from "../../assets/article-5-card-img.jpg"
import { facebook, mail, twitter } from "../../assets/icons.jsx"

const blog = {
    view: function () {
        return <>
            {/* hero */}
            <div class="hero min-h-[450px]" style={`background-image: url(${heroImg})`}>
                <div class="hero-overlay bg-black/60"></div>
                <div class="hero-content w-full h-full justify-start pt-10 flex-col">
                    <p class="text-white/80 font-bold text-lg text-center">Our Blog</p>
                    <h2 class="text-5xl md:text-6xl font-bold text-white/90">Blog Articles</h2>
                    <div class="breadcrumbs text-white/80">
                        <ul class="flex-wrap gap-y-2">
                            <li>{<m.route.Link href="home">Home</m.route.Link>}</li>
                            <li>{<span>Blog</span>}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="w-full grid grid-cols-12" data-theme="light">
                {/* articles */}
                <div class="col-start-1 col-span-full md:col-end-10">
                    <section>
                        <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                            <div class="relative mx-auto max-w-7xl">
                                <div class="grid max-w-lg gap-5 mx-auto md:grid-cols-2 lg:max-w-none">
                                    {/* article */}
                                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div class="flex-shrink-0">
                                            <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1561654791-00316c79efa8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                                        </div>
                                        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div class="flex-1">
                                                <a href="#" class="block mt-2">
                                                    <p class="text-xl font-semibold text-neutral-600">Boost your conversion rate</p>
                                                    <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                                                </a>
                                            </div>
                                            <div class="flex items-center mt-6">
                                                <div class="flex-shrink-0">
                                                    <a href="https://twitter.com/Mike_Andreuzza">
                                                        <span class="sr-only">Michael Andreuzza</span>
                                                        <img class="w-10 h-10 rounded-full" src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-sm font-medium text-neutral-600">
                                                        <a href="https://twitter.com/Mike_Andreuzza" class="hover:underline"> Michaerl Andreuzza</a>
                                                    </p>
                                                    <div class="flex flex-col text-sm text-gray-500">
                                                        <time datetime="2020-03-16"> Mar 16, 2020 </time>
                                                        <span> 6 min read </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* article */}
                                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div class="flex-shrink-0">
                                            <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2024&amp;q=80" alt="" />
                                        </div>
                                        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div class="flex-1">
                                                <a href="https://twitter.com/g_perales" class="block mt-2">
                                                    <p class="text-xl font-semibold text-neutral-600">How to use search engine optimization to drive sales</p>
                                                    <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.</p>
                                                </a>
                                            </div>
                                            <div class="flex items-center mt-6">
                                                <div class="flex-shrink-0">
                                                    <a href="https://twitter.com/g_perales">
                                                        <span class="sr-only">Gabriel Perales</span>
                                                        <img class="w-10 h-10 rounded-full" src="https://pbs.twimg.com/profile_images/1442898475218194432/61p-BNsg_400x400.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-sm font-medium text-neutral-600">
                                                        <a href="#" class="hover:underline"> Gabriel Perales </a>
                                                    </p>
                                                    <div class="flex flex-col text-sm text-gray-500">
                                                        <time datetime="2020-03-16"> Mar 16, 2020 </time>
                                                        <span> 6 min read </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* article */}
                                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div class="flex-shrink-0">
                                            <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1516245556508-7d60d4ff0f39?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                                        </div>
                                        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div class="flex-1">
                                                <a href="#" class="block mt-2">
                                                    <p class="text-xl font-semibold text-neutral-600">Improve your customer experience</p>
                                                    <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
                                                </a>
                                            </div>
                                            <div class="flex items-center mt-6">
                                                <div class="flex-shrink-0">
                                                    <a href="https://twitter.com/wickedlabsHQ">
                                                        <span class="sr-only">Wicked Labs</span>
                                                        <img class="w-10 h-10 rounded-full" src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-sm font-medium text-neutral-600">
                                                        <a href="https://twitter.com/wickedlabsHQ" class="hover:underline"> Wicked Labs </a>
                                                    </p>
                                                    <div class="flex flex-col text-sm text-gray-500">
                                                        <time datetime="2020-03-16"> Mar 16, 2020 </time>
                                                        <span> 6 min read </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* article */}
                                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div class="flex-shrink-0">
                                            <img class="object-cover w-full h-48"
                                                src={article1CardImg} alt="" />
                                        </div>
                                        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div class="flex-1">
                                                <a href="#" class="block mt-2">
                                                    <p class="text-xl font-semibold text-neutral-600">Improve your customer experience</p>
                                                    <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
                                                </a>
                                            </div>
                                            <div class="flex items-center mt-6">
                                                <div class="flex-shrink-0">
                                                    <a href="https://twitter.com/wickedlabsHQ">
                                                        <span class="sr-only">Wicked Labs</span>
                                                        <img class="w-10 h-10 rounded-full" src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-sm font-medium text-neutral-600">
                                                        <a href="https://twitter.com/wickedlabsHQ" class="hover:underline"> Wicked Labs </a>
                                                    </p>
                                                    <div class="flex flex-col text-sm text-gray-500">
                                                        <time datetime="2020-03-16"> Mar 16, 2020 </time>
                                                        <span> 6 min read </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* article */}
                                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div class="flex-shrink-0">
                                            <img class="object-cover w-full h-48"
                                                src={article2CardImg} alt="" />
                                        </div>
                                        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div class="flex-1">
                                                <a href="#" class="block mt-2">
                                                    <p class="text-xl font-semibold text-neutral-600">Improve your customer experience</p>
                                                    <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
                                                </a>
                                            </div>
                                            <div class="flex items-center mt-6">
                                                <div class="flex-shrink-0">
                                                    <a href="https://twitter.com/wickedlabsHQ">
                                                        <span class="sr-only">Wicked Labs</span>
                                                        <img class="w-10 h-10 rounded-full" src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-sm font-medium text-neutral-600">
                                                        <a href="https://twitter.com/wickedlabsHQ" class="hover:underline"> Wicked Labs </a>
                                                    </p>
                                                    <div class="flex flex-col text-sm text-gray-500">
                                                        <time datetime="2020-03-16"> Mar 16, 2020 </time>
                                                        <span> 6 min read </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* article */}
                                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div class="flex-shrink-0">
                                            <img class="object-cover w-full h-48"
                                                src={article3CardImg} alt="" />
                                        </div>
                                        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div class="flex-1">
                                                <a href="#" class="block mt-2">
                                                    <p class="text-xl font-semibold text-neutral-600">Improve your customer experience</p>
                                                    <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
                                                </a>
                                            </div>
                                            <div class="flex items-center mt-6">
                                                <div class="flex-shrink-0">
                                                    <a href="https://twitter.com/wickedlabsHQ">
                                                        <span class="sr-only">Wicked Labs</span>
                                                        <img class="w-10 h-10 rounded-full" src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-sm font-medium text-neutral-600">
                                                        <a href="https://twitter.com/wickedlabsHQ" class="hover:underline"> Wicked Labs </a>
                                                    </p>
                                                    <div class="flex flex-col text-sm text-gray-500">
                                                        <time datetime="2020-03-16"> Mar 16, 2020 </time>
                                                        <span> 6 min read </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* sidebar */}
                <div class="hidden md:block col-start-10 col-span-full pr-3 pt-16">
                    <div class="flex flex-col gap-y-3 bg-gray-50 p-3">
                        <input type="text" class="input rounded-sm input-sm input-bordered" placeholder="Search" />
                        <button class="btn btn-ghost bg-rose-600/80 w-max btn-sm text-white hover:bg-rose-500">Search</button>
                    </div>

                    {/* this weekend popular author */}
                    <div class="card card-compact mt-8 shadow-lg">
                        <figure class="rounded-none max-h-[200px]"><img src={thisWeekEndPopularAuthor} /></figure>

                        <div class="card-body gap-y-0">
                            <h2 class="card-title justify-center text-black/70">Arther Conal</h2>
                            <p class="text-base text-black/40 text-center">CEO-Founder</p>

                            <p class="text-base text-black/60 text-center mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolore.
                            </p>

                            <div class="flex items-center gap-x-2 mt-4">
                                <a href="#" class="w-6 h-6 fill-gray-400 hover:fill-sky-500">
                                    {
                                        facebook()
                                    }
                                </a>

                                <a href="#" class="w-6 h-6 fill-gray-400 hover:fill-sky-500">
                                    {
                                        twitter()
                                    }
                                </a>

                                <a href="#" class="w-6 h-6 fill-gray-400 hover:fill-sky-500">
                                    {
                                        mail()
                                    }
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* tags */}
                    <div class="flex flex-wrap gap-x-2 gap-y-3 mt-8 bg-gray-50 p-2">
                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            JavaScript
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>
                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            HTML
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>
                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            css
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>
                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            html5
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>
                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            pwa
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>
                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            esm2019
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>
                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            css3
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>
                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            webrtc
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>
                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            websocket
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>
                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            web gamed
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>

                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            app
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>

                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            spa
                            <span class="text-gray-600 text-xs inline-block ml-1">(42)</span>
                        </span>

                        <span class="btn btn-sm rounded-xl btn-ghost bg-gray-200">
                            mpa
                            <span class="text-gray-600 text-xs inline-block ml-1">(442)</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* pagination */}
            <div class="flex items-center justify-center py-10 gap-x-2" data-theme="light">
                <button
                    class="inline-flex h-8 w-8 items-center justify-center rounded bg-rose-500 active:scale-95 transition-transform">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 fill-white"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>

                <p class="text-base">
                    3
                    <span class="mx-0.25">/</span>
                    12
                </p>

                <button
                    class="inline-flex h-8 w-8 items-center justify-center rounded bg-rose-500 active:scale-95 transition-transform">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 fill-white"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </>
    },
    onbeforeremove: function () {
        window.routeChangeStart()
    },
    oncreate: function () {
        window.routeChanged()
    }
}

export default blog