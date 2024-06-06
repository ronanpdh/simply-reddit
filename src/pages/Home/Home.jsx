import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import CategorySelector from '../../components/CategorySelector/CategorySelector';

import { Fragment } from 'react'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Home() {

    return (
        <>
            <div className="min-h-full w-full">
                <Disclosure as="nav" className="border-b border-gray-200 bg-white">
                    {({ open }) => (
                        <>
                            <div className="align-middle">
                                <div className="flex h-16 w-full">
                                    <Nav />
                                    <div className="-mr-2 flex items-center sm:hidden">
                                        {/* Mobile menu button */}
                                        <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </DisclosureButton>
                                    </div>
                                </div>
                            </div>

                            <DisclosurePanel className="sm:hidden">
                                <div className="space-y-1 pb-3 pt-2">
                                    <Nav />
                                </div>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
                <div className="py-10">
                    <header>
                        <div className="mx-auto max-w-9xl px-2 sm:px-6 ">
                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
                        </div>
                    </header>
                    <main>
                        <div className="mx-auto max-w-9xl sm:px-6"><CategorySelector /></div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Home;





