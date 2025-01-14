"use client";

import { motion, AnimatePresence } from "framer-motion";

interface InformationProps {
  show: boolean;
}

const Information: React.FC<InformationProps> = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
        >
          <a
            href="#"
            className="block py-2 px-4 hover:bg-opacity-80 transition-colors duration-300"
          >
            <div className="container mx-auto flex justify-center items-center">
              <p className="text-sm md:text-base">
                🎉 期間限定キャンペーン実施中！詳細はこちらをclick！
              </p>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Information;
