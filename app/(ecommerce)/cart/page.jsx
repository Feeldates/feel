"use client"
import React from 'react';
import {AiOutlineStar} from "react-icons/ai";
import {UserAuth} from "@/app/context/AuthContext";
import {BagContext} from "@/app/context/BagContext";
import createCheckoutSession from "@/app/utils/createCheckoutSession";
import formatProductPrice from "@/app/utils/formatProductPrice";

const CartPage = () => {

    const {currentUser} = UserAuth();
    const {bag, removeProduct} = BagContext();

    async function generarCompra(){
        createCheckoutSession(currentUser.uid, bag);
    }

    return (
        <div className={"overflow-hidden"}>
            {/*DESKTOP*/}
            <div className={`mt-[120px] mb-[40px] mx-[15%] w-[44%] bg-blanco rounded-md px-5 py-2 pb-4 space-y-2 hidden lg:block`}>

                <p className={"font-bold"}>Invitaciones</p>
                {bag.map((product) => {
                    return <div
                        key={product.id}
                        className={"border-grisoscuro rounded-[30px] bg-blanco border py-1 pl-10 pr-8 space-x-10 flex justify-between items-center "}
                    >
                        <div className={"flex items-center space-x-10"}>
                            {/*IMAGEN*/}
                            <img src={product.images[0]} alt="" className={"h-[60px]"}/>
                            {/*ESTRELLAS*/}
                            <div className={"flex-[1] capitalize"}>
                                <p className={"font-bold text-sm"}>{product.metadata.tipo}</p>
                                {product.metadata.tipo == "diamond" ? <div className={"flex"}>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                </div> : product.metadata.tipo == "gold" ? <div className={"flex"}>
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
                            {/*ELIMINAR*/}
                            <div className={"flex-[1]"}>
                                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                            </div>
                        </div>

                        {/*  SUBTOTAL PRODUCTO  */}
                        <div className={""}>
                            ${formatProductPrice(product).substring(4)}
                        </div>
                    </div>
                })}

            </div>
            <div className={`bg-blanco px-10 py-5 rounded-md space-y-5 flex-col fixed z-40 top-[120px] w-[24%] right-[15%] hidden lg:block`}>
                <p className={"text-xl font-bold"}>Resumen de compra</p>
                <hr className={"text-grisclaro"}/>
                <div className={"flex justify-between"}>
                    <p className={"text-sm"}>Invitaciones ({bag.length})</p>
                    <div>{bag.map(product => {
                        const price = formatProductPrice(product).toString();
                        return <p key={product.id} className={"text-sm"}>{price.substring(4)}</p>
                    })}</div>
                </div>
                <div className={"flex justify-between"}>
                    <p className={"font-bold text-xl"}>Total</p>
                    <p className={"text-xl font-bold"}>
                        <span className={"text-[15px]"}>{formatProductPrice(null, "MXN", bag.reduce((total, diccionario) => total + diccionario.price.unit_amount, 0))}</span>
                    </p>
                </div>
                <hr className={"text-grisclaro pb-4"}/>
                <button
                    onClick={() => generarCompra()}
                    className={"flex justify-center w-full bg-color1 rounded-[30px] py-2 text-blanco font-medium text-[14px]"}
                >
                    Confirmar compra</button>
            </div>

            {/*TABLET MOBILE*/}
            <div className={`mt-[120px] mb-[35%] mx-[5%] w-[90%] md:mx-[15%] md:w-[70%] bg-blanco rounded-md px-5 py-2 pb-4 space-y-2 lg:hidden`}>

                <p className={"font-bold"}>Invitaciones</p>
                {bag.map((product) => {
                    return <div
                        key={product.id}
                        className={"border-grisoscuro rounded-[30px] bg-blanco border py-1 pl-10 pr-8 space-x-10 flex items-center justify-between"}
                    >
                        <div className={"flex items-center space-x-5"}>
                            {/*IMAGEN*/}
                            <img src={product.images[0]} alt="" className={"h-[60px]"}/>
                            {/*ESTRELLAS*/}
                            <div className={"flex-[1] capitalize"}>
                                <p className={"font-bold text-sm"}>{product.metadata.tipo}</p>
                                {product.metadata.tipo == "diamond" ? <div className={"flex"}>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                    <AiOutlineStar></AiOutlineStar>
                                </div> : product.metadata.tipo == "gold" ? <div className={"flex"}>
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
                            {/*ELIMINAR*/}
                            <div className={"hidden md:flex"}>
                                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                            </div>
                        </div>
                        {/*  SUBTOTAL PRODUCTO  */}
                        <div className={"items-center flex flex-col"}>
                            ${formatProductPrice(product).substring(4)}
                            <div className={"md:hidden lg:hidden"}>
                                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                })}

            </div>
            <div className={`bg-blanco h-fit py-5 px-10 rounded-t-3xl space-y-5 flex flex-col fixed z-40 bottom-0 w-full lg:hidden shadow-[0.0px_-0.5px_8.0px_rgba(0,0,0,0.50)]`}>
                {/*RESUMEN DE COMPRA*/}
                <div className={""}>
                    <p className={"text-xl font-bold"}>Resumen de compra</p>
                </div>
                <hr className={"text-grisclaro"}/>
                {/*PRODUCTOS Y PRECIOS*/}
                <div className={"flex justify-between"}>
                    <p className={"text-[15px]"}>Invitaciones ({bag.length})</p>

                    <div className={"overflow-y-auto h-[50px]"}>
                        {bag.map(product => <p key={product.id} className={"text-[151px]]"}>{formatProductPrice(product).substring(4)}</p>)}
                    </div>
                </div>
                {/*TOTAL*/}
                <div className={"flex justify-between"}>
                    <p className={"font-bold text-xl"}>Total</p>
                    <p className={"text-xl font-bold"}>
                        <span className={"text-[15px]"}>{formatProductPrice(null, "MXN", bag.reduce((total, diccionario) => total + diccionario.price.unit_amount, 0))}</span>

                    </p>
                </div>
                <hr className={"text-grisclaro pb-4"}/>
                {/*BOTON*/}
                <button
                    onClick={() => generarCompra()}
                    className={"flex justify-center w-full bg-color1 rounded-[30px] py-2 text-blanco font-medium text-xl"}
                >
                    Confirmar compra</button>
            </div>

        </div>
    );
};

export default CartPage;