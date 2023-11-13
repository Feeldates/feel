"use client"
import React from 'react';
import ProfileItem from "@/app/components/profile/ProfileItem";
import usePayments from "@/app/utils/usePayments";
import {UserAuth} from "@/app/context/AuthContext";

const MyPurchases = () => {
    const{currentUser} = UserAuth();
    const {data, loading, error} = usePayments(currentUser.uid)

    console.log(data);

    return (
        <div className={`mt-[120px] mb-[40px] mx-auto w-[90%] lg:w-[70%] bg-blanco rounded-md px-5 py-2 pb-4 h-full space-y-3 pt-8 `}>

            <p className={"font-medium text-xl"}>Mis compras</p>
            <hr/>
            {data.map(product => {
                return <div
                    key={product.id}
                    className={"space-y-5"}
                >
                    {product.items?.map(item => {
                        return <ProfileItem key={item.id} item={item} date={product.metadata.date}></ProfileItem>;
                    })}
                    <hr className={"text-grisclaro"}/>
                </div>
            })}

        </div>
    );
};

export default MyPurchases;