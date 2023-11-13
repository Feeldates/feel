"use client"
import React from 'react';
import {AiOutlineStar} from "react-icons/ai";
import useProductById from "@/app/utils/useProductById";
import Link from "next/link";

const ProfileItem = ({item, date}) => {

    const {data: product, loading, error } = useProductById(item.price.product);


    if (!product){
        return <div></div>
    }

    return (
        <div className={"bg-blanco py-1 items-center justify-between flex"}>
            <div className={"flex space-x-2 lg:space-x-10"}>
                <img src={product.images[0]} alt="" className={"h-[60px]"}/>
                {/*ESTRELLAS*/}
                <div className={"capitalize flex flex-col justify-center w-[60px]"}>
                    <p className={"font-bold text-sm"}>{product.metadata.tipo}</p>
                    {product.metadata.tipo == "diamond" ? <div className={"flex"}>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                    </div> : product.metadata.tipo == "gold" ? <div className={"flex"}>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                    </div> : <div className={"flex"}>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                        <AiOutlineStar style={{ fontSize: 15 }}></AiOutlineStar>
                    </div>}
                </div>
                {/*ENTREGADO*/}
                <div className={"capitalize flex-col justify-center hidden lg:flex"}>
                    <p className={"font-medium text-color1 text-sm"}>Pagado</p>
                    <p className={"text-sm"}>{date ?? ""}</p>
                </div>
            </div>
            {/*VOLVER A COMPRAR*/}
            <div className={"flex flex-col space-y-2"}>
                <div className={"capitalize flex-col justify-center lg:hidden"}>
                    <p className={"font-medium text-color1 lg:text-sm text-[12px]"}>Pagado</p>
                    <p className={"lg:text-sm text-[12px]"}>{date ?? ""}</p>
                </div>
                <Link
                    href={`/invitations/${product.metadata.tipo}`}
                    className={"bg-color1 text-blanco rounded-xl px-4 py-[4px] text-[10px] text-center lg:text-start lg:text-[15px]"}
                >
                    Volver a comprar
                </Link>
            </div>
        </div>

    );
};

export default ProfileItem;