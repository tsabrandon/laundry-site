import { howItWorksData } from "@/data/howItWorksData";
import HowItWorksStep from "@/components/HowItWorksStep";
import { grandstander, outfit } from "@/app/fonts/fonts";


const HowItWorks: React.FC = () => {
  return (
    <section className="bg-primaryLight py-10" id="HowItWorks">
      <div className="container mb-4">
        <div className="section-headline text-center">
            <p className={`text-primary ${grandstander.className} text-[16px] md:text-[25px]`}>HOW IT WORKS</p>
            <h2 className={`${outfit.className} text-[35px] md:text-[60px] leading-none mt-2`}>Get it done in 4 steps</h2>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-6 md:flex-row items-center md:items-stretch">
            {howItWorksData.map((data) => (
              <HowItWorksStep step={data.step} process={data.process} imageSrc={data.imageSrc} imageAlt={data.imageAlt} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
