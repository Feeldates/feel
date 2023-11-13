"use client"
import React from 'react';
import Link from "next/link";
import {BsCart, BsPerson} from "react-icons/bs";
import {UserAuth} from "@/app/context/AuthContext";
import {useState} from "react";

const NavBarProfile = () => {
    const{logout, currentUser} = UserAuth();
    const [selectedButton, setSelectedButton] = useState("myaccount");

    return <div className={"bg-blanco h-screen py-[120px] px-[20px] space-y-3 hidden lg:block"}>
        {/*NOMBRE*/}
        <p className={"font-bold text-xl"}>{currentUser.name}</p>
        <hr/>
        <Link
            onClick={() => setSelectedButton("myaccount")}
            href={"/profile/my-account"}
            className={`flex space-x-3 w-full rounded-2xl py-2 px-5 ${selectedButton === "myaccount" && "bg-color1 text-blanco"}`}
        >
            <BsPerson></BsPerson>
            <p>Mi Perfil</p>
        </Link>

        <Link
            onClick={() => setSelectedButton("myshopping")}
            href={"/profile/my-purchases"}
            className={`flex space-x-3 w-full rounded-2xl py-2 px-5 ${selectedButton === "myshopping" && "bg-color1 text-blanco"}`}
        >
            <BsCart></BsCart>
            <p>Mis Compras</p>
        </Link>

        {/*CERRAR SESIÓN*/}
        <hr/>
        <button
            onClick={logout}
        >
            <p className={"text-start text-[18px]"}>Cerrar sesión</p>
        </button>

    </div>
};

export default NavBarProfile;