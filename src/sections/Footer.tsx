import Image from "next/image";
import bubble from "@/assets/images/bubbles.png";
import linkedin from "@/assets/images/linkedin.png";
import instagram from "@/assets/images/instagram.png";
import facebook from "@/assets/images/facebook.png";
import { grandstander, inter } from "@/app/fonts/fonts";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primaryLight py-10" id="Footer">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row items-center">
          <div className="relative">
            <Image className="absolute top-[-70px] hidden lg:block" src={bubble} alt="bubble icon" />
            <Image className="absolute top-[40px] rotate-180 left-[-50px] hidden lg:block" src={bubble} alt="bubble icon" />
            <h2
              className={`${grandstander.className} text-[37px] text-primary`}
            >
              Nice Laundry
            </h2>
          </div>
          <div
            className={`${inter.className} grid gap-10 grid-cols-2 md:grid-cols-4 mt-3 md:mt-0`}
          >
            <div className="">
              <p className="font-bold">About us</p>
              <p>About us</p>
              <p>Creators</p>
              <p>Philosophy</p>
              <p>Contact us</p>
            </div>
            <div className="">
              <p className="font-bold">Company</p>
              <p>Our team</p>
              <p>Terms</p>
              <p>How it works</p>
              <p>Blog</p>
            </div>
            <div className="">
              <p className="font-bold">Services</p>
              <p>Pickup</p>
              <p>Drop off</p>
              <p>Laundry</p>
            </div>
            <div className="">
              <p className="font-bold">Check us out</p>
              <div className="flex gap-3 mt-2">
                <Image src={facebook} alt="facebook logo" />
                <Image src={instagram} alt="insta logo" />
                <Image src={linkedin} alt="linkedin logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
