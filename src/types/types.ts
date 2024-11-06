import { StaticImageData } from "next/image";

export type ServiceType = {
    id: number;
    icon: StaticImageData;
    size: string;
    sizeDescription: string;
    included: string;
    packageIncluded: string[];
    price: number;
  };