import {CaracteristicasInvitacion, HeaderHome, InvitationCategories, HomeContact, FinalPhrase} from "../components/home/HomeComponents";
import {SliderSwiper} from "@/app/components/general/GeneralComponents";

export default function Home(){

    const data = [
        "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x400.jpg",
        "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg"
    ];

    return (
        <main className={"space-y-20 bg-grisclaro overflow-hidden"}>

            {/*FONDO SLIDER IMAGEN*/}
            <HeaderHome></HeaderHome>

            {/*Caracteristicas*/}
            <CaracteristicasInvitacion></CaracteristicasInvitacion>

            {/*SLIDER ANUNCIOS*/}
            <SliderSwiper></SliderSwiper>

            {/*TIENDA DE INVITACIONES*/}
            <InvitationCategories></InvitationCategories>

            {/*CONTACTO*/}
            <HomeContact></HomeContact>

            {/*FRASE FINAL*/}
            <FinalPhrase></FinalPhrase>


        </main>
    )
}