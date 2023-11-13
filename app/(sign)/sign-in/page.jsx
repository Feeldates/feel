"use client"

import React, {useContext, useEffect, useState} from "react";
import {UserAuth} from "@/app/context/AuthContext";
import {FcGoogle} from "react-icons/fc";
import {useRouter, useSearchParams} from "next/navigation";


const Page = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const {currentUser, emailSignIn, googleSignIn} = UserAuth();

    const [formData, setFormData] = useState({password: "",email: ""});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };


    async function handleCreateUserWithGoogle(){
        await googleSignIn()
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await emailSignIn(formData.email, formData.password)
    }

    
    if (currentUser){
        const search = searchParams.get("redirect") ?? "/";
        router.replace(`${search}`)
    }

    return (
        <div className={"flex items-center h-screen bg-grisoscuro"}>
            <div className={"mx-auto left-0 right-0 w-fit space-y-4 bg-blanco rounded-md h-[450px] p-5 md:p-10"}>
                <img src={"/fn.svg"} alt="" className={"w-[100px] mx-auto"}/>
                <h1 className={"mx-auto left-0 right-0 w-fit font-bold"}>Inicio de sesión</h1>


                <form onSubmit={handleSubmit}>
                    <div className={"flex-col flex space-y-2"}>
                        {/*INPUTS*/}
                        <input
                            className={"border-[1px] border-grisoscuro w-full px-3 outline-none py-2 rounded-[8px] placeholder:text-[14px] text-[14px]"}
                            type="email"
                            placeholder={"Correo electrónico"}
                            id={"email"}
                            name={"email"}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            className={"border-[1px] border-grisoscuro w-full px-3 outline-none py-2 rounded-[8px] placeholder:text-[14px] text-[14px]"}
                            type="password"
                            placeholder={"Contraseña"}
                            id={"password"}
                            name={"password"}
                            value={formData.password}
                            onChange={handleChange}
                        />

                        {/*reestablecimiento contraseña*/}
                        <div className={"pt-2"}>
                            <button
                                type={"button"}
                                className={"text-color1 hover:underline "}
                            >
                                ¿Has olvidado tu contraseña?
                            </button>
                        </div>

                        {/*BOTON GOOGLE*/}
                        <div className={"mx-auto pt-2"}>
                            <button
                                className={"rounded-md px-4 py-[2px] flex items-center space-x-3 border border-grisoscuro"}
                                onClick={handleCreateUserWithGoogle}
                            >
                                <FcGoogle style={{ fontSize: 13 }}></FcGoogle>
                                <p className={"text-[13px]"}>Continúa con Google</p>
                            </button>
                        </div>

                        {/*Botones*/}
                        <div className={"flex-col flex space-y-4 mx-auto pt-5"}>
                            <button
                                onClick={() => navigate("/sign-up")}
                                className={"w-[120px] border-color1 border-[1px] px-2 py-1 rounded-lg hover:bg-color5 hover:text-blanco text-color1"}
                            >
                                Crear cuenta
                            </button>

                            <button
                                type={"submit"}
                                className={"w-[120px] border-color1 border-[1px] px-2 py-1 rounded-lg bg-color1 text-blanco"}
                            >
                                Siguiente
                            </button>

                        </div>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Page;