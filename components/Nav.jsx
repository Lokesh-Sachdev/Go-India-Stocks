'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import {FiSearch} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import PriceBanner from "./PriceBanner"
import CompanyBanner from "./CompanyBanner"

const Nav = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <>
    <nav className='flex-between w-full py-3'>
        <div className="flex gap-2 flex-center">
            <Link href='/'>
                <Image 
                    src='/assets/images/logo.png'
                    alt="GoIndiaStocks Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                />
            </Link>
            <div className="flex-between search_input">
            <input type="text" className="border-0 search_input" />
            <FiSearch size={20}/>
            </div>
        </div>

        <div className="md:flex hidden">
            <div className="flex-center gap-3">
                <Link href='/contact'>
                    Contact Us
                </Link>

                <button 
                    type="button"
                    className="outline_btn"
                >
                    Sign Up
                </button>

                <button 
                    type="button"
                    className="outline_btn"
                >
                    Sign In
                </button>
            </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex relative">
            <div className="flex">
                <CgProfile 
                    size={37}
                    onClick={() => setToggleDropdown((prev) => !prev)}
                />

                {toggleDropdown && (
                    <div className="dropdown">
                        <Link href='/contact'
                            className="dropdown_link"
                            onClick={() => setToggleDropdown(false)}
                        >
                            Contact Us
                        </Link>

                        <button 
                            type="button"
                            className="outline_btn mt-5 w-full"
                            onClick={() => setToggleDropdown(false)}
                        >
                            Sign Up
                        </button>

                        <button 
                            type="button"
                            className="outline_btn mt-3 w-full"
                            onClick={() => setToggleDropdown(false)}
                        >
                            Sign In
                        </button>

                    </div>
                ) }
            </div>

        </div>

    </nav>
    <PriceBanner/>
    <CompanyBanner/>

    {/* Mobile Nav */}
    <div className="sm:hidden overflow-hidden w-full flex relative p-0 bg-[#093967] text-white">
        <Link href='#Home' className="sidebar_items w-1/2 justify-center" >
          Discussion Forum
        </Link>
        <Link href='#market' className="sidebar_items w-1/2 justify-center">
          Market Stories
        </Link>
      </div>
    </>
  )
}

export default Nav;
