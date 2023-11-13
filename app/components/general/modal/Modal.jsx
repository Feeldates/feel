import React from 'react';
import Backdrop from "@/app/components/general/backdrop/Backdrop";
import {motion} from "framer-motion";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: 1,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}

const CustomModal = ({handleClose, children}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                // className={"lg:w-[50%] h-[500px] mx-auto fixed rounded-xl flex flex-col items-center bg-negro"}
                className={"lg:w-[50%] h-[250px] lg:h-[500px] mx-auto fixed rounded-xl flex flex-col items-center bg-negro"}
                variants={dropIn}
                onClick={(e) => e.stopPropagation()}
                initial={"hidden"}
                animate={"visible"}
                exit={"exit"}
            >
                {children}
            </motion.div>
        </Backdrop>
    );
};

export default CustomModal;