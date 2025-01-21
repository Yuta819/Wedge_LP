"use client";

import React, { useState } from "react";
import styles from "./Available.module.css";
import ChallengeCard from "./ChallengeCard";
import {
  FaSchool,
  FaHandHoldingHeart,
  FaUserNurse,
  FaCar,
  FaBed,
} from "react-icons/fa";
import { schoolChallenges } from "../data/schoolChallenges";
import { careChallenges } from "../data/careChallenges";
import { nursingChallenges } from "../data/nursingChallenges";
import { cardealerChallenges } from "../data/cardealerChallenges";
import { hotelChallenges } from "../data/hotelChallenges";
import { IconType } from "react-icons";

// Industry-specific challenge data
const industryData = {
  school: schoolChallenges,
  care: careChallenges,
  nursing: nursingChallenges,
  cardealer: cardealerChallenges,
  hotel: hotelChallenges,
};

const industries: { id: IndustryType; name: string; icon: IconType }[] = [
  { id: "school", name: "学校", icon: FaSchool },
  { id: "care", name: "介護", icon: FaHandHoldingHeart },
  { id: "nursing", name: "看護", icon: FaUserNurse },
  { id: "cardealer", name: "ディーラー", icon: FaCar },
  { id: "hotel", name: "宿泊", icon: FaBed },
];

// 型定義を追加
type IndustryType = "school" | "care" | "nursing" | "cardealer" | "hotel";

const Challenges: React.FC = () => {
  // useState に型を追加
  const [currentIndustry, setCurrentIndustry] = useState<IndustryType>("care");

  return (
    <section
      id="challenges"
      className="py-12 sm:py-16 md:py-20 px-4 overflow-x-hidden"
    >
      <div className="container mx-auto">
        <h2
          className={`${styles.animatedGradientText} text-3xl font-bold mb-6 sm:mb-8 text-center`}
        >
          こんな課題を持つ事業所におすすめ
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setCurrentIndustry(industry.id)}
              className={`flex flex-col items-center sm:flex-row sm:space-x-2 px-4 py-2 rounded-full min-w-[100px] ${
                currentIndustry === industry.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <industry.icon className="mb-1 sm:mb-0" />
              <span className="whitespace-nowrap text-sm sm:text-base">
                {industry.name}
              </span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-6 md:gap-x-6 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {industryData[currentIndustry].map((challenge, index) => (
            <div
              key={index}
              className={`
              flex 
              ${index % 2 === 1 ? "md:mt-[160px]" : ""} 
              ${index % 2 === 0 ? "justify-start" : "justify-end"}
              lg:justify-center
            `}
            >
              <ChallengeCard
                title={challenge.title}
                description={challenge.description}
                solution={challenge.solution}
                icon={challenge.icon}
                position={index % 2 === 0 ? "left" : "right"}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto">
        <h2
          className={`${styles.animatedGradientText} text-3xl font-bold mb-6 sm:mb-8 text-center mt-16`}
        >
          これらの業種とお取引のある法人様、「紹介代理店」や「販売代理店」としての協業を募集しております。
        </h2>
      </div>
    </section>
  );
};

export default Challenges;
