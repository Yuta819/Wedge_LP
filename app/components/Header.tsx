"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// import ContactModal from "./ContactModal";
import AnimatedButton from "./AnimatedButton";
import { useRouter } from "next/navigation";

const isIOS = () => {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
};

export default function Header() {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isOverHero, setIsOverHero] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIOSDevice, setIsIOSDevice] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      setIsTransparent(currentScroll < heroHeight);
      setIsOverHero(currentScroll < heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsIOSDevice(isIOS());

    const checkHash = () => {
      setIsModalOpen(window.location.hash === "#modal");
    };

    checkHash(); // 初期チェック
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  const handleOpenModal = () => {
    window.history.pushState(null, "", "/#modal");
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    window.history.pushState(null, "", "/");
    setIsModalOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white bg-opacity-90"
      }`}
    >
      {isIOSDevice ? (
        <IOSHeader
          isTransparent={isTransparent}
          isOverHero={isOverHero}
          onOpenModal={handleOpenModal}
        />
      ) : (
        <SimpleFloatingNav
          isTransparent={isTransparent}
          isOverHero={isOverHero}
          onOpenModal={handleOpenModal}
        />
      )}
      {/* <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </header>
  );
}

const SimpleFloatingNav = ({
  isTransparent,
  isOverHero,
  onOpenModal,
}: {
  isTransparent: boolean;
  isOverHero: boolean;
  onOpenModal: () => void;
}) => {
  return (
    <nav
      className={`fixed left-[50%] top-8 flex w-[90%] max-w-5xl -translate-x-[50%] items-center justify-between rounded-lg border-[1px] ${
        isTransparent ? "border-transparent" : "border-transparent"
      } ${
        isTransparent ? "bg-transparent" : "bg-white/10"
      } p-2 text-xs sm:text-sm ${
        isTransparent ? "backdrop-none" : "backdrop-blur-sm"
      } shadow-md z-[110] text-black`}
    >
      <Logo isTransparent={isTransparent} />
      <div
        className={`flex items-center justify-center flex-grow gap-6 transition-opacity duration-300 ${
          isOverHero ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="hidden lg:flex items-center justify-center gap-6">
          <NavLink
            href="#features"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            特徴
          </NavLink>
          <NavLink
            href="#challenges"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            解決課題
          </NavLink>
          <NavLink
            href="#cases"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            事例
          </NavLink>
          <NavLink
            href="#steps"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            導入
          </NavLink>
          <NavLink
            href="#pricing"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            費用
          </NavLink>
          <NavLink
            href="#faq"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            FAQ
          </NavLink>
        </div>
        <div className="flex lg:hidden items-center justify-center gap-4">
          <NavLink
            href="#features"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            特徴
          </NavLink>
          <NavLink
            href="#cases"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            事例
          </NavLink>
          <NavLink
            href="#faq"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            FAQ
          </NavLink>
        </div>
      </div>
      <div
        className={`transition-opacity duration-300 ${
          isOverHero ? "opacity-0" : "opacity-100"
        }`}
      >
        <Link href="https://www.aaa-wedge.co.jp/contact/" passHref>
          <AnimatedButton
            onClick={() =>
              window.open("https://www.aaa-wedge.co.jp/contact/", "_blank")
            }
          >
            問い合わせ
          </AnimatedButton>
        </Link>
      </div>
    </nav>
  );
};

const Logo = ({ isTransparent }: { isTransparent: boolean }) => {
  return (
    <Link
      href="https://www.aaa-wedge.co.jp/"
      className="block"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wedge_logo-xo5r0cc7EdC2Gegh3RH2tescM1q5ll.webp"
        alt="Transceiver"
        width={100}
        height={25}
        className={`transition-opacity duration-300 ${
          isTransparent ? "opacity-100" : "opacity-80"
        }`}
      />
    </Link>
  );
};

const NavLink = ({
  children,
  href,
  isTransparent,
  isOverHero,
}: {
  children: string;
  href: string;
  isTransparent: boolean;
  isOverHero: boolean;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`block overflow-hidden ${
        isOverHero ? "pointer-events-none" : ""
      }`}
    >
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span
          className={`flex h-[20px] items-center text-xs sm:text-sm ${
            isTransparent ? "text-black" : "text-black"
          }`}
        >
          {children}
        </span>
        <span
          className={`flex h-[20px] items-center text-xs sm:text-sm ${
            isTransparent ? "text-black" : "text-black"
          }`}
        >
          {children}
        </span>
      </motion.div>
    </Link>
  );
};

const IOSHeader = ({
  isTransparent,
  isOverHero,
  onOpenModal,
}: {
  isTransparent: boolean;
  isOverHero: boolean;
  onOpenModal: () => void;
}) => {
  return (
    <motion.nav
      className={`fixed left-4 right-4 top-4 flex items-center justify-between rounded-full border border-white/10 p-2 backdrop-blur-sm transition-colors duration-300 ${
        isTransparent ? "bg-white/10" : "bg-white/90"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Logo isTransparent={isTransparent} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`flex items-center justify-center flex-grow gap-6 transition-opacity duration-300 ${
          isOverHero ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="hidden lg:flex items-center justify-center gap-6">
          <NavLink
            href="#features"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            特徴
          </NavLink>
          <NavLink
            href="#challenges"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            解決課題
          </NavLink>
          <NavLink
            href="#cases"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            事例
          </NavLink>
          <NavLink
            href="#steps"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            導入
          </NavLink>
          <NavLink
            href="#pricing"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            費用
          </NavLink>
          <NavLink
            href="#faq"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            FAQ
          </NavLink>
        </div>
        <div className="flex lg:hidden items-center justify-center gap-4">
          <NavLink
            href="#features"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            特徴
          </NavLink>
          <NavLink
            href="#cases"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            事例
          </NavLink>
          <NavLink
            href="#faq"
            isTransparent={isTransparent}
            isOverHero={isOverHero}
          >
            FAQ
          </NavLink>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`transition-opacity duration-300 ${
          isOverHero ? "opacity-0" : "opacity-100"
        }`}
      >
        <Link href="https://www.aaa-wedge.co.jp/contact/" passHref>
          <AnimatedButton
            onClick={() =>
              window.open("https://www.aaa-wedge.co.jp/contact/", "_blank")
            }
          >
            問い合わせ
          </AnimatedButton>
        </Link>
      </motion.div>
    </motion.nav>
  );
};
