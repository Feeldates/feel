"use client"
import React, {useState} from 'react';
import InvitationSlider from "@/app/components/invitations/slider_invitations/InvitationSlider";
import {BagContext} from "@/app/context/BagContext";
import {AiOutlineStar, AiOutlineArrowLeft} from "react-icons/ai";
import Link from "next/link";
import useProducts from "@/app/utils/useProducts";

const Page = ({params: {type}}) => {
    const {addProduct} = BagContext();

    const [selected, setSelected] = useState(null);


    // OBTENER DATOS
    const {data: weddingData, loading: weddingLoading, error: weddingError} = useProducts(type, "boda");
    const {data: xvData, loading: xvLoading, error: xvError} = useProducts(type, "xv");
    const {data: eventData, loading: eventLoading, error: eventError} = useProducts(type, "evento");

    return (
        <div className={"overflow-hidden relative"}>

            {/*FONDO SLIDER IMAGEN*/}
            <div className={`mt-[120px] mb-[40px] flex mx-[15%] space-x-10 transition-all duration-1000 ${selected === null ? "w-[70%]" : "w-[40%]"} hidden lg:flex`}>

                {/*INVITACIONES DISPONIBLES*/}
                <div className={"flex-[7] bg-blanco p-10 space-y-12 rounded-md w-[20%]"}>
                    {/*BODAS*/}
                    <div>
                        <p className={"font-bold"}>Bodas</p>
                        <hr className={"text-grisoscuro"}/>
                        {/*INVITACIONES DE BODA*/}
                        <InvitationSlider invitations={weddingData} loading={weddingLoading} error={weddingError} setSelected={setSelected}></InvitationSlider>
                    </div>

                    {/*XV*/}
                    <div>
                        <p className={"font-bold"}>XV</p>
                        <hr className={"text-grisoscuro"}/>
                        {/*INVITACIONES DE XV*/}
                        <InvitationSlider invitations={xvData} loading={xvLoading} error={xvError} setSelected={setSelected}></InvitationSlider>
                    </div>

                    {/*EVENTOS*/}
                    <div>
                        <p className={"font-bold"}>Eventos</p>
                        <hr className={"text-grisoscuro"}/>
                        {/*INVITACIONES DE EVENTOS*/}
                        <InvitationSlider invitations={eventData} loading={eventLoading} error={eventError} setSelected={setSelected}></InvitationSlider>
                    </div>
                </div>
            </div>

            {/*PRODUCTO SELECCIONADO*/}
            <div className={`overflow-y-auto h-[calc(100%-80px-80px)] bg-blanco p-10 rounded-md space-y-5 flex-col transition-all duration-1000 hidden lg:flex fixed z-40 top-[120px]  ${selected === null ? "opacity-0 right-[-30%] w-[28%]" : "opacity-100 right-[15%] w-[28%]"}`}>
                <img src={selected?.images[0]} alt="" className={"h-[200px] w-[120px] mx-auto"}/>
                <div className={"flex-col space-y-4 "}>
                    {/*Nombre y estrellas*/}
                    <div>
                        <p className={"capitalize"}>{selected?.metadata.tipo} | {selected?.name}</p>
                        {type == "diamond" ? <div className={"flex"}>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                        </div> : type == "gold" ? <div className={"flex"}>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                        </div> : <div className={"flex"}>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                        </div>}

                    </div>

                    <hr className={"text-grisoscuro"}/>

                    {/*Botones*/}
                    <div className={"space-y-2"}>

                        <button
                            className={"bg-color1 rounded-md text-blanco font-medium text-sm py-2 w-full"}
                        >
                            Comprar Ahora
                        </button>
                        <Link
                            href={selected?.demoLink ?? ""}
                            target={"_blank"}
                            className={"bg-color3 rounded-md text-blanco font-medium text-sm py-2 w-full justify-center flex"}
                        >
                            Ver plantilla
                        </Link>

                        <button
                            onClick={() => addProduct(selected)}
                            className={"bg-color4 rounded-md text-blanco font-medium text-sm py-2 w-full"}

                        >
                            Agregar a la bolsa
                        </button>

                    </div>

                    <hr className={"text-grisoscuro"}/>

                    {/*Caracteristicas*/}
                    <div className={""}>
                        <p className={"font-bold"}>Caracteristicas</p>
                        <p className={""}>- Monograma</p>
                        <p className={""}>- Música</p>
                        <p className={""}>- Galería de foto</p>
                        <p className={""}>- Ubicación</p>
                        <p className={""}>- Cronometro</p>
                        <p className={""}>- Confirmación</p>
                        <p className={""}>- Enlaces para mesa de regalos</p>
                        <p className={""}>- Itinerario</p>
                        <p className={""}>- Sugerencia de hoteles</p>
                    </div>
                </div>
            </div>



            {/*MOVIL Y TABLET*/}

            {/*FONDO SLIDER IMAGEN*/}
            <div className={`mt-[120px] mb-[40px] flex mx-[15%] space-x-10 w-[70%] ${selected === null ? "flex" : "hidden"}  lg:hidden`}>

                {/*INVITACIONES DISPONIBLES*/}
                <div className={"flex-[7] bg-blanco p-10 space-y-8 rounded-md w-[20%]"}>
                    {/*BODAS*/}
                    <div>
                        <p className={"font-bold"}>Bodas</p>
                        <hr className={"text-grisoscuro"}/>
                        {/*INVITACIONES DE BODA*/}
                        <InvitationSlider invitations={weddingData} loading={weddingLoading} error={weddingError} setSelected={setSelected}></InvitationSlider>
                    </div>

                    {/*XV*/}
                    <div>
                        <p className={"font-bold"}>XV</p>
                        <hr className={"text-grisoscuro"}/>
                        {/*INVITACIONES DE XV*/}
                        <InvitationSlider invitations={xvData} loading={xvLoading} error={xvError} setSelected={setSelected}></InvitationSlider>
                    </div>

                    {/*EVENTOS*/}
                    <div>
                        <p className={"font-bold"}>Eventos</p>
                        <hr className={"text-grisoscuro"}/>
                        {/*INVITACIONES DE EVENTOS*/}
                        <InvitationSlider invitations={eventData} loading={eventLoading} error={eventError} setSelected={setSelected}></InvitationSlider>
                    </div>
                </div>
            </div>

            {/*PRODUCTO SELECCIONADO*/}
            <div className={`mt-[120px] w-[70%] mx-[15%] mb-[40px] space-y-5 ${selected === null && "hidden"} lg:hidden`}>
                <button
                    onClick={() => setSelected(null)}
                >
                    <div className={"text-color1 scale-[1.25]"}>
                        <AiOutlineArrowLeft></AiOutlineArrowLeft>
                    </div>
                </button>
                <div className={`bg-blanco p-10 rounded-md space-y-5 flex-col z-40 top-[120px]`}>
                    <img src={selected?.images[0]} alt="" className={"h-[200px] w-[120px] mx-auto"}/>
                    <div className={"flex-col space-y-4 "}>
                        {/*Nombre y estrellas*/}
                        <div>
                            <p className={"capitalize"}>{selected?.metadata.tipo} | {selected?.name}</p>
                            {type == "diamond" ? <div className={"flex"}>
                                <AiOutlineStar></AiOutlineStar>
                                <AiOutlineStar></AiOutlineStar>
                                <AiOutlineStar></AiOutlineStar>
                                <AiOutlineStar></AiOutlineStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div> : type == "gold" ? <div className={"flex"}>
                                <AiOutlineStar></AiOutlineStar>
                                <AiOutlineStar></AiOutlineStar>
                                <AiOutlineStar></AiOutlineStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div> : <div className={"flex"}>
                                <AiOutlineStar></AiOutlineStar>
                                <AiOutlineStar></AiOutlineStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div>}

                        </div>

                        <hr className={"text-grisoscuro"}/>

                        {/*Botones*/}
                        <div className={"space-y-2"}>

                            <button
                                className={"bg-color1 rounded-md text-blanco font-medium text-sm py-2 w-full"}
                            >
                                Comprar Ahora
                            </button>
                            <Link
                                href={selected?.demoLink ?? ""}
                                target={"_blank"}
                                className={"bg-color3 rounded-md text-blanco font-medium text-sm py-2 w-full justify-center flex"}
                            >
                                Ver plantilla
                            </Link>

                            <button
                                onClick={() => addProduct(selected)}
                                className={"bg-color4 rounded-md text-blanco font-medium text-sm py-2 w-full"}

                            >
                                Agregar a la bolsa
                            </button>

                        </div>

                        <hr className={"text-grisoscuro"}/>

                        {/*Caracteristicas*/}
                        <div className={""}>
                            <p className={"font-bold"}>Caracteristicas</p>
                            <p className={""}>- Monograma</p>
                            <p className={""}>- Música</p>
                            <p className={""}>- Galería de foto</p>
                            <p className={""}>- Ubicación</p>
                            <p className={""}>- Cronometro</p>
                            <p className={""}>- Confirmación</p>
                            <p className={""}>- Enlaces para mesa de regalos</p>
                            <p className={""}>- Itinerario</p>
                            <p className={""}>- Sugerencia de hoteles</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Page;