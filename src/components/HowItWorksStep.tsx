import Image, { StaticImageData } from "next/image";
import styles from '@/components/HowItWorksStep.module.scss'
import { grandstander, outfit} from "@/app/fonts/fonts";



type HowItWorksStepProps = {
    step: string;
    process: string;
    imageSrc: StaticImageData;
    imageAlt: string
}

const HowItWorksStep:React.FC<HowItWorksStepProps> = ({step, process, imageSrc, imageAlt}) => {
  return (
    <>
      <div className={`${styles.wrapper} bg-white rounded-[20px] border-[1px] shadow-xl p-5 text-center min-w-[150px] max-w-[280px] w-full`}>
        <div className="inner text-center flex flex-col items-center">
            <p className={`${grandstander.className} text-primary text-[22px]`}>{step}</p>
            <p className={`${outfit.className} text-[32px] text-primaryDark`}>{process}</p>
            <Image src={imageSrc} alt={imageAlt}/>
        </div>
      </div>
    </>
  );
};

export default HowItWorksStep;
