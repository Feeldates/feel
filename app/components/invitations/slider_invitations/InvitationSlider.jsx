"use client"
import React from 'react';
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "./invitation_slider.css"


const InvitationSlider = ({invitations, loading, error, setSelected}) => {

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
        >

            {invitations.map((invitation) => (
                <SwiperSlide
                    key={invitation.id}
                    className={"flex-col items-center px-1 lg:px-5 py-5 rounded-lg my-3 cursor-pointer space-y-2 min-w-fit"} style={{background: "#EEEEEE"}}
                    onClick={() => setSelected(invitation)}
                >
                    <div className={"h-[60px] md:h-[120px] lg:h-[150px]"} >
                        <img src={invitation.images[0]} alt="" className={""}/>
                    </div>
                    <p className={"font-medium text-[10px] md:text-[12px] lg:text-[14px]"}>{invitation.name}</p>
                </SwiperSlide>
            ))}

        </Swiper>
    );
};

export default InvitationSlider;