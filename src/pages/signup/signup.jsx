import m from "mithril"

const signup = {
    view: function () {
        return <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-lg bg-gray-100 rounded-lg pt-6 px-3">
                <h1 class="text-center text-2xl font-bold text-rose-500 sm:text-3xl">
                    Get started today
                </h1>

                <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                    dolores deleniti inventore quaerat mollitia?
                </p>

                <form action="" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                    <p class="text-lg font-medium text-black/70">Sign in to your account</p>

                    <div>
                        <label for="email" class="text-sm font-medium">Email</label>

                        <div class="relative mt-1">
                            <input
                                type="email"
                                id="email"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="text-sm font-medium">Password</label>

                        <div class="relative mt-1">
                            <input
                                type="password"
                                id="password"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="text-sm font-medium">Conform Password</label>

                        <div class="relative mt-1">
                            <input
                                type="password"
                                id="password"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Confirm password"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="btn btn-ghost block w-full rounded-lg hover:bg-rose-600 bg-rose-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign Up
                    </button>

                    <p class="text-center text-sm text-gray-500">
                        have a account?
                        <m.route.Link class="underline text-sky-500 ml-1" href="/login">Sign in</m.route.Link>
                    </p>
                </form>
            </div>
        </div>
    },
    onbeforeremove: function () {
        window.routeChangeStart()
    },
    oncreate: function () {
        window.routeChanged()
    }
}

export default signup