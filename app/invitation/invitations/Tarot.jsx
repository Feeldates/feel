"use client"
import React, {useState} from 'react';
const moment = require('moment-timezone');


import localFont from "next/font/local";
import firebaseDateFormat from "@/app/utils/firebaseDateFormat";
import TarotCounter from "@/app/components/invitation/counters/TarotCounter";
import TarotPlayer from "@/app/components/invitation/players/TarotPlayer";

import {Montserrat} from "next/font/google";
import Link from "next/link";
import convertSpacings from "@/app/utils/convertSpacings";

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
    style: ['normal'],
})

const mythicalPrince = localFont({src: "../../../fonts/Mythical Prince.ttf"})
const vogue = localFont({src: "../../../fonts/Vogue.ttf"})

const Tarot = ({template}) => {

    const{day, month, year, hour12, onlyHour12, minutes, seconds, hour24} = firebaseDateFormat(template.date);

    const [formData, setFormData] = useState({name: "",personNumber: "", message: ""});
    const [message, setMessage] = useState("");
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    };


    const handleButton = () => {
        if (formData.name && formData.personNumber && formData.message){
            const message = `${template.confirmationMessage.beforeHosts} ${template.title} ${template.confirmationMessage.beforeName} ${formData.name} ${template.confirmationMessage.beforeNumberPeople} ${formData.personNumber} ${formData.message} ${template.confirmationMessage.afterMessage}`;
            const encodeMessage = convertSpacings(message);
            const finalMessage = `https://wa.me/52${template.phoneNumber}?text=${encodeMessage}`
            window.open(finalMessage, '_blank');
        }
    }

    return (
        <div className={"overflow-hidden bg-negro relative"}>
            <div>
                {/*IMAGEN*/}
                <div className={"h-[400px] md:h-[600px] lg:h-screen w-screen relative"}>
                    <img src={template.headerImage} className={"h-[400px] md:h-[600px] lg:h-screen w-screen"} alt=""/>
                    <img src={template.monogram} className={"h-[50px] w-[50px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px] absolute top-[40px] left-[40px] md:top-[60px] md:left-[60px] lg:top-[60px] lg:left-[120px]"} alt=""/>
                    <p className={`${vogue.className} text-[20px] md:text-[50px] lg:text-[70px] text-blanco absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}>{template.title}</p>
                    <div className={"absolute left-1/2 transform -translate-x-1/2 bottom-[100px]"}>
                        <TarotCounter targetDay={day} targetMonth={month} targetYear={year} targetHour={0}></TarotCounter>
                    </div>
                    <div className={"absolute left-1/2 transform -translate-x-1/2 bottom-2"}>
                        <TarotPlayer audioUrl={template.song}></TarotPlayer>
                    </div>
                </div>
                {/*SAVE THE DATE*/}
                <div className={"bg-negro relative h-[400px] md:h-[600px] lg:h-screen"}>
                    {/*ASSET DE FONDO*/}
                    <img src={"https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/invitaciones%2Fbodas%2Ftarot%2FMesa%20de%20trabajo%20%E2%80%93%2011-min.png?alt=media&token=20f01bd4-b52d-4476-834f-04b19250108e"} className={"h-[400px] md:h-[600px] lg:h-screen w-screen"} alt=""/>
                    <img className={"w-[75%] h-[30%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"} src={template.dateImage} alt=""/>
                    <img
                        className={"absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[125px] md:w-[20%]"}
                        src={"https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/invitaciones%2Fbodas%2Ftarot%2Fcalavera.png?alt=media&token=a60f906a-14fa-4f49-aa14-937f55992bdd"}
                        alt=""
                    />
                </div>
                {/*Our History*/}
                <div className={"lg:h-[500px] md:h-[450px] mx-auto w-[75%] border border-blanco border-4 mt-40 mb-5 p-5"}>
                    <div className={"border border-blanco border-4 h-full w-full relative py-20 px-8"}>
                        <p className={`${mythicalPrince.className} text-blanco text-[25px] lg:text-[60px] md:text-[50px] text-center`}>!NUESTRA HISTORIA!</p>
                        <p className={`${montserrat.className} text-blanco text-center text-[11px] lg:text-[22px] md:text-[18px]`}>{template.phrase}</p>
                        <img
                            className={"rotate-180 left-0 absolute bottom-0 h-[180px]"}
                            src="https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/invitaciones%2Fbodas%2Ftarot%2FEstrellas.png?alt=media&token=40f69232-8cd8-41c2-b8be-db096af8c470"
                            alt=""
                        />
                        <img
                            className={"absolute top-0 right-0 h-[180px]"}
                            src="https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/invitaciones%2Fbodas%2Ftarot%2FEstrellas.png?alt=media&token=40f69232-8cd8-41c2-b8be-db096af8c470"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/**/}
            <div className={"relative pt-[100px] md:pt-[250px]"}>
                <div className={"z-10 top-0 relative"}>
                    {/*RECEPCION Y MESA DE REGALO*/}
                    <div className={"lg:flex lg:justify-center lg:space-x-20"}>
                        <div className={"bg-[#161515] p-4 md:h-[800px] h-[550px] w-[90%] md:w-[60%] lg:w-[450px] mx-auto lg:mx-0"}>
                            <div className={"h-full  border border-blanco border-3 p-5 "}>
                                <div className={"border border-blanco border-3 h-full w-full relative py-20 px-8 flex flex-col justify-between"}>
                                    <div>
                                        <div className={"flex justify-center"}>
                                            <img
                                                className={"md:h-[180px] h-[90px]"}
                                                src="https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/invitaciones%2Fbodas%2Ftarot%2Fcopa.png?alt=media&token=db5b9e91-5787-4d0b-b214-0635b573514b"
                                                alt=""
                                            />
                                        </div>
                                        <p className={`${mythicalPrince.className} text-blanco md:text-[50px] text-[25px] pt-5 text-center`}>RECEPCIÓN</p>
                                        <p className={`${montserrat.className} text-blanco md:text-[40px] text-[20px] text-center `}>{onlyHour12}:{minutes}{hour24 > 12 ? "pm" : "am"}</p>
                                        <p className={`${mythicalPrince.className} text-blanco md:text-[25px] text-[15px] text-center`}>{template.address.eventHall}</p>
                                        <p className={`${montserrat.className} text-blanco md:text-[16px] text-[12px] text-center`}>{template.address.address}</p>
                                    </div>
                                    <Link
                                        className={`text-blanco ${montserrat.className} border-blanco border-2 md:py-4 py-2 m-4 text-center`}
                                        href={template.address.link}
                                        target="_blank"
                                    >
                                        Ver
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={"bg-[#161515] p-4 md:h-[800px] h-[550px] w-[90%] md:w-[60%] lg:w-[450px] mx-auto lg:mx-0"}>
                            <div className={"h-full  border border-blanco border-3 p-5 "}>
                                <div className={"border border-blanco border-3 h-full w-full relative py-20 px-8 flex flex-col justify-between"}>
                                    <div>
                                        <div className={"flex justify-center"}>
                                            <img
                                                className={"md:h-[180px] h-[90px]"}
                                                src="https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/invitaciones%2Fbodas%2Ftarot%2FRegalo.png?alt=media&token=fde00109-1ef1-4e0b-9188-522376e8bf75"
                                                alt=""
                                            />
                                        </div>
                                        <p className={`${mythicalPrince.className} text-blanco md:text-[50px] text-[25px] pt-5 text-center`}>MESA DE REGALO</p>
                                        <p className={`${mythicalPrince.className} text-blanco md:text-[25px] text-[20px] pt-5 text-center`}>{template.giftTable.name}</p>
                                        <p className={`${montserrat.className} text-blanco md:text-[16px] text-[12px] text-center`}>{template.giftTable.text}</p>
                                    </div>
                                    <Link
                                        className={`text-blanco ${montserrat.className} border-blanco border-2 md:py-4 py-2 m-4 text-center`}
                                        href={template.giftTable.link}
                                        target="_blank"
                                    >
                                        Ver
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*CÓDIGO DE VESTIMENTA*/}
                    <div className={"md:w-[600px] md:mx-auto mx-5 md:mt-40 mt-20 md:space-y-0 space-y-10"}>
                        <p className={`${mythicalPrince.className} text-blanco md:text-[60px] text-[30px] text-center`}>CÓDIGO DE VESTIMENTA</p>
                        <div className={"flex flex-col md:flex-row justify-between items-center md:space-x-5 md:space-y-0 space-y-5 space-x-0"}>
                            <div className={"flex-[1]"}>
                                <p className={`${mythicalPrince.className} text-blanco md:text-[40px] text-[20px] text-center`}>HOMBRE</p>
                                <p className={`${montserrat.className} text-blanco md:text-[20px] text-[12px] text-center capitalize`}>{template.dressCode.men.type}</p>
                                <p className={`${montserrat.className} text-blanco md:text-[20px] text-[12px] text-center`}>{template.dressCode.men.description}</p>
                                {template.dressCode.men.prohibited.length > 0 && <p className={`${montserrat.className} text-blanco md:text-[20px] text-[12px] text-center`}>Prohibido:</p>}
                                <p className={`${montserrat.className} text-blanco md:text-[20px] text-[12px] text-center`}>{template.dressCode.men.prohibited}</p>
                            </div>
                            <img
                                className={"md:h-[250px] h-[150px]"}
                                src="https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/invitaciones%2Fbodas%2Ftarot%2Fnovios.png?alt=media&token=123a1619-6228-4f3e-80e9-2656e3c5a0de"
                                alt=""
                            />
                            <div className={"flex-[1]"}>
                                <p className={`${mythicalPrince.className} text-blanco md:text-[40px] text-[20px] text-center`}>MUJER</p>
                                <p className={`${montserrat.className} text-blanco md:text-[20px] text-[12px] text-center capitalize`}>{template.dressCode.woman.type}</p>
                                <p className={`${montserrat.className} text-blanco md:text-[20px] text-[12px] text-center`}>{template.dressCode.woman.description}</p>
                                {template.dressCode.woman.prohibited.length > 0 && <p className={`${montserrat.className} text-blanco md:text-[20px] text-[12px] text-center`}>Prohibido:</p>}
                                <p className={`${montserrat.className} text-blanco md:text-[20px] text-[12px] text-center`}>{template.dressCode.woman.prohibited}</p>
                            </div>
                        </div>
                    </div>
                    {/*CONFIRMA TU ASISTENCIA*/}
                    <div className={"md:w-[400px] w-[280px] mx-auto md:mt-40 mt-20 bg-[#161515] p-5 flex flex-col md:space-y-10 space-y-5"}>
                        <p className={`text-blanco text-center ${mythicalPrince.className} text-[30px]`}>Confirma tu asistencia</p>
                        <div className={"md:space-y-8 space-y-4"}>
                            <input
                                className={"border-[1px] border-blanco text-blanco w-full px-3 outline-none py-2 placeholder:text-[14px] text-[14px] bg-transparent"}
                                type="name"
                                placeholder={"Nombre"}
                                id={"name"}
                                name={"name"}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                className={"border-[1px] border-blanco w-full text-blanco px-3 outline-none py-2 placeholder:text-[14px] text-[14px] bg-transparent"}
                                type="personNumber"
                                placeholder={"Número de personas que asistirán"}
                                id={"personNumber"}
                                name={"personNumber"}
                                value={formData.personNumber}
                                onChange={handleChange}
                            />
                            <textarea
                                className={"border-[1px] border-blanco text-blanco w-full px-3 outline-none py-2 placeholder:text-[14px] text-[14px] bg-transparent h-[250px]"}
                                placeholder={"Mensaje para los novios"}
                                id={"message"}
                                name={"message"}
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={"flex justify-center"}>
                            <button
                                className={"border border-blanco border-[1px] text-blanco px-4 py-2 text-xl"}
                                onClick={() => handleButton()}
                            >
                                CONFIRMAR
                            </button>
                        </div>

                    </div>
                    {/*ASSET IMAGEN FINAL*/}
                </div>
                <img
                    className={"mt-[-100px] lg:mt-[-150px]"}
                    src="https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/invitaciones%2Fbodas%2Ftarot%2Fnubes.png?alt=media&token=94ede3fb-471c-4c05-9cc3-e1ade95e1d26"
                    alt=""
                />
                {/*FONDO*/}
                <div className={"absolute right-0 z-0 h-[1000px] md:h-[2000px] top-0"}>
                    <img
                        className={"h-full"}
                        src="https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/invitaciones%2Fbodas%2Ftarot%2Ffondo.png?alt=media&token=216965ed-c1fc-4d82-be50-c82a68574dbf" alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Tarot;