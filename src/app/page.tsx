import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Intégrer une image
              <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
      <h1 className="text-6xl font-bold text-center">
        Bienvenue sur Troc Zone !
      </h1>
      <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full p-10">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div
                className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* Left column container*/}
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      {/*Logo*/}
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo" />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Il y a tout pour vous, et vous avez tout pour nous !
                        </h4>
                      </div>

                      <form>
                        <p className="mb-4">Heureux de vous revoir, on se connecte ?</p>
                        {/*Username input*/}
                        <div className="relative mb-4" data-te-input-wrapper-init>
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1"
                            placeholder="" />
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >Username
                          </label>
                        </div>

                        {/*Password input*/}
                        <div className="relative mb-4" data-te-input-wrapper-init>
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            placeholder="Password" />
                          <label
                            htmlFor="exampleFormControlInput11"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >Password
                          </label>
                        </div>

                        {/*Submit button*/}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="gradient mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            
                            >
                            Se connecter
                          </button>

                          {/*Forgot password link*/}
                          <a className="forgot" href="#!"><span>Récupérer son mot de passe</span></a>
                        </div>

                        {/*Register button*/}
                        <div className="flex items-center  pb-6">
                          <p className="mb-0 mr-2">pas de compte ? 👉</p>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Right column container with background and description*/}
                  <div className="gradient flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        Alors qu'est ce qu'on attends, on revends ?
                      </h4>
                      <p className="text-sm">
                      Doctor Who est la plus longue série de science-fiction de tous les temps, avec plus de 800 épisodes répartis sur 39 saisons. Elle a aussi donné naissance à plusieurs séries dérivées, comme Torchwood, The Sarah Jane Adventures ou Class. Elle a eu une influence majeure sur la culture populaire britannique et mondiale, avec des éléments emblématiques comme le TARDIS, les Daleks, les Cybermen ou le tournevis sonique
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
