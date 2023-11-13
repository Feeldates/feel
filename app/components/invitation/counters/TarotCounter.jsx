"use client"

import { useState, useEffect } from 'react';
import localFont from "next/font/local";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
    style: ['normal'],
})

const mythicalPrince = localFont({src: "../../../../fonts/Mythical Prince.ttf"})
const vogue = localFont({src: "../../../../fonts/Vogue.ttf"})

const TarotCounter = ({ targetDay, targetMonth, targetYear, targetHour}) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const targetTime = new Date(targetYear, targetMonth - 1, targetDay, targetHour).getTime(); // Meses en JavaScript van de 0 a 11
        const difference = targetTime - now;

        if (difference < 0) {
            // La fecha objetivo ya ha pasado
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={"text-blanco text-center flex"}>
            {/*DIAS*/}
            <div>
                <p className={`${mythicalPrince.className} text-[20px] md:text-[40px] lg:text-[70px] font-bold`}>{timeLeft.days.toString().padStart(2, "0")}</p>
                <p className={`${montserrat.style} mt-[-10px] md:mt-[-15px] lg:mt-[-30px] text-[10px] md:text-[15px] lg:text-[25px]`}>Días</p>
            </div>
            <p className={`${mythicalPrince.className} text-[20px] md:text-[40px] lg:text-[70px] font-bold`}>:</p>
            {/*Horas*/}
            <div>
                <p className={`${mythicalPrince.className} text-[20px] md:text-[40px] lg:text-[70px] font-bold`}>{timeLeft.hours.toString().padStart(2, "0")}</p>
                <p className={`${montserrat.style} mt-[-10px] md:mt-[-15px] lg:mt-[-30px] text-[10px] md:text-[15px] lg:text-[25px]`}>Horas</p>
            </div>
            <p className={`${mythicalPrince.className} text-[20px] md:text-[40px] lg:text-[70px] font-bold`}>:</p>
            {/*Minutos*/}
            <div>
                <p className={`${mythicalPrince.className} text-[20px] md:text-[40px] lg:text-[70px] font-bold`}>{timeLeft.minutes.toString().padStart(2, "0")}</p>
                <p className={`${montserrat.style} mt-[-10px] md:mt-[-15px] lg:mt-[-30px] text-[10px] md:text-[15px] lg:text-[25px]`}>Min</p>
            </div>
            <p className={`${mythicalPrince.className} text-[20px] md:text-[40px] lg:text-[70px] font-bold`}>:</p>
            {/*Segundos*/}
            <div>
                <p className={`${mythicalPrince.className} text-[20px] md:text-[40px] lg:text-[70px] font-bold`}>{timeLeft.seconds.toString().padStart(2, "0")}</p>
                <p className={`${montserrat.style} mt-[-10px] md:mt-[-15px] lg:mt-[-30px] text-[10px] md:text-[15px] lg:text-[25px]`}>Seg</p>
            </div>
        </div>
    );
};

export default TarotCounter;