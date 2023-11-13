import {motion} from "framer-motion";
import Modal from "@/app/components/general/modal/Modal";

const Backdrop = ({children, onClick}) => {

    return (
        <motion.div
            className={"top-0 left-0 h-full w-full absolute z-50 bg-[#000000e1] flex items-center justify-center"}
            onClick={onClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            {children}
        </motion.div>
    );

}

export default Backdrop;