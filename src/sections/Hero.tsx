import { outfit, grandstander, inter, rasa } from "@/app/fonts/fonts";
import Image from "next/image";
import washingMachine from "@/assets/images/washing.png";
import bubbles from "@/assets/images/bubbles.png";

const Hero: React.FC = () => {
  return (
    <section className="mt-[100px] md:mt-[160px] overflow-x-clip pb-8 lg:pb-0" id="home">
      <div className="container">
        <div className="flex items-start justify-center">
          <div className="w-[570px]">
            <div className="hero-headings">
              <span
                className={`rounded-full text-xs bg-primaryLight py-2 px-5 md:text-4 ${inter.className} font-semibold`}
              >
                20% Discount for 1 Month Subscription
              </span>
              <h1
                className={`mt-4 md:mt-6 text-primaryDark font-light text-[50px] md:text-[65px] ${grandstander.className} leading-none md:leading-tight`}
              >
                Laundry today or Naked tomorrow.
              </h1>
              <p
                className={`mt-3 leading-tight md:mt-6 ${inter.className} font-medium  md:text-[18px] text-primaryDark `}
              >
                Nice Laundry service will wash, dry, and fold your laundry at an
                affordable price. Pickup and drop-off options available!
              </p>
            </div>
            <button
              className={`bg-primaryLight btn ${outfit.className} px-[70px]`}
            >
              How it works
            </button>
            <div className={`mt-6 flex gap-10`}>
              <div className={`flex justify-center items-center gap-2`}>
                <span
                  className={`${rasa.className} text-[35px] md:text-[50px] font-bold`}
                >
                  18m&#43;
                </span>
                <span
                  className={`leading-none ${inter.className} text-[10px] md:text-[14px] text-primary`}
                >
                  Happy
                  <br />
                  Customers
                </span>
              </div>
              <div className={`flex justify-center items-center gap-2`}>
                <span
                  className={`${rasa.className} text-[35px] md:text-[50px] font-bold`}
                >
                  10&#43;
                </span>
                <span
                  className={`leading-none ${inter.className} text-[10px] md:text-[14px] text-primary`}
                >
                  Years of
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </div>
          <div className="relative hidden h-[670px] lg:block md:flex-1">
            <div className="relative ">
              <div className="absolute">
                <div className="flex absolute items-center justify-center w-[668px] h-[668px] rounded-full bg-primaryLight top-[-50px] left-[90px]">
                  <Image
                    src={washingMachine}
                    className="w-[335px] h-[464px] left-[240px] top-[50px]"
                    alt="Washing machine image"
                  />
                </div>
              </div>
              <Image
                src={bubbles}
                alt="bubbles image"
                width={90}
                height={90}
                className="hidden md:block absolute top-[-100px] left-[420px] rotate-[-25deg]"
              />
              <Image
                src={bubbles}
                alt="bubbles image"
                width={90}
                height={90}
                className="hidden md:block absolute top-[450px]"
              />
              <Image
                src={bubbles}
                alt="bubbles image"
                width={90}
                height={90}
                className="hidden md:block absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
