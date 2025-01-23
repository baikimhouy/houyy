import React from "react";
function Component(props) {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 py-6 flex justify-center">
      <div className="container flex justify-center gap-6">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-4 hidden sm:block">
          <nav className="space-y-4">
            <a href="#Buttons" className="block text-pink-600 font-semibold">
              Buttons
            </a>
            <a href="#Inputs" className="block hover:text-pink-600">
              Inputs
            </a>
            <a href="#Sidebars" className="block hover:text-pink-600">
              Sidebars
            </a>
            <a href="#Navigation" className="block hover:text-pink-600">
              Navigation
            </a>
          </nav>
        </aside>
        <main className="px-1 sm:px-0 w-[100%] sm:w-3/4">
          <div>
            {/* navbarcomponent */}
            <div>
              <h1 className="text-pink-600 font-bold text-2xl">
                Tailwind CSS Navigation-Rachna
              </h1>
              <p className="mt-4 mb-4 text-gray-600">
                Use the button component inside forms, as links, social login,
                payment options with support for multiple styles, colors,
                gradients, and shadows
              </p>
            </div>
            <hr />
            {/* nav */}
            <section>
              <div className="mt-8">
                <h4 className="text-pink-600 font-bold text-xl">Default Nav</h4>
                <p>Basic navbar example with title as Logo..</p>
              </div>
              <div className="bg-white shadow-md rounded-lg mt-8">
                {/* head box */}
                <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                  <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/github.png"
                      alt="GitHub Icon"
                    />
                    <small>Edit on GitHub</small>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-circle-half-stroke"></i>
                  </button>
                </div>
                {/* nav1 */}
                <div className="bg-white-100 p-5">
                  <nav className="shadow-md bg-white rounded-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                      <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <img
                          className="w-auto h-[25px]"
                          src="./img/3.png"
                          alt=""
                        />
                      </a>
                      <button
                        id="mobile-menu-toggle"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      ></button>
                      <div
                        id="navbar-dropdown"
                        className="hidden w-full md:block md:w-auto"
                      >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Home
                            </a>
                          </li>
                          <li className="relative">
                            <button
                              id="dropdownNavbarLink"
                              className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                              Contact us
                            </button>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                    <span className="text-black font-medium">HTML</span>
                    <button className="flex items-center space-x-3 text-black hover:text-gray-800 ">
                      <i className="far fa-copy"></i>
                      <span>Copy</span>
                    </button>
                  </div>
                  {/* code tailwind */}
                  <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                    <pre className="!overflow-visible text-xs">
                      {" "}
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">nav</span>{" "}
                        <span className="hljs-attr">className</span>=
                        <span className="hljs-string">
                          "shadow-md bg-white rounded-lg border-gray-200
                          dark:bg-gray-900 dark:border-gray-700"
                        </span>
                        &gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">div</span>{" "}
                        <span className="hljs-attr">className</span>=
                        <span className="hljs-string">
                          "max-w-screen-xl flex flex-wrap items-center
                          justify-between mx-auto p-4"
                        </span>
                        &gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">a</span>{" "}
                        <span className="hljs-attr">href</span>=
                        <span className="hljs-string">"#"</span>{" "}
                        <span className="hljs-attr">className</span>=
                        <span className="hljs-string">
                          "flex items-center space-x-3 rtl:space-x-reverse"
                        </span>
                        &gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">img</span>{" "}
                        <span className="hljs-attr">className</span>=
                        <span className="hljs-string">"w-auto h-[25px]"</span>{" "}
                        <span className="hljs-attr">src</span>=
                        <span className="hljs-string">"../img/3.png"</span>{" "}
                        <span className="hljs-attr">alt</span>=
                        <span className="hljs-string">"Logo"</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">a</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">button</span>{" "}
                        <span className="hljs-attr">id</span>=
                        <span className="hljs-string">
                          "mobile-menu-toggle"
                        </span>{" "}
                        <span className="hljs-attr">type</span>=
                        <span className="hljs-string">"button"</span>
                        <span className="hljs-attr">className</span>=
                        <span className="hljs-string">
                          "inline-flex items-center p-2 w-10 h-10 justify-center
                          text-sm text-gray-500 rounded-lg md:hidden
                          hover:bg-gray-100 focus:outline-none focus:ring-2
                          focus:ring-gray-200 dark:text-gray-400
                          dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        </span>
                        &gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">button</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">div</span>{" "}
                        <span className="hljs-attr">id</span>=
                        <span className="hljs-string">"navbar-dropdown"</span>{" "}
                        <span className="hljs-attr">className</span>=
                        <span className="hljs-string">
                          "hidden w-full md:block md:w-auto"
                        </span>
                        &gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">ul</span>{" "}
                        <span className="hljs-attr">className</span>=
                        <span className="hljs-string">
                          "flex flex-col font-medium p-4 md:p-0 mt-4 border
                          border-gray-100 rounded-lg bg-gray-50 md:space-x-8
                          rtl:space-x-reverse md:flex-row md:mt-0 md:border-0
                          md:bg-white dark:bg-gray-800 md:dark:bg-gray-900
                          dark:border-gray-700"
                        </span>
                        &gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">li</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">a</span>{" "}
                        <span className="hljs-attr">href</span>=
                        <span className="hljs-string">"#"</span>
                        <span className="hljs-attr">className</span>=
                        <span className="hljs-string">
                          "block py-2 px-3 text-gray-900 rounded
                          hover:bg-gray-100 md:hover:bg-transparent md:border-0
                          md:hover:text-blue-700 md:p-0 dark:text-white
                          md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                          dark:hover:text-white md:dark:hover:bg-transparent"
                        </span>
                        &gt;
                      </span>
                      Home
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">a</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">li</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">li</span>{" "}
                        <span className="hljs-attr">className</span>=
                        <span className="hljs-string">"relative"</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">button</span>{" "}
                        <span className="hljs-attr">id</span>=
                        <span className="hljs-string">
                          "dropdownNavbarLink"
                        </span>
                        <span className="hljs-attr">className</span>=
                        <span className="hljs-string">
                          "flex items-center justify-between w-full py-2 px-3
                          text-gray-900 rounded hover:bg-gray-100
                          md:hover:bg-transparent md:border-0
                          md:hover:text-blue-700 md:p-0 md:w-auto
                          dark:text-white md:dark:hover:text-blue-500
                          dark:focus:text-white dark:border-gray-700
                          dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                        </span>
                        &gt;
                      </span>
                      Contact us
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">button</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">li</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">li</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">a</span>{" "}
                        <span className="hljs-attr">href</span>=
                        <span className="hljs-string">"#"</span>
                        <span className="hljs-attr">className</span>=
                        <span className="hljs-string">
                          "block py-2 px-3 text-gray-900 rounded
                          hover:bg-gray-100 md:hover:bg-transparent md:border-0
                          md:hover:text-blue-700 md:p-0 dark:text-white
                          md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                          dark:hover:text-white md:dark:hover:bg-transparent"
                        </span>
                        &gt;
                      </span>
                      Services
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">a</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">li</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">ul</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">div</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">div</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">nav</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">div</span>&gt;
                      </span>
                    </pre>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-10">
              <div>
                <h4 className="text-pink-600 font-bold text-xl">
                  With Dropdowns
                </h4>
                <p>Below given example displays navbar with dropdown menu.</p>
              </div>
              {/* box put button */}
              <div className="bg-white shadow-md rounded-lg mt-8">
                {/* head box */}
                <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                  <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                    <img
                      src="https://img.icons8.com/ios-glyphs/24/github.png"
                      alt="GitHub Icon"
                    />
                    <small>Edit on GitHub</small>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-circle-half-stroke"></i>
                  </button>
                </div>
                {/* nav2 */}
                <div className="bg-white-100 p-5">
                  <nav className="shadow-md bg-white rounded-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                      <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <img
                          className="w-auto h-[25px]"
                          src="../img/3.png"
                          alt=""
                        />{" "}
                      </a>
                      <button
                        id="mobile-menu-toggle"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      >
                        <span className="sr-only">Open main menu</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 17 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="navbar-dropdown"
                        className="hidden w-full md:block md:w-auto"
                      >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                          <li>
                            <a
                              href="#"
                              className="py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                            >
                              Home
                            </a>
                          </li>
                          <li className="relative">
                            <button
                              id="dropdownNavbarLink"
                              className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                              {" "}
                              Product
                              <svg
                                className="w-2.5 h-2.5 ms-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="m1 1 4 4 4-4"
                                ></path>
                              </svg>
                            </button>
                            <div
                              id="dropdownNavbar"
                              className="hidden absolute left-0 mt-2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Dashboard
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Settings
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Earnings
                                  </a>
                                </li>
                              </ul>
                              <div className="py-1">
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Sign out
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                              Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>

                <div className="bg-white rounded-lg shadow-sm">
                  <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                    <span className="text-black font-medium">HTML</span>
                    <button className="flex items-center space-x-3 text-black hover:text-gray-800 ">
                      <i className="far fa-copy"></i>
                      <span>Copy</span>
                    </button>
                  </div>
                  {/* code tailwind */}
                  <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                    <pre className="theme-base16-materia-min shadow-3xl text-xs relative overflow-hidden max-w-full tab-size h-full">
                      <span className="hljs mb-0 p-4 block min-h-full overflow-auto">
                        <code>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">div</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "bg-white-100 p-5"
                            </span>
                            &gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">nav</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "shadow-md bg-white rounded-lg border-gray-200
                              dark:bg-gray-900 dark:border-gray-700"
                            </span>
                            &gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">div</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "max-w-screen-xl flex flex-wrap items-center
                              justify-between mx-auto p-4"
                            </span>
                            &gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">a</span>{" "}
                            <span className="hljs-attr">href</span>=
                            <span className="hljs-string">"#"</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "flex items-center space-x-3 rtl:space-x-reverse"
                            </span>
                            &gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">img</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "w-auto h-[25px]"
                            </span>{" "}
                            <span className="hljs-attr">src</span>=
                            <span className="hljs-string">"../img/3.png"</span>{" "}
                            <span className="hljs-attr">alt</span>=
                            <span className="hljs-string">""</span>&gt;
                          </span>{" "}
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">a</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">button</span>{" "}
                            <span className="hljs-attr">id</span>=
                            <span className="hljs-string">
                              "mobile-menu-toggle"
                            </span>{" "}
                            <span className="hljs-attr">type</span>=
                            <span className="hljs-string">"button"</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "inline-flex items-center p-2 w-10 h-10
                              justify-center text-sm text-gray-500 rounded-lg
                              md:hidden hover:bg-gray-100 focus:outline-none
                              focus:ring-2 focus:ring-gray-200
                              dark:text-gray-400 dark:hover:bg-gray-700
                              dark:focus:ring-gray-600"
                            </span>
                            &gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">span</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">"sr-only"</span>&gt;
                          </span>
                          Open main menu
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">span</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">svg</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">"w-5 h-5"</span>{" "}
                            <span className="hljs-attr">aria-hidden</span>=
                            <span className="hljs-string">"true"</span>{" "}
                            <span className="hljs-attr">xmlns</span>=
                            <span className="hljs-string">
                              "http://www.w3.org/2000/svg"
                            </span>{" "}
                            <span className="hljs-attr">fill</span>=
                            <span className="hljs-string">"none"</span>{" "}
                            <span className="hljs-attr">viewBox</span>=
                            <span className="hljs-string">"0 0 17 14"</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">path</span>{" "}
                            <span className="hljs-attr">stroke</span>=
                            <span className="hljs-string">"currentColor"</span>{" "}
                            <span className="hljs-attr">stroke-linecap</span>=
                            <span className="hljs-string">"round"</span>{" "}
                            <span className="hljs-attr">stroke-linejoin</span>=
                            <span className="hljs-string">"round"</span>{" "}
                            <span className="hljs-attr">stroke-width</span>=
                            <span className="hljs-string">"2"</span>{" "}
                            <span className="hljs-attr">d</span>=
                            <span className="hljs-string">
                              "M1 1h15M1 7h15M1 13h15"
                            </span>
                            /&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">svg</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">button</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">div</span>{" "}
                            <span className="hljs-attr">id</span>=
                            <span className="hljs-string">
                              "navbar-dropdown"
                            </span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "hidden w-full md:block md:w-auto"
                            </span>
                            &gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">ul</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "flex flex-col font-medium p-4 md:p-0 mt-4 border
                              border-gray-100 rounded-lg bg-gray-50 md:space-x-8
                              rtl:space-x-reverse md:flex-row md:mt-0
                              md:border-0 md:bg-white dark:bg-gray-800
                              md:dark:bg-gray-900 dark:border-gray-700"
                            </span>
                            &gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">li</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">a</span>{" "}
                            <span className="hljs-attr">href</span>=
                            <span className="hljs-string">"#"</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "py-2 px-3 text-black rounded md:bg-transparent
                              md:p-0"
                            </span>
                            &gt;
                          </span>
                          Home
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">a</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">li</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">li</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">"relative"</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">button</span>{" "}
                            <span className="hljs-attr">id</span>=
                            <span className="hljs-string">
                              "dropdownNavbarLink"
                            </span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "flex items-center justify-between w-full py-2
                              px-3 text-gray-900 rounded hover:bg-gray-100
                              md:hover:bg-transparent md:border-0
                              md:hover:text-blue-700 md:p-0 md:w-auto
                              dark:text-white md:dark:hover:text-blue-500
                              dark:focus:text-white dark:border-gray-700
                              dark:hover:bg-gray-700
                              md:dark:hover:bg-transparent"
                            </span>
                            &gt;
                          </span>{" "}
                          Product
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">svg</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "w-2.5 h-2.5 ms-2.5"
                            </span>{" "}
                            <span className="hljs-attr">aria-hidden</span>=
                            <span className="hljs-string">"true"</span>{" "}
                            <span className="hljs-attr">xmlns</span>=
                            <span className="hljs-string">
                              "http://www.w3.org/2000/svg"
                            </span>{" "}
                            <span className="hljs-attr">fill</span>=
                            <span className="hljs-string">"none"</span>{" "}
                            <span className="hljs-attr">viewBox</span>=
                            <span className="hljs-string">"0 0 10 6"</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">path</span>{" "}
                            <span className="hljs-attr">stroke</span>=
                            <span className="hljs-string">"currentColor"</span>{" "}
                            <span className="hljs-attr">stroke-linecap</span>=
                            <span className="hljs-string">"round"</span>{" "}
                            <span className="hljs-attr">stroke-linejoin</span>=
                            <span className="hljs-string">"round"</span>{" "}
                            <span className="hljs-attr">stroke-width</span>=
                            <span className="hljs-string">"2"</span>{" "}
                            <span className="hljs-attr">d</span>=
                            <span className="hljs-string">"m1 1 4 4 4-4"</span>
                            /&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">svg</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">button</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">div</span>{" "}
                            <span className="hljs-attr">id</span>=
                            <span className="hljs-string">
                              "dropdownNavbar"
                            </span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "hidden absolute left-0 mt-2 z-10 font-normal
                              bg-white divide-y divide-gray-100 rounded-lg
                              shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            </span>
                            &gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">ul</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "py-2 text-sm text-gray-700 dark:text-gray-400"
                            </span>
                            &gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">li</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">a</span>{" "}
                            <span className="hljs-attr">href</span>=
                            <span className="hljs-string">"#"</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "block px-4 py-2 hover:bg-gray-100
                              dark:hover:bg-gray-600 dark:hover:text-white"
                            </span>
                            &gt;
                          </span>
                          Dashboard
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">a</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">li</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">li</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">a</span>{" "}
                            <span className="hljs-attr">href</span>=
                            <span className="hljs-string">"#"</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "block px-4 py-2 hover:bg-gray-100
                              dark:hover:bg-gray-600 dark:hover:text-white"
                            </span>
                            &gt;
                          </span>
                          Settings
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">a</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">li</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">li</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">a</span>{" "}
                            <span className="hljs-attr">href</span>=
                            <span className="hljs-string">"#"</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "block px-4 py-2 hover:bg-gray-100
                              dark:hover:bg-gray-600 dark:hover:text-white"
                            </span>
                            &gt;
                          </span>
                          Earnings
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">a</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">li</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">ul</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">div</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">"py-1"</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">a</span>{" "}
                            <span className="hljs-attr">href</span>=
                            <span className="hljs-string">"#"</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "block px-4 py-2 text-sm text-gray-700
                              hover:bg-gray-100 dark:hover:bg-gray-600
                              dark:text-gray-200 dark:hover:text-white"
                            </span>
                            &gt;
                          </span>
                          Sign out
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">a</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">div</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">div</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">li</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">li</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;<span className="hljs-name">a</span>{" "}
                            <span className="hljs-attr">href</span>=
                            <span className="hljs-string">"#"</span>{" "}
                            <span className="hljs-attr">className</span>=
                            <span className="hljs-string">
                              "block py-2 px-3 text-gray-900 rounded
                              hover:bg-gray-100 md:hover:bg-transparent
                              md:border-0 md:hover:text-blue-700 md:p-0
                              dark:text-white md:dark:hover:text-blue-500
                              dark:hover:bg-gray-700 dark:hover:text-white
                              md:dark:hover:bg-transparent"
                            </span>
                            &gt;
                          </span>
                          Services
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">a</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">li</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">ul</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">div</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">div</span>&gt;
                          </span>
                          <span className="hljs-tag">
                            &lt;/<span className="hljs-name">nav</span>&gt;
                          </span>
                        </code>
                      </span>
                    </pre>
                    <code></code>
                  </div>
                  <code></code>
                </div>
                <code></code>
              </div>
            </section>
            <code>
              {/* nav3 */}
              <section className="mt-10">
                <div>
                  <h4 className="text-pink-600 font-bold text-xl">
                    With Indelicate avata
                  </h4>
                  <p>
                    Below given example displays navbar with notifications
                    indicator &amp; user details avatar.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-lg mt-8">
                  {/* head box */}
                  <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                    <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                      <img
                        src="https://img.icons8.com/ios-glyphs/24/github.png"
                        alt="GitHub Icon"
                      />
                      <small>Edit on GitHub</small>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <i className="fa-solid fa-circle-half-stroke"></i>
                    </button>
                  </div>
                  {/* nav */}
                  <div className="bg-white-100 p-5">
                    <nav className="shadow-md bg-white  rounded-lg dark:bg-gray-900">
                      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a
                          href="https://flowbite.com/"
                          className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                          <img
                            className="w-auto h-[25px]"
                            src="../img/3.png"
                            alt=""
                          />{" "}
                        </a>
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                          <i className="fa-regular fa-bell pr-6"></i>
                          <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom"
                          >
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                              alt="user photo"
                            />
                          </button>
                          <button
                            data-collapse-toggle="navbar-user"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-user"
                            aria-expanded="false"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 17 14"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                      <span className="text-black font-medium">HTML</span>
                      <button className="flex items-center space-x-3 text-black hover:text-gray-800 ">
                        <i className="far fa-copy"></i>
                        <span>Copy</span>
                      </button>
                    </div>
                    {/* code tailwind */}
                    <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                      <pre className="theme-base16-materia-min shadow-3xl text-xs relative overflow-hidden max-w-full tab-size h-full">
                        <span className="hljs mb-0 p-4 block min-h-full overflow-auto">
                          <code>
                            &lt;div className
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "bg-white-100 p-5"
                            </span>
                            &gt; &lt;nav className
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "shadow-md bg-white rounded-lg dark:bg-gray-900"
                            </span>
                            &gt; &lt;div className
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "max-w-screen-xl flex flex-wrap items-center
                              justify-between mx-auto p-4"
                            </span>
                            &gt; &lt;a href
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "https://flowbite.com/"
                            </span>{" "}
                            className<span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "flex items-center space-x-3 rtl:space-x-reverse"
                            </span>
                            &gt; &lt;img className
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "w-auto h-[25px]"
                            </span>{" "}
                            src<span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "../img/3.png"
                            </span>{" "}
                            alt<span className="hljs-operator">=</span>
                            <span className="hljs-string">""</span>&gt;
                            &lt;/a&gt; &lt;div className
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "flex items-center md:order-2 space-x-3
                              md:space-x-0 rtl:space-x-reverse"
                            </span>
                            &gt; &lt;i className
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "fa-regular fa-bell pr-6"
                            </span>
                            &gt;&lt;/i&gt; &lt;button type
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">"button"</span>{" "}
                            className<span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "flex text-sm bg-gray-800 rounded-full md:me-0
                              focus:ring-4 focus:ring-gray-300
                              dark:focus:ring-gray-600"
                            </span>{" "}
                            id<span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "user-menu-button"
                            </span>{" "}
                            aria-expanded
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">"false"</span>{" "}
                            data-dropdown-toggle
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "user-dropdown"
                            </span>{" "}
                            data-dropdown-placement
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">"bottom"</span>&gt;
                            &lt;img className
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "w-8 h-8 rounded-full"
                            </span>{" "}
                            src<span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                            </span>{" "}
                            alt<span className="hljs-operator">=</span>
                            <span className="hljs-string">"user photo"</span>
                            &gt; &lt;/button&gt; &lt;button data-collapse-toggle
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "navbar-user"
                            </span>{" "}
                            type<span className="hljs-operator">=</span>
                            <span className="hljs-string">"button"</span>{" "}
                            className<span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "inline-flex items-center p-2 w-10 h-10
                              justify-center text-sm text-gray-500 rounded-lg
                              md:hidden hover:bg-gray-100 focus:outline-none
                              focus:ring-2 focus:ring-gray-200
                              dark:text-gray-400 dark:hover:bg-gray-700
                              dark:focus:ring-gray-600"
                            </span>{" "}
                            aria-controls
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "navbar-user"
                            </span>{" "}
                            aria-expanded
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">"false"</span>&gt;
                            &lt;svg className
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">"w-5 h-5"</span>{" "}
                            aria-hidden<span className="hljs-operator">=</span>
                            <span className="hljs-string">"true"</span> xmlns
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "http://www.w3.org/2000/svg"
                            </span>{" "}
                            fill<span className="hljs-operator">=</span>
                            <span className="hljs-string">"none"</span> viewBox
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">"0 0 17 14"</span>&gt;
                            &lt;path stroke
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "currentColor"
                            </span>{" "}
                            stroke-linecap
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">"round"</span>{" "}
                            stroke-linejoin
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">"round"</span>{" "}
                            stroke-width<span className="hljs-operator">=</span>
                            <span className="hljs-string">"2"</span> d
                            <span className="hljs-operator">=</span>
                            <span className="hljs-string">
                              "M1 1h15M1 7h15M1 13h15"
                            </span>
                            /&gt; &lt;/svg&gt; &lt;/button&gt; &lt;/div&gt;
                            &lt;/div&gt; &lt;/nav&gt;
                          </code>
                        </span>
                      </pre>
                    </div>
                    <code></code>
                  </div>
                  <code></code>
                </div>
              </section>
              <code>
                {/* nav4 */}
                <section className="mt-10">
                  <div>
                    <h4 className="text-pink-600 font-bold text-xl">
                      With center brand name{" "}
                    </h4>
                    <p>
                      Below given example displays navbar with centered brand
                      name.
                    </p>
                  </div>
                  <div className="bg-white shadow-md rounded-lg mt-8">
                    {/* head box */}
                    <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                      <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                        <img
                          src="https://img.icons8.com/ios-glyphs/24/github.png"
                          alt="GitHub Icon"
                        />
                        <small>Edit on GitHub</small>
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <i className="fa-solid fa-circle-half-stroke"></i>
                      </button>
                    </div>
                    {/* nav */}
                    <div className="bg-white-100 p-5">
                      <nav className="shadow-md bg-white rounded-lg border-gray-200 dark:bg-gray-900 relative">
                        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                          {/* Left Placeholder (Empty for Spacing) --> */}
                          <div className="flex items-center">
                            <span className="hidden md:block"></span>
                          </div>

                          {/* Logo */}
                          <div className="absolute left-1/2 transform -translate-x-1/2">
                            <img
                              className="w-auto h-[25px]"
                              src="../img/3.png"
                              alt="Logo"
                            />
                          </div>

                          {/* Right Section (User Menu + Hamburger) */}
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <button
                              type="button"
                              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                              id="user-menu-button"
                              aria-expanded="false"
                              data-dropdown-toggle="user-dropdown"
                              data-dropdown-placement="bottom"
                            >
                              <img
                                className="w-8 h-8 rounded-full"
                                src="https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                                alt="user photo"
                              />
                            </button>
                            <button
                              data-collapse-toggle="navbar-user"
                              type="button"
                              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              aria-controls="navbar-user"
                              aria-expanded="false"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M1 1h15M1 7h15M1 13h15"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </nav>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm">
                      <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                        <span className="text-black font-medium">HTML</span>
                        <button className="flex items-center space-x-3 text-black hover:text-gray-800 ">
                          <span>Copy</span>
                        </button>
                      </div>
                      {/* code tailwind */}
                      <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                        <pre className="theme-atom-one-dark shadow-3xl text-xs relative overflow-hidden max-w-full tab-size h-full">
                          <span className="hljs mb-0 p-4 block min-h-full overflow-auto">
                            <code>
                              &lt;div className
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "bg-white-100 p-5"
                              </span>
                              &gt; &lt;nav className
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "shadow-md bg-white rounded-lg border-gray-200
                                dark:bg-gray-900 relative"
                              </span>
                              &gt; &lt;div className
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "max-w-screen-xl flex items-center
                                justify-between mx-auto p-4"
                              </span>
                              &gt; &lt;div className
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "flex items-center"
                              </span>
                              &gt; &lt;span className
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "hidden md:block"
                              </span>
                              &gt;&lt;/span&gt; &lt;/div&gt; &lt;div className
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "absolute left-1/2 transform -translate-x-1/2"
                              </span>
                              &gt; &lt;img className
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "w-auto h-[25px]"
                              </span>{" "}
                              src<span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "../img/3.png"
                              </span>{" "}
                              alt<span className="hljs-operator">=</span>
                              <span className="hljs-string">"Logo"</span>&gt;
                              &lt;/div&gt; &lt;div className
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "flex items-center space-x-3
                                rtl:space-x-reverse"
                              </span>
                              &gt; &lt;button type
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"button"</span>
                              className<span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "flex text-sm bg-gray-800 rounded-full
                                focus:ring-4 focus:ring-gray-300
                                dark:focus:ring-gray-600"
                              </span>
                              id<span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "user-menu-button"
                              </span>
                              aria-expanded
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"false"</span>
                              data-dropdown-toggle
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "user-dropdown"
                              </span>
                              data-dropdown-placement
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"bottom"</span>&gt;
                              &lt;img className
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "w-8 h-8 rounded-full"
                              </span>
                              src<span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                              </span>
                              alt<span className="hljs-operator">=</span>
                              <span className="hljs-string">"user photo"</span>
                              &gt; &lt;/button&gt; &lt;button
                              data-collapse-toggle
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"navbar-user"</span>
                              type<span className="hljs-operator">=</span>
                              <span className="hljs-string">"button"</span>
                              className<span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "inline-flex items-center p-2 w-10 h-10
                                justify-center text-sm text-gray-500 rounded-lg
                                md:hidden hover:bg-gray-100 focus:outline-none
                                focus:ring-2 focus:ring-gray-200
                                dark:text-gray-400 dark:hover:bg-gray-700
                                dark:focus:ring-gray-600"
                              </span>
                              aria-controls
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"navbar-user"</span>
                              aria-expanded
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"false"</span>&gt;
                              &lt;svg className
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"w-5 h-5"</span>
                              aria-hidden
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"true"</span>xmlns
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "http://www.w3.org/2000/svg"
                              </span>
                              fill<span className="hljs-operator">=</span>
                              <span className="hljs-string">"none"</span>viewBox
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"0 0 17 14"</span>
                              &gt;&lt;path stroke
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "currentColor"
                              </span>
                              stroke-linecap
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"round"</span>{" "}
                              stroke-linejoin
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"round"</span>
                              stroke-width
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">"2"</span> d
                              <span className="hljs-operator">=</span>
                              <span className="hljs-string">
                                "M1 1h15M1 7h15M1 13h15"
                              </span>
                              &gt;&lt;/path&gt;&lt;/svg&gt; &lt;/button&gt;
                              &lt;/div&gt; &lt;/div&gt; &lt;/nav&gt;
                            </code>
                          </span>
                        </pre>
                      </div>
                      <code></code>
                    </div>
                    <code></code>
                  </div>
                </section>
                <code>
                  <section className="mt-10">
                    <div>
                      <h4 className="text-pink-600 font-bold text-xl">
                        with search
                      </h4>
                      <p>
                        Below given example displays navbar with search input.{" "}
                      </p>
                    </div>
                    {/* nav5 */}
                    <div className="bg-white shadow-md rounded-lg mt-8">
                      {/* head box */}
                      <div className="flex bg-gray-100 rounded justify-between p-4">
                        <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                          <img
                            src="https://img.icons8.com/ios-glyphs/24/github.png"
                            alt="GitHub Icon"
                          />
                          <small>Edit on GitHub</small>
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <i className="fa-solid fa-circle-half-stroke"></i>
                        </button>
                      </div>
                      {/* nav with search */}
                      <div className="bg-white-100 p-5">
                        <nav className="shadow-md bg-white rounded-lg p-4 flex items-center justify-between">
                          <img
                            className="w-auto h-[25px]"
                            src="../img/3.png"
                            alt=""
                          />
                          {/* Search Bar and Profile Section */}
                          <div className="flex items-center md:space-x-5 lg:space-x-5">
                            {/* Search Bar */}
                            <input
                              type="text"
                              className="ps-8 p-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Search"
                            />
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                              alt="User Profile"
                            />
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm">
                      <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                        <span className="text-black font-medium">HTML</span>
                        <button className="flex items-center space-x-3 text-black hover:text-gray-800 ">
                          <i className="far fa-copy"></i>
                          <span>Copy</span>
                        </button>
                      </div>
                      {/* code tailwind */}
                      <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                        <pre className="theme-base16-materia-min shadow-3xl text-xs relative overflow-hidden max-w-full tab-size h-full">
                          <span className="hljs mb-0 p-4 block min-h-full overflow-auto">
                            <code>
                              <span className="hljs-tag">
                                &lt;<span className="hljs-name">div</span>{" "}
                                <span className="hljs-attr">className</span>=
                                <span className="hljs-string">
                                  "bg-white-100 p-5"
                                </span>
                                &gt;
                              </span>
                              <span className="hljs-tag">
                                &lt;<span className="hljs-name">nav</span>{" "}
                                <span className="hljs-attr">className</span>=
                                <span className="hljs-string">
                                  "shadow-md bg-white rounded-lg p-4 flex
                                  items-center justify-between"
                                </span>
                                &gt;
                              </span>
                              <span className="hljs-tag">
                                &lt;<span className="hljs-name">img</span>{" "}
                                <span className="hljs-attr">className</span>=
                                <span className="hljs-string">
                                  "w-auto h-[25px]"
                                </span>{" "}
                                <span className="hljs-attr">src</span>=
                                <span className="hljs-string">
                                  "../img/3.png"
                                </span>{" "}
                                <span className="hljs-attr">alt</span>=
                                <span className="hljs-string">""</span>&gt;
                              </span>
                              <span className="hljs-comment">
                                &lt;!-- Search Bar and Profile Section --&gt;
                              </span>
                              <span className="hljs-tag">
                                &lt;<span className="hljs-name">div</span>{" "}
                                <span className="hljs-attr">className</span>=
                                <span className="hljs-string">
                                  "flex items-center md:space-x-5 lg:space-x-5"
                                </span>
                                &gt;
                              </span>
                              <span className="hljs-comment">
                                &lt;!-- Search Bar --&gt;
                              </span>
                              <span className="hljs-tag">
                                &lt;<span className="hljs-name">input</span>{" "}
                                <span className="hljs-attr">type</span>=
                                <span className="hljs-string">"text"</span>{" "}
                                <span className="hljs-attr">className</span>=
                                <span className="hljs-string">
                                  "ps-8 p-2 text-sm text-gray-900 border
                                  border-gray-300 rounded-full bg-gray-50
                                  focus:ring-blue-500 focus:border-blue-500"
                                </span>{" "}
                                <span className="hljs-attr">placeholder</span>=
                                <span className="hljs-string">"Search"</span>
                                /&gt;
                              </span>
                              <span className="hljs-tag">
                                &lt;<span className="hljs-name">img</span>{" "}
                                <span className="hljs-attr">className</span>=
                                <span className="hljs-string">
                                  "w-10 h-10 rounded-full"
                                </span>{" "}
                                <span className="hljs-attr">src</span>=
                                <span className="hljs-string">
                                  "https://i.pinimg.com/736x/eb/18/76/eb187655090227af25866572f615b426.jpg"
                                </span>{" "}
                                <span className="hljs-attr">alt</span>=
                                <span className="hljs-string">
                                  "User Profile"
                                </span>
                                /&gt;
                              </span>
                              <span className="hljs-tag">
                                &lt;/<span className="hljs-name">div</span>&gt;
                              </span>
                              <span className="hljs-tag">
                                &lt;/<span className="hljs-name">nav</span>&gt;
                              </span>
                              <span className="hljs-tag">
                                &lt;/<span className="hljs-name">div</span>&gt;
                              </span>
                              <span className="hljs-tag">
                                &lt;/<span className="hljs-name">div</span>&gt;
                              </span>
                            </code>
                          </span>
                          <small className="bg-black/30 absolute top-0 right-0 uppercase font-bold text-xs rounded-bl-md px-2 py-1">
                            <span className="sr-only">Language:</span>HTML, XML
                          </small>
                        </pre>
                      </div>
                    </div>
                  </section>
                  {/* nav6 */}
                  <section className="mt-10">
                    <div>
                      <h4 className="text-pink-600 font-bold text-xl">
                        With search solid background
                      </h4>
                      <p>
                        Below given example displays navbar with search input.
                      </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg mt-8">
                      {/* head box */}
                      <div className="flex bg-gray-100 rounded justify-between border-b p-4">
                        <button className="flex rounded-lg bg-white px-2 py-1 items-center space-x-2 text-gray-600 hover:text-gray-800">
                          <img
                            src="https://img.icons8.com/ios-glyphs/24/github.png"
                            alt="GitHub Icon"
                          />
                          <small>Edit on GitHub</small>
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <i className="fa-solid fa-circle-half-stroke"></i>
                        </button>
                      </div>
                      {/* nav6 */}
                      <div className="bg-white-100 p-5">
                        <nav className=" bg-pink-400 shadow-md rounded-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                          <div className="  flex flex-wrap items-center justify-between mx-auto p-4">
                            <a
                              href="#"
                              className="flex items-center space-x-3 rtl:space-x-reverse"
                            >
                              <img
                                className="w-auto h-[25px]"
                                src="../img/logo_fordarkmood.png"
                                alt=""
                              />
                            </a>
                            <button
                              id="mobile-menu-toggle"
                              type="button"
                              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                              <span className="sr-only">Open main menu</span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M1 1h15M1 7h15M1 13h15"
                                ></path>
                              </svg>
                            </button>
                            <div
                              id="navbar-dropdown"
                              className="hidden w-full md:block md:w-auto"
                            >
                              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark text-white ">
                                <li>
                                  <a
                                    href="#"
                                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                  >
                                    Home
                                  </a>
                                </li>
                                <li className="relative">
                                  <button
                                    id="dropdownNavbarLink"
                                    className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                  >
                                    Contact us
                                  </button>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                  >
                                    Services
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm">
                        <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
                          <span className="text-black font-medium">HTML</span>
                          <button className="flex items-center space-x-3 text-black hover:text-gray-800 ">
                            <i className="far fa-copy"></i>
                            <span>Copy</span>
                          </button>
                        </div>
                        {/* code tailwind */}
                        <div className="overflow-x-auto bg-gray-100 p-2 rounded-md">
                          <pre className="theme-base16-materia-min shadow-3xl text-xs relative overflow-hidden max-w-full tab-size h-full">
                            <span className="hljs mb-0 p-4 block min-h-full overflow-auto">
                              <code>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">div</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    "bg-white-100 p-5"
                                  </span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">nav</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    " bg-pink-400 shadow-md rounded-lg
                                    border-gray-200 dark:bg-gray-900
                                    dark:border-gray-700"
                                  </span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">div</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    " flex flex-wrap items-center
                                    justify-between mx-auto p-4"
                                  </span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">a</span>{" "}
                                  <span className="hljs-attr">href</span>=
                                  <span className="hljs-string">"#"</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    "flex items-center space-x-3
                                    rtl:space-x-reverse"
                                  </span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">img</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    "w-auto h-[25px]"
                                  </span>{" "}
                                  <span className="hljs-attr">src</span>=
                                  <span className="hljs-string">
                                    "../img/logo_fordarkmood.png"
                                  </span>{" "}
                                  <span className="hljs-attr">alt</span>=
                                  <span className="hljs-string">""</span>&gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">a</span>&gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">button</span>{" "}
                                  <span className="hljs-attr">id</span>=
                                  <span className="hljs-string">
                                    "mobile-menu-toggle"
                                  </span>{" "}
                                  <span className="hljs-attr">type</span>=
                                  <span className="hljs-string">"button"</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    "inline-flex items-center p-2 w-10 h-10
                                    justify-center text-sm text-gray-500
                                    rounded-lg md:hidden hover:bg-gray-100
                                    focus:outline-none focus:ring-2
                                    focus:ring-gray-200 dark:text-gray-400
                                    dark:hover:bg-gray-700
                                    dark:focus:ring-gray-600"
                                  </span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">span</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">"sr-only"</span>
                                  &gt;
                                </span>
                                Open main menu
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">span</span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">svg</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">"w-5 h-5"</span>{" "}
                                  <span className="hljs-attr">aria-hidden</span>
                                  =<span className="hljs-string">"true"</span>{" "}
                                  <span className="hljs-attr">xmlns</span>=
                                  <span className="hljs-string">
                                    "http://www.w3.org/2000/svg"
                                  </span>{" "}
                                  <span className="hljs-attr">fill</span>=
                                  <span className="hljs-string">"none"</span>{" "}
                                  <span className="hljs-attr">viewBox</span>=
                                  <span className="hljs-string">
                                    "0 0 17 14"
                                  </span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">path</span>{" "}
                                  <span className="hljs-attr">stroke</span>=
                                  <span className="hljs-string">
                                    "currentColor"
                                  </span>{" "}
                                  <span className="hljs-attr">
                                    stroke-linecap
                                  </span>
                                  =<span className="hljs-string">"round"</span>{" "}
                                  <span className="hljs-attr">
                                    stroke-linejoin
                                  </span>
                                  =<span className="hljs-string">"round"</span>{" "}
                                  <span className="hljs-attr">
                                    stroke-width
                                  </span>
                                  =<span className="hljs-string">"2"</span>{" "}
                                  <span className="hljs-attr">d</span>=
                                  <span className="hljs-string">
                                    "M1 1h15M1 7h15M1 13h15"
                                  </span>
                                  /&gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">svg</span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">button</span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">div</span>{" "}
                                  <span className="hljs-attr">id</span>=
                                  <span className="hljs-string">
                                    "navbar-dropdown"
                                  </span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    "hidden w-full md:block md:w-auto"
                                  </span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">ul</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    "flex flex-col font-medium p-4 md:p-0 mt-4
                                    rounded-lg md:space-x-8 rtl:space-x-reverse
                                    md:flex-row md:mt-0 md:border-0 dark
                                    text-white "
                                  </span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">li</span>&gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">a</span>{" "}
                                  <span className="hljs-attr">href</span>=
                                  <span className="hljs-string">"#"</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    "block py-2 px-3 rounded hover:bg-gray-100
                                    md:hover:bg-transparent md:border-0
                                    md:hover:text-blue-700 md:p-0
                                    dark:text-white md:dark:hover:text-blue-500
                                    dark:hover:bg-gray-700 dark:hover:text-white
                                    md:dark:hover:bg-transparent"
                                  </span>
                                  &gt;
                                </span>
                                Home
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">a</span>&gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">li</span>&gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">li</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    "relative"
                                  </span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">button</span>{" "}
                                  <span className="hljs-attr">id</span>=
                                  <span className="hljs-string">
                                    "dropdownNavbarLink"
                                  </span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    "flex items-center justify-between w-full
                                    py-2 px-3 rounded hover:bg-gray-100
                                    md:hover:bg-transparent md:border-0
                                    md:hover:text-blue-700 md:p-0 md:w-auto
                                    dark:text-white md:dark:hover:text-blue-500
                                    dark:focus:text-white dark:border-gray-700
                                    dark:hover:bg-gray-700
                                    md:dark:hover:bg-transparent"
                                  </span>
                                  &gt;
                                </span>
                                Contact us
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">svg</span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">button</span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">li</span>&gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">li</span>&gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;<span className="hljs-name">a</span>{" "}
                                  <span className="hljs-attr">href</span>=
                                  <span className="hljs-string">"#"</span>{" "}
                                  <span className="hljs-attr">className</span>=
                                  <span className="hljs-string">
                                    "block py-2 px-3 rounded hover:bg-gray-100
                                    md:hover:bg-transparent md:border-0
                                    md:hover:text-blue-700 md:p-0
                                    dark:text-white md:dark:hover:text-blue-500
                                    dark:hover:bg-gray-700 dark:hover:text-white
                                    md:dark:hover:bg-transparent"
                                  </span>
                                  &gt;
                                </span>
                                Services
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">a</span>&gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">li</span>&gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">ul</span>&gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">div</span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">div</span>
                                  &gt;
                                </span>
                                <span className="hljs-tag">
                                  &lt;/<span className="hljs-name">nav</span>
                                  &gt;
                                </span>
                              </code>
                            </span>
                          </pre>
                        </div>
                        <code></code>
                      </div>
                      <code></code>
                    </div>
                  </section>
                  <code></code>
                </code>
              </code>
            </code>
            <div />
          </div>
        </main>
      </div>
    </div>
  );
}
