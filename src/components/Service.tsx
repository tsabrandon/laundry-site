import Image from "next/image";
import checkRound from "@/assets/images/check-circle.png";
import { ServiceType } from "@/types/types";
import { grandstander, inter, outfit } from "@/app/fonts/fonts";

type ServiceProps = {
  data: ServiceType;
};

const ServiceComponent: React.FC<ServiceProps> = ({ data }) => {
  const { id, icon, size, sizeDescription, included, packageIncluded, price } =
    data;

  return (
    <div
      className={`wrapper border-[.1px] p-6 rounded-[22px] shadow-xl ${
        id === 2 && "bg-primaryLight lg:-translate-y-7"
      }`}
    >
      <div className="flex flex-col justify-end h-full">
        <div className="pb-2">
          <div className={`flex items-start gap-2`}>
            <Image src={icon} alt="Laundry icon" />
            <div>
              <h3
                className={`text-[30px] text-primary ${grandstander.className} uppercase leading-none`}
              >
                {size}
              </h3>
              <p className={`${inter.className} text-[12px]`}>
                {sizeDescription}
              </p>
            </div>
          </div>
          <p className={`${inter.className} text-[#A9A9AA] text-[22px]`}>
            {included}
          </p>
          <div className="mt-3">
            {packageIncluded.map((included: string) => (
              <div className="flex gap-1 mb-3" key={included}>
                <Image src={checkRound} alt="Check icon" />
                <p className={`text-[18px] ${inter.className}`}>{included}</p>
              </div>
            ))}
          </div>
          <div className="border-[1px] border-dashed mt-2"></div>
        </div>
        <div className="flex flex-col justify-end h-full">
          <p className="mt-2">
            <span
              className={`font-bold text-[28px] md:text-[29px] ${inter.className} text-[#0B0914]`}
            >
              {price} dollars{" "}
            </span>
            <span className={`text-[16px] md:text-[18px] ${inter.className}`}>
              /per month
            </span>
          </p>
          <button
            className={`btn ${
              id === 2 ? "bg-primary" : "bg-primaryLight"
            } px-5 w-full ${outfit.className} font-semi`}
          >
            Choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
