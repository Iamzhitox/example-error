"use client";

import { useAuxiliarContext } from "@/contexts/store";
import React from "react";

const Navbar = () => {
  const { notifications, openNotifications, setOpenNotifications, pushNotification } =
    useAuxiliarContext();

  return (
    <div className="relative flex justify-end pr-10 items-center w-full z-10 h-20 bg-white text-black">
      <div
        onClick={() => setOpenNotifications((prev) => !prev)}
        className="flex cursor-pointer justify-center items-center flex-row gap-3 border rounded-lg border-black px-6 py-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={25}
          height={25}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
          />
        </svg>
        <span>
          {openNotifications ? "No ver Notificaciones" : "Ver notificaciones"}
        </span>
      </div>
      {openNotifications && (
        <div className="absolute flex flex-col gap-3 px-6 py-4 top-20 right-10 h-125 w-80 bg-white shadow-lg shadow-slate-300 border border-black">
          <div className="flex justify-between">
            <span>Lista de Notificaciones</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={() => pushNotification("(From This Component)")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <ul className="pt-2 border-t border-black">
            {notifications.map((nt, i) => (
              <li key={i} className="pt-1">
                {nt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
