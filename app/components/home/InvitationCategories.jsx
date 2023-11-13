import {AiOutlineStar} from "react-icons/ai";
import Link from "next/link";

const InvitationCategories = () => {

    const data = [
        "https://firebasestorage.googleapis.com/v0/b/feeldates-c3849.appspot.com/o/Assets%2Fcelular.png?alt=media&token=45edf0ff-a072-4864-b7df-68257cc86634&_gl=1*1c1mbie*_ga*OTI1OTUwNTguMTY5NzU1Njg1Mg..*_ga_CW55HF8NVT*MTY5ODA4NTc3NS4xMS4xLjE2OTgwODgwMDEuNDcuMC4w",
    ];

    return (
        <div className={"w-[70%] items-center mx-auto rounded-[30px] relative bg-blanco py-8 px-10 md:px-16 lg:px-16"}>
            <div className={"text-[40px] font-bold justify-center flex mb-[30px]"}>
                Invitaciones
            </div>
            <div className={"flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-5 lg:space-x-5 overflow-hidden space-y-10 md:space-y-0 lg:space-y-0"}>
                <Link href={"/invitations/gold"} className={"flex-[1] space-y-3 flex-col py-8"}>
                    {/* TEXTOS */}
                    <div className={" flex-col items-center flex"}>
                        <p className={"font-bold text-xl"}>Gold</p>
                        <div className={"flex"}>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                        </div>
                        <p className={"pt-3 text-xl"}>$1599.00MX</p>

                        <div className={"lg:h-[400px] md:h-[300px] h-[200px] mt-5"}>
                            <img src={data[0]} alt="" className={"h-full"}/>
                        </div>
                    </div>

                </Link>

                <Link href={"/invitations/diamond"} className={"flex-[1] space-y-3 flex-col"}>
                    {/* TEXTOS */}
                    <div className={" flex-col items-center flex"}>
                        <p className={"font-bold text-xl"}>Diamond</p>
                        <div className={"flex"}>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                        </div>
                        <p className={"pt-3 text-xl"}>$1899.00MX</p>

                        <div className={"lg:h-[400px] md:h-[300px] h-[200px] mt-5"}>
                            <img src={data[0]} alt="" className={"h-full"}/>
                        </div>
                    </div>

                </Link>

                <Link href={"/invitations/regular"} className={"flex-[1] space-y-3 flex-col py-8"}>
                    {/* TEXTOS */}
                    <div className={" flex-col items-center flex"}>
                        <p className={"font-bold text-xl"}>Regular</p>
                        <div className={"flex"}>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                            <AiOutlineStar></AiOutlineStar>
                        </div>
                        <p className={"pt-3 text-xl"}>$1299.00MX</p>

                        <div className={"lg:h-[400px] md:h-[300px] h-[200px] mt-5"}>
                            <img src={data[0]} alt="" className={"h-full"}/>
                        </div>
                    </div>

                </Link>
            </div>
        </div>
    );
};

export default InvitationCategories;