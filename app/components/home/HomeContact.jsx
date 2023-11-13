import React from 'react';

const HomeContact = () => {
    return (
        <div className={"flex flex-col md:flex-row lg:flex-row w-[70%] mx-auto bg-blanco justify-between rounded-[30px] items-center h-[550px] md:h-[600px] lg:h-[600px] relative"}>

            <div className={"right-0 rounded-tl-[30px] md:hidden lg:hidden h-[30%] w-full"}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/Assets%2Ffeeldates-fondo.png?alt=media&token=df3b08a2-16d2-494f-92e5-148e56d111ac&_gl=1*el1lsq*_ga*OTI1OTUwNTguMTY5NzU1Njg1Mg..*_ga_CW55HF8NVT*MTY5ODA4NTc3NS4xMS4xLjE2OTgwODczMjMuNS4wLjA." alt=""
                    className={"h-full object-fill rounded-t-[30px] w-full"}/>
            </div>

            <div className={"md:w-[50%] lg:w-[50%] h-full py-12 space-y-4 md:px-[80px] lg:px-[80px] flex flex-col items-center"}>
                <p className={"font-bold text-[35px] md:text-[45px] lg:text-[45px]"}>Contactanos</p>

                <input
                    type="text"
                    placeholder={"Nombre"}
                    className={"bg-grisclaro rounded-full w-full px-5 py-2 outline-none"}
                />

                <textarea
                    placeholder={"Mensaje"}
                    className={"bg-grisclaro px-5 w-full h-full py-2 rounded-[30px] outline-none resize-none"}
                />

                <div className={"pt-4"}>
                    <button className={"text-blanco bg-gradiente text-xl px-8 py-1 rounded-full"}>
                        Enviar
                    </button>
                </div>

            </div>

            <div className={"w-[50%] hidden md:flex lg:flex md:absolute lg:absolute right-0 h-full rounded-[30px]"}>
                <img src="https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/Assets%2Ffeeldates-fondo.png?alt=media&token=df3b08a2-16d2-494f-92e5-148e56d111ac&_gl=1*el1lsq*_ga*OTI1OTUwNTguMTY5NzU1Njg1Mg..*_ga_CW55HF8NVT*MTY5ODA4NTc3NS4xMS4xLjE2OTgwODczMjMuNS4wLjA." alt="" className={"h-full object-fill rounded-[30px] w-full"}/>
            </div>

        </div>
    );
};

export default HomeContact;