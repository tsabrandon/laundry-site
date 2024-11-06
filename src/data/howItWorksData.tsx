import address from '@/assets/images/how-it-works/address.png'
import clothes from '@/assets/images/how-it-works/clothes.png'
import laundry from '@/assets/images/how-it-works/laundry.png'
import messenger from '@/assets/images/how-it-works/messenger.png'
import { StaticImageData } from 'next/image'


type steps = {
    step: string;
    process: string;
    imageSrc: StaticImageData;
    imageAlt: string
}

export const howItWorksData:steps[] = [
    {
        step: "step 1",
        process: "Pickup",
        imageSrc: address,
        imageAlt: `${address} image`
    },
    {
        step: "step 2",
        process: "Wash & Dry",
        imageSrc: laundry,
        imageAlt: `${address} image`
    },
    {
        step: "step 3",
        process: "Fold",
        imageSrc: clothes,
        imageAlt: `${address} image`
    },
    {
        step: "step 4",
        process: "Delivery",
        imageSrc: messenger,
        imageAlt: `${address} image`
    },

]