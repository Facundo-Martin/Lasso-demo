import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import useAuth from "../hooks/useAuth";
import ThemeSwitch from "./ThemeSwitch";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Plans", href: "/plans", icon: BriefcaseIcon },
  { name: "Advisor", href: "/advisor", count: 1, icon: UsersIcon },
  { name: "Calendar", href: "/calendar", count: 3, icon: CalendarDaysIcon },
  { name: "Documents", href: "/documents", icon: DocumentDuplicateIcon },
  { name: "Reports", href: "/reports", count: 2, icon: ChartBarIcon },
];

export default function Example({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2 ">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={clsx(
                            router.pathname == item.href
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md",
                          )}
                        >
                          <item.icon
                            className={clsx(
                              router.pathname == item.href
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-4 flex-shrink-0 h-6 w-6",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col ">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 dark:border-gray-600 dark:bg-gray-800 bg-white ">
            <div className="flex flex-shrink-0 items-center px-4 bg-purple-700 dark:bg-gray-900 py-4">
              <img className="h-8 w-auto" src="/logo.png" alt="Your Company" />
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              <nav
                className="mt-5 flex-1 space-y-1 dark:bg-gray-800 bg-white px-2"
                aria-label="Sidebar"
              >
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      router.pathname == item.href
                        ? "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white "
                        : "text-gray-600 hover:text-gray-900 dark:hover:text-slate-200 hover:bg-gray-50 dark:hover:bg-gray-900/60 dark:text-gray-400",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    )}
                  >
                    <item.icon
                      className={clsx(
                        router.pathname == item.href
                          ? "text-gray-500 dark:text-white"
                          : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-slate-300",
                        "mr-3 flex-shrink-0 h-6 w-6",
                      )}
                      aria-hidden="true"
                    />
                    <span className="flex-1">{item.name}</span>
                    {item.count ? (
                      <span
                        className={clsx(
                          router.pathname == item.href
                            ? "bg-white dark:bg-gray-700"
                            : "bg-gray-100 dark:bg-gray-900 dark:text-gray-200  group-hover:bg-gray-200 dark:group-hover:bg-gray-700",
                          "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full",
                        )}
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </a>
                ))}
              </nav>
              <div className="h-[1px] w-[85%] mx-auto bg-gray-400 dark:bg-gray-600"></div>
              <button className="items-center gap-1 mt-auto py-4 px-2 flex justify-center text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer hover:text-gray-900 mx-4 my-2 border-gray-600 dark:text-gray-400 dark:hover:bg-gray-900/70 dark:hover:text-white">
                <ArrowLeftOnRectangleIcon className="w-6 h-6 " />
                <p>Logout</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white dark:bg-gray-900 shadow">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4 ">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600 ">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <MagnifyingGlassIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search-field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm dark:bg-gray-900 dark:text-gray-200"
                      placeholder="Search"
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-white  p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-900 hover:dark:text-gray-400 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="rounded-full bg-white  p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-900 hover:dark:text-gray-400 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <ThemeSwitch />
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50 dark:hover:bg-gray-900">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={
                          user?.image
                            ? user.image
                            : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        }
                        alt=""
                      />
                      <span className="ml-3 hidden text-sm font-medium text-gray-700 dark:text-gray-200 lg:block">
                        <span className="sr-only">Open user menu for </span>
                        {user?.name}
                      </span>
                      <ChevronDownIcon
                        className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={clsx(
                              "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
                            )}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="flex-1">
            <div className="py-6 px-6">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
