'use client'

import React, { useState } from "react";
import { HiUser, HiBell } from "react-icons/hi";
import {PiCurrencyCircleDollarFill, PiChatCenteredTextFill} from 'react-icons/pi'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="flex-between py-3 px-5 border-b-2 border-gray-500 mb-2">
        <div className="flex-between font-bold">
          <HiUser size={25} color="#fff" className=" mr-2" />
          <p>Hello, User</p>
        </div>
        <HiBell size={25} />
      </div>

      <ul className="relative p-0">
        <li 
          className="sidebar_items px-6"
          >
          <PiChatCenteredTextFill 
          size={20}
          className=" mr-2" />
          Discussion Forum
          <span className=" ml-auto text-xs font-normal">
          &#9660;
          </span>
        </li>
        <li className="sidebar_items px-6">
          <PiCurrencyCircleDollarFill 
          size={20}
          className="mr-2"/>
          Market Stories
        </li>
        <li className="sidebar_items px-14">Sentiment</li>
        <li className="sidebar_items px-14">Market</li>
        <li className="sidebar_items px-14">Sector</li>
        <li className="sidebar_items px-14">Watchlist</li>
        <li className="sidebar_items px-14">Events</li>
        <li className="sidebar_items px-14">News/Interview</li>
      </ul>
      <button
        className={`toggle-btn ${isOpen ? "open" : "closed"}`}
        onClick={toggleSidebar}
      >
        {isOpen ? "‹" : "›"}
      </button>
    </div>
  );
};

export default Sidebar;
