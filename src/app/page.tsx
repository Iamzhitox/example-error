"use client";
import { useAuxiliarContext } from "@/contexts/store";
import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

export default function Home() {
  const { setOpenNotifications, pushNotification } = useAuxiliarContext();

  const handleAddNotification = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    pushNotification(`Notification ID_#${randomNumber}: lorem ipsum`);
    setOpenNotifications(true);
  };

  return (
    <div className="w-full h-screen">
      <DefaultLayout>
        <div className="w-full h-full -mt-20 flex justify-center items-center gap-3">
          {/* Estos dos botones no pueden acceder al context */}
          <button
            className="py-4 px-6 border border-black rounded-lg"
            onClick={() => setOpenNotifications(true)}
          >
            Abrir notificaciones
          </button>
          <button
            className="py-4 px-6 border border-black rounded-lg"
            onClick={() => handleAddNotification}
          >
            Agregar notificacion
          </button>
          {/*  */}
        </div>
      </DefaultLayout>
    </div>
  );
}
