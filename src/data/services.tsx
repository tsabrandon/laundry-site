import { StaticImageData } from "next/image";
import basic from "@/assets/images/services/basic.png";
import couple from "@/assets/images/services/couple.png";
import family from "@/assets/images/services/family.png";
import { ServiceType } from "@/types/types";



export const servicesData: ServiceType[] = [
  {
    id: 1,
    icon: basic,
    size: "Single size",
    sizeDescription: "Perfect for people who live alone",
    included: "What’s included",
    packageIncluded: ["2 loads per week", "up to 10 lbs per load"],
    price: 10,
  },
  {
    id: 2,
    icon: couple,
    size: "Couples size",
    sizeDescription: "Perfect for couples size 3-6",
    included: "What’s included",
    packageIncluded: [
      "4 loads per week",
      "up to 12 lbs per load",
      "Special garments",
      "Pickup & drop off",
    ],
    price: 20,
  },
  {
    id: 3,
    icon: family,
    size: "Family size",
    sizeDescription: "Perfect for families size 4-6",
    included: "What’s included",
    packageIncluded: [
      "6 loads per week",
      "up to 15 lbs per load",
      "Special garments",
      "Pickup & drop off",
      "Free detergent samples",
    ],
    price: 30,
  },
];
