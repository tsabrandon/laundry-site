import Image from "next/image";
import think from "@/assets/images/thinking-woman.png";
import { outfit } from "@/app/fonts/fonts";

const LearnMore = () => {
  return (
    <section className="my-[60px] md:my-[100px]" id="LearnMore">
      <div className="container">
        <div className="w-full bg-primaryLight p-[40px] rounded-[40px] md:rounded-[75px]">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-[600px]">
              <Image
                className="absolute top-[-130px] hidden md:block"
                src={think}
                alt="Thinking woman"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h2
                className={`${outfit.className} mb-3  text-primaryDark font-semi text-[35px] md:text-[55px] leading-none tracking-tight`}
              >
                Hard time deciding what’s best for you?
              </h2>
              <button
                className={`btn px-10 bg-background font-semi ${outfit.className}`}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
