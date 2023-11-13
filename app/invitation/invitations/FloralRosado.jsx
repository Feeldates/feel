"use client"
import React, {useState} from 'react';
import Image from "next/image";
import localFont from "next/font/local";
import {BsSpotify, BsYoutube} from "react-icons/bs";
import {SiApplemusic} from "react-icons/si";
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion";
import CustomModal from "@/app/components/general/modal/Modal";
import YoutubeFrame from "@/app/components/general/youtube_modal/YoutubeModal";
import firebaseDateFormat from "@/app/utils/firebaseDateFormat";

import {Gabriela} from "next/font/google";
const gabriela = Gabriela({
    weight: '400',
    subsets: ['latin'],
    style: ['normal'],
})
const golden = localFont({src: "../../../fonts/GOLDEN.otf"})
const rosela = localFont({src: "../../../fonts/ROSSELA.otf"})
const madina = localFont({src: "../../../fonts/Madina.otf"})

const FloralRosado = ({template}) => {

    const [modalOpen, setModalOpen] = useState()
    const close = () => setModalOpen(false);
    const open = () => {
        setModalOpen(true);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const{day, month, year, hour12, onlyHour12, minutes, seconds, hour24} = firebaseDateFormat(template.date);


    return (

        <div className={`bg-blanco overflow-hidden`}>
            {/*Cabezera*/}
            <div className={"relative lg:h-screen md:h-[60vh] h-[40vh] z-10"}>
                {/*HEADER IMAGE*/}
                <Image
                    src={template.headerImage}
                    alt={`${template.title}`}
                    fill={true}
                />
                {/*FONDO*/}
                <div className={`absolute opacity-40 h-full z-10 w-full`} style={{backgroundColor: template.extraColor}}></div>
                {/*CUERPO*/}
                <div className={"absolute flex justify-center items-center h-full z-20 w-full"}>
                    {/*TITULO*/}
                    <div className={"w-[50%]"}>
                        <p className={`${golden.className} text-blanco lg:text-[70px] md:text-[40px] text-[20px] text-center`}>{template.title}</p>
                    </div>
                    {/*Monograma*/}
                    <div className={"absolute lg:top-20 lg:left-20 md:top-[60px] md:left-[60px] top-10 left-10 lg:w-[50px] lg:h-[100px] w-[40px] h-[80px]"}>
                        <Image src={template.monogram} alt={"Monogram"} fill={true}/>
                    </div>
                </div>
                {/*LINK CANCION*/}
                <div className={"absolute z-20 space-y-3 transform left-1/2 -translate-x-1/2 text-[40px] lg:bottom-[80px] md:bottom-[40px] bottom-[20px]"}>
                    <div className={"flex space-x-5 lg:text-[25px] md:text-[20px] text-[16px]"}>
                        <Link target={"_blank"} href={template.song.spotify}><BsSpotify></BsSpotify></Link>
                        <Link target={"_blank"} href={template.song.youtube}><BsYoutube></BsYoutube></Link>
                        <Link target={"_blank"} href={template.song.appleMusic}><SiApplemusic></SiApplemusic></Link>
                    </div>
                    {/*REPRODUCIR*/}
                    <div className={"flex justify-center"}>
                        <motion.button
                            onClick={() => (modalOpen ? close() : open())}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale:0.9}}
                            className={"border border-blanco border-[1px] px-2 rounded-full h-fit py-1 text-[12px] text-blanco"}>
                            Reproducir
                        </motion.button>
                    </div>
                </div>
            </div>
            {/*SAVE THE DATE*/}
            <div className={"w-full lg:h-[50vh] md:h-[40vh] h-[30vh] flex justify-center items-center flex-col relative"}>
                <p className={`${madina.className} text-[#F35656] lg:text-[190px] md:text-[150px] text-[80px]`}>Te invitamos</p>
                <p className={`${madina.className} text-[#585858] lg:text-[78px] md:text-[60px] text-[30px] lg:mt-[-100px] md:mt-[-80px] mt-[-50px]`}>{day}/{month}/{year}</p>
                <div className={"absolute lg:-bottom-12 lg:-left-12 -bottom-5 -left-5 rotate-45 lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px] w-[100px] h-[100px]"}>
                    <Image
                        alt={"Flor"}
                        src={"https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/invitaciones%2Fxv%2Fflora_rosado%2F1.png?alt=media&token=0b75e7ad-384e-4fc3-bf8f-68b1a5bd13af"}
                        fill={true}
                    />
                </div>
                <div className={"absolute lg:-top-12 lg:-right-12 -right-5 -top-5 -rotate-[135deg] z-0 lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px] w-[100px] h-[100px]"}>
                    <Image
                        alt={"Flor"}
                        src={"https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/invitaciones%2Fxv%2Fflora_rosado%2F1.png?alt=media&token=0b75e7ad-384e-4fc3-bf8f-68b1a5bd13af"}
                        fill={true}
                    />
                </div>
            </div>
            {/*FRASE*/}
            <div className={"relative w-full lg:h-screen md:h-[60vh] h-[40vh] flex justify-center items-center flex-col"}>
                {/*HEADER IMAGE*/}
                <Image
                    src={template.images[1]}
                    alt={`${template.title}`}
                    fill={true}
                />
                {/*FONDO*/}
                <div className={`absolute opacity-40 h-full z-10 w-full`} style={{backgroundColor: template.extraColor}}></div>
                {/*CUERPO*/}
                <div className={"absolute flex justify-center items-center h-full z-20 w-full"}>
                    {/*TITULO*/}
                    <div className={"w-[75%]"}>
                        <p className={`${gabriela.className} text-blanco lg:text-[34px] md:text-[18px] text-[14px] text-center`}>{template.phrase}</p>
                    </div>
                </div>
            </div>



            {/*MODAL*/}
            <div>
                <AnimatePresence initial={false} mode={"wait"} onExitComplete={() => null}>
                    {modalOpen && <CustomModal modalOpen={modalOpen} handleClose={close}>
                        <YoutubeFrame videoId={template.idVideo}/>
                    </CustomModal>}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FloralRosado;