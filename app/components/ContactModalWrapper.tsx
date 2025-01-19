"use client";

import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";

export default function ContactModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      setIsOpen(window.location.hash === "#modal");
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <ContactModal
      isOpen={isOpen}
      onClose={() => {
        window.history.pushState(null, "", "/");
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }}
    />
  );
}
