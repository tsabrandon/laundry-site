import Service from "@/components/Service";
import { StaticImageData } from "next/image";
import { ServiceType } from "@/types/types";
import { servicesData } from "@/data/services";
import { grandstander, outfit } from "@/app/fonts/fonts";

const Services: React.FC = () => {
  return (
    <section className="my-[60px]" id="Services">
      <div className="container">
        <div className="headline text-center mb-[60px]">
          <p className={`${grandstander.className} text-[25px] text-primary`}>Services</p>
          <h2 className={`${outfit.className} text-primaryDark text-[60px] leading-tight`}> Services & Packages</h2>
        </div>
        <div className="flex flex-col md:flex-row  md:items-stretch justify-around gap-8 items-center flex-wrap">
          {servicesData.map((data) => (
            <Service data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
