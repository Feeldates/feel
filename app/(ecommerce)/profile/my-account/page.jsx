"use client"

import {BsPerson, BsCart} from "react-icons/bs";
import {MdOutlineVerified} from "react-icons/md";

const MyAccountPage = () => {

    return (
        <div className={`mt-[120px] mb-[40px] mx-auto w-[90%] lg:w-[70%] bg-blanco rounded-md px-5 py-2 pb-4 h-full space-y-3 pt-8 `}>

            <p className={"font-medium text-xl"}>Mi perfil</p>
            <hr/>
            <div className={"bg-grisclaro flex w-[230px] px-4 py-2 space-x-3 rounded-xl"}>
                <BsPerson></BsPerson>
                <p>Datos de mi cuenta</p>
            </div>
            <div className={"bg-grisclaro flex w-[230px] px-4 py-2 space-x-3 rounded-xl"}>
                <MdOutlineVerified></MdOutlineVerified>
                <p>Seguridad</p>
            </div>

        </div>
    );
};

export default MyAccountPage;