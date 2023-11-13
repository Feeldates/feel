"use client"

import React, {useEffect, useState} from 'react';

import {AiOutlineMenu, } from "react-icons/ai";
import {BsBag} from "react-icons/bs";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {authentication} from "@/app/firebase";
import {UserAuth} from "@/app/context/AuthContext";
import {BagContext} from "@/app/context/BagContext";

const Navbar = () => {
    const auth = authentication;
    const {currentUser: user} = UserAuth();

    const {bag} = BagContext();

    const location = usePathname();
    var color = location !== "/" ? "#6E09DF" : "transparent"
    const [navColor, setNavColor] = useState(color)

    const [menuOpen, setMenuOpen] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor("#6E09DF") : setNavColor( color)
    }

    const listenClickEvent = (e) => {
        if (!document.getElementById('menu').contains(e.target) && !document.getElementById('menu-button').contains(e.target) ){
            setMenuOpen(false);
        }
    }

    useEffect(() => {
        listenScrollEvent();
        window.addEventListener("scroll", listenScrollEvent);
        window.addEventListener('click', listenClickEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
            window.removeEventListener("click", listenClickEvent);
        }
    }, [location]);



    const logout = () => {
        auth.signOut().then( () => {
            // navigate("/sign-in");
        });
    }

    return (
        <div className={`flex fixed w-screen h-[80px] items-center px-[50px] justify-between z-50`} style={{backgroundColor: navColor, transition: "all 1s"}}>

            {/*MENU*/}
            <div
                id={"menu-button"}
                className={" lg:hidden text-blanco cursor-pointer scale-[1.25]"}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <AiOutlineMenu  ></AiOutlineMenu>
            </div>

            {/*IMAGEN LOGO*/}
            <Link href={"/"}>
                <img src={"/fb.png"} alt="" className={"h-[20px] md:h-[30px] lg:h-[30px]"}/>
            </Link>

            {/*LINKS*/}
            <div className={"space-x-10 hidden lg:flex"}>
                <Link href={"/"} className={"text-blanco text-xl"}>Contacto</Link>
                <Link href={"/"} className={"text-blanco text-xl"}>Servicios</Link>
                <Link href={"/"} className={"text-blanco text-xl"}>Nosotros</Link>
            </div>

            {/*/!*VACIO PARA ESPACIO*!/*/}
            <div className={"hidden lg:flex"}></div>

            {/*/!*CARRITO Y PERFIL*!/*/}
            <div className={`flex space-x-5 items-center ${!user && "hidden"}`}>
                {/*BOLSA*/}
                <Link className={"text-blanco relative cursor-pointer"} href={"/cart"}>
                    <div className={"scale-[1.25]"}>
                        <BsBag></BsBag>
                    </div>
                    <p
                        className={"text-[15px] absolute -top-2 -right-2.5 bg-color2 rounded-full w-5 h-5 items-center justify-center flex"}
                    >
                        {bag.length}
                    </p>
                </Link>
                {/*PERFIL*/}
                <Link
                    className={"cursor-pointer hidden lg:flex"}
                    href={"/profile/my-account"}>
                    <div className={"rounded-full w-[200px] h-[30px] flex relative items-center space-x-2 border-blanco border-2"}>
                        <img src={user?.photo} alt="" className={"rounded-full w-[40px] h-[40px] border-2 border-blanco"}/>
                        <div className={"text-blanco w-full justify-start flex"}>
                            <p className={"line-clamp-1"}>{user?.name}</p>
                        </div>
                    </div>
                </Link>
            </div>

            {/*/!*CREAR CUENTA, LOGIN, ETC*!/*/}
            <div className={`flex space-x-5 items-center ${user && "hidden"}`}>
                {/*BOLSA*/}
                <Link className={"text-blanco relative cursor-pointer"} href={"/sign-in"}>
                    <div className={"scale-[1.25]"}>
                        <BsBag></BsBag>
                    </div>
                </Link>
                <div className={`space-x-5 hidden lg:flex`}>
                    <Link
                        href={"/sign-up"}
                        className={"text-blanco border-blanco border-[2px] rounded-full px-4 py-[6px]"}
                    >
                        Crear cuenta
                    </Link>
                    <Link
                        href={"/sign-in"}
                        className={"text-blanco border-color border-[2px] rounded-full px-4 py-[6px]"}
                    >
                        Iniciar sesión<
                /Link>
                </div>
            </div>

            {/*/!*MENÚ - LEFT SIDE BAR*!/*/}
            <div id={"menu"} className={`absolute bg-blanco transition-all duration-500 left-0 top-0 ${!menuOpen && "hidden" } h-screen w-[250px]`}>
                {/*PORTADA*/} {/*NO SE OCUPA*/}
                <div className={"bg-grisoscuro w-full h-[15%]"}></div>
                <div className={`absolute top-[8.5%] left-5 rounded-full ${user ? "flex flex-col" : "hidden"}`}>
                    <img src={user?.photo} alt="" className={"rounded-full h-[110px] w-[110px]"}/>
                </div>
                {/*LINKS AUTENTICADO*/}
                <div className={`mx-[20px] space-y-4 mt-[65px] ${user ? "flex flex-col" : "hidden"}`}>
                    {/*NOMBRE*/}
                    <p className={"font-bold text-[18px]"}>{user?.name}</p>
                    <Link className={"text-[18px]"} href={"/profile/my-account"}>Mi Perfil</Link>
                    <Link className={"text-[18px]"} href={"/profile/my-purchases"}>Mis compras</Link>
                    <hr/>
                    {/*CERRAR SESIÓN*/}
                    <button
                        onClick={logout}
                    >
                        <p className={"text-start text-[18px]"}>Cerrar sesión</p>
                    </button>
                </div>
                {/*REGISTRARSE, INICIAR SESION*/}
                <div className={`space-y-4 mt-5 mx-[20px] ${!user ? "flex flex-col" : "hidden"}`}>
                    <Link className={"text-[18px]"} href={"/sign-in"}>Iniciar sesión</Link>
                    <Link className={"text-[18px]"} href={"/sign-up"}>Registrarse</Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;