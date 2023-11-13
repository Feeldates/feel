import React from 'react';
import FloralRosado from "@/app/invitation/invitations/FloralRosado";
import UseMetadataByLinkName from "@/app/utils/useMetadataByLinkName";
import UseInvitationByLinkName from "@/app/utils/useInvitationByLinkName";
import Tarot from "@/app/invitation/invitations/Tarot";

export async function generateMetadata({ params:{client} }) {

    const { data, error } = await UseMetadataByLinkName(client);

    const helmet = data.helmet;

    return {
        title: helmet.title,
        description: helmet.description,
        openGraph: {
            title: helmet.title,
            description: helmet.description,
            images: [
                {
                    url: helmet.image,
                    width: 800,
                    height: 600,
                },
            ],

            url: `https://feeldates.com/invitations/${client}`,
            siteName: 'Feeldates',
            locale: 'es_MX',
            type: 'website',
        },
        icons: {
            icon: helmet.icon,
            shortcut: helmet.icon,
            apple: helmet.icon,
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: helmet.icon,
            },
        },
        twitter: {
            card: 'summary_large_image',
            title: helmet.title,
            description: helmet.description,
            images: [helmet.image],
        },
    }
}



// ICONS | BODA | XV | EVENTO


const Page = async ({params:{client}}, params) => {

    const { data, error } = await UseInvitationByLinkName(client);
    console.log("holaa se ejecutaron los datos");

    if (data.template === "tarot") return <Tarot template={data}></Tarot>

    if (data.template === "floralRosado") return <FloralRosado template={data}></FloralRosado>

    return (<div className={""}></div>);
};

export default Page;