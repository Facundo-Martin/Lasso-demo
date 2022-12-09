import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const faqs = [
  {
    question: "Why did I build this thing?",
    answer:
      "I talked to Prabha on Wednesday and she said you guys like people who get shit done. This is still a pretty shitty web app but its the best I could do in 1 and a half day.",
  },
  // More questions...
];

export default function FAQs() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            <Disclosure as="div" className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                      <span className="font-medium text-gray-900">
                        Why did I build this thing?
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={clsx(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform",
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base text-gray-600">
                      I talked to Prabha on Wednesday and she said you guys are
                      people who get shit done. I haven&apos;t built any side
                      projects lately so I figured I might as well put something
                      together.
                      <br /> This is still a pretty shitty web app, but its the
                      best I could do in 1 and a half day.
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                      <span className="font-medium text-gray-900">
                        What is this built with?
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={clsx(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform",
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base text-gray-600">
                      Here&apos;s the Tech Stack I like to use for my projects:
                    </p>
                    <ul className="list-disc ml-8 space-y-2 mt-2">
                      <li>
                        <a
                          href="https://nextjs.org/"
                          target="_blank"
                          rel="noReferrer"
                          className="text-purple-700 font-bold"
                        >
                          Next.js
                        </a>
                        : Simply put, this is the best React framework for
                        production
                      </li>
                      <li>
                        <a
                          href="https://www.typescriptlang.org/"
                          target="_blank"
                          rel="noReferrer"
                          className="text-purple-700 font-bold"
                        >
                          TypeScript
                        </a>
                        : Ok I cheated and did some stuff in JavaScript cause I
                        didn&apos;t have time, but I do use TypeScript for
                        production
                      </li>
                      <li>
                        <a
                          href="https://tailwindcss.com/"
                          target="_blank"
                          rel="noReferrer"
                          className="text-purple-700 font-bold"
                        >
                          Tailwind CSS
                        </a>
                        : A utility-first CSS framework packed with classes to
                        rapidly build modern and responsive websites
                      </li>

                      <li>
                        <a
                          href="https://tailwindui.com/"
                          target="_blank"
                          rel="noReferrer"
                          className="text-purple-700 font-bold"
                        >
                          Tailwind UI
                        </a>
                        : Beautifully designed, expertly crafted components and
                        templates, built by the makers of Tailwind CSS
                      </li>
                      <li>
                        <a
                          href="https://headlessui.com/"
                          target="_blank"
                          rel="noReferrer"
                          className="text-purple-700 font-bold"
                        >
                          Headless UI
                        </a>
                        : Completely unstyled, fully accessible UI components,
                        designed to integrate beautifully with Tailwind CSS.
                      </li>
                      <div className="pb-3">
                        <code>
                          By the way, did I mention I love Tailwind CSS?
                        </code>
                      </div>
                      <li>
                        <a
                          href="https://next-auth.js.org/"
                          target="_blank"
                          rel="noReferrer"
                          className="text-purple-700 font-bold"
                        >
                          next-auth
                        </a>
                        : Arguably the best way to add authentication for
                        Next.js apps
                      </li>
                      <li>
                        <a
                          href="https://www.npmjs.com/package/next-themes"
                          target="_blank"
                          rel="noReferrer"
                          className="text-purple-700 font-bold"
                        >
                          next-themes
                        </a>
                        : Idk I just like dark mode
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  );
}
