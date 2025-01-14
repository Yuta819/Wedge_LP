"use client";

import React, { useState } from "react";
import styles from "./Available.module.css";
import ChallengeCard from "./ChallengeCard";
import {
  FaHardHat,
  FaHandHoldingHeart,
  FaUserNurse,
  FaUtensils,
  FaBed,
} from "react-icons/fa";
import { constructionChallenges } from "../data/constructionChallenges";
import { careChallenges } from "../data/careChallenges";
import { nursingChallenges } from "../data/nursingChallenges";
import { restaurantChallenges } from "../data/restaurantChallenges";
import { hotelChallenges } from "../data/hotelChallenges";
import { IconType } from "react-icons";

// Industry-specific challenge data
const industryData = {
  construction: constructionChallenges,
  care: careChallenges,
  nursing: nursingChallenges,
  restaurant: restaurantChallenges,
  hotel: hotelChallenges,
};

const industries: { id: IndustryType; name: string; icon: IconType }[] = [
  { id: "construction", name: "建設", icon: FaHardHat },
  { id: "care", name: "介護", icon: FaHandHoldingHeart },
  { id: "nursing", name: "看護", icon: FaUserNurse },
  { id: "restaurant", name: "飲食", icon: FaUtensils },
  { id: "hotel", name: "宿泊", icon: FaBed },
];

// 型定義を追加
type IndustryType =
  | "construction"
  | "care"
  | "nursing"
  | "restaurant"
  | "hotel";

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
        <div className="flex justify-center space-x-4 mb-8">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setCurrentIndustry(industry.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                currentIndustry === industry.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <industry.icon />
              <span>{industry.name}</span>
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
    </section>
  );
};

export default Challenges;
