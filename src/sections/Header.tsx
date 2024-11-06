"use client";

import { grandstander, outfit } from "@/app/fonts/fonts";
import Image from "next/image";
import bubbles from "@/assets/images/bubbles.png";
import Link from "next/link";
import styles from "@/sections/Header.module.scss";
import { useState } from "react";

const Header: React.FC = () => {
  const [isCheckedInput, setIsCheckInput] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background z-10">
      <div className="container my-[1px]">
        <div className="md:flex items-center ">
          <div className="flex flex-1 justify-between items-center gap-1 w-full">
            <div className="inline-flex items-center gap-1">
              <Image
                width={58}
                src={bubbles}
                placeholder="blur"
                alt="Nice laundry bubble logo"
              />
              <p
                className={`primary-blue text-[20px] pt-1 md:text-[35px] lg:text-[45px] ${grandstander.className}`}
              >
                Nice Laundry
              </p>
            </div>
            <div className="nav-inner relative block md:hidden">
              <input
                id="checkNav"
                type="checkbox"
                className={`${styles.checkbox} primary-blue`}
                checked={isCheckedInput}
                onChange={(e) => setIsCheckInput(e.target.checked)}
              />
              <div className={`absolute top-[-10px] ${styles.menuContainer}`}>
                <span className={`${styles.spanNav}`}></span>
              </div>
            </div>
          </div>
          <nav className="md:bg-background ">
            <ul
              className={`md:flex md:gap-6 pb-3 md:pb-0 lg:gap-10 flex-wrap md:text-[17px] lg:text-[22px] bg-background ${
                outfit.className
              } hidden ${
                isCheckedInput ? styles.ulNavShow : ""
              } text-[#263238]`}
            >
              <li className="hover:primary-blue ">
                <Link href="/" scroll={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:primary-blue "
                  scroll={true}
                  href="#HowItWorks"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  className="hover:primary-blue "
                  href="#Services"
                  scroll={true}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="hover:primary-blue "
                  href="#Footer"
                  scroll={true}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
