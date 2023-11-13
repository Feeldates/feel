import React from 'react';
import { montserrat } from '@/app/ui/fonts';
import Image from "next/image";


const CaracteristicasInvitacion = () => {

    const images = [
        "https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/Assets%2Ficono-cel.png?alt=media&token=6c1e5fea-eed1-4ac5-a5e3-09e5b71b1544&_gl=1*zbxotz*_ga*OTI1OTUwNTguMTY5NzU1Njg1Mg..*_ga_CW55HF8NVT*MTY5ODA4NTc3NS4xMS4xLjE2OTgwODcyODIuNDYuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/Assets%2Ficono-ecologico.png?alt=media&token=4ad82a8d-0824-4ffc-ace1-c50008e22705&_gl=1*xahep3*_ga*OTI1OTUwNTguMTY5NzU1Njg1Mg..*_ga_CW55HF8NVT*MTY5ODA4NTc3NS4xMS4xLjE2OTgwODczMDcuMjEuMC4w",
        "https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/Assets%2Ficono-pincel.png?alt=media&token=ffe082c0-7cae-4802-8777-0e61607fbe08&_gl=1*10czdsz*_ga*OTI1OTUwNTguMTY5NzU1Njg1Mg..*_ga_CW55HF8NVT*MTY5ODA4NTc3NS4xMS4xLjE2OTgwODcyOTYuMzIuMC4w"
    ]

    return (
        <div className={"flex md:flex-row lg:flex-row space-y-10 md:space-y-0 lg:space-y-0 flex-col items-center w-[70%] mx-auto bg-blanco justify-between px-20 py-10 rounded-[30px] md:h-[400px] lg:md:h-[400px]"}>

            <div className={`flex flex-col items-center w-[150px] space-y-3 ${montserrat.className} antialiased`}>
                <Image src={images[0]} alt={"Invitaciones Digitales"} height={100} width={70}></Image>
                <h1 className={"font-bold text-center"}>Invitaciones Digitales</h1>
                <p className={"text-center"}>Tus invitaciones seran totalmente digital</p>
            </div>

            <div className={`flex flex-col items-center w-[150px] space-y-3 ${montserrat.className} antialiased`}>
                <Image src={images[1]} alt={"Invitaciones Digitales"}height={100} width={70}></Image>
                <h1 className={"font-bold text-center"}>Invitaciones Personalizadas</h1>
                <p className={"text-center text-sm"}>Nuestros diseños se adaptan a los cambios que necesites</p>
            </div>

            <div className={`flex flex-col items-center w-[150px] space-y-3 ${montserrat.className} antialiased`}>
                <Image src={images[2]} alt={"Invitaciones Ecológicas"} height={100} width={70}></Image>
                <h1 className={"font-bold text-center"}>Ecológicas</h1>
                <p className={"text-center text-sm"}>Apoyamos al medio ambiente con nuestras invitaciones totalmente digital</p>
            </div>
        </div>
    );
};

export default CaracteristicasInvitacion;