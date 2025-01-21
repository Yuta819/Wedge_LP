"use client";

import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";

export default function ContactModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialMessage, setInitialMessage] = useState("");

  useEffect(() => {
    const handleHash = () => {
      const isModalHash = window.location.hash.startsWith("#modal");
      setIsOpen(isModalHash);

      if (isModalHash) {
        const urlParams = new URLSearchParams(
          window.location.hash.split("?")[1]
        );
        const type = urlParams.get("type");
        if (type === "資料請求") {
          setInitialMessage("【資料請求】");
        } else {
          setInitialMessage("");
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <ContactModal
      isOpen={isOpen}
      initialMessage={initialMessage}
      onClose={() => {
        window.history.pushState(null, "", "/");
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }}
    />
  );
}
