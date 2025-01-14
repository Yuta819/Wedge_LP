"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { testimonials, Testimonial } from "../data/testimonials";

const UserStories = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="cases"
      className="bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden"
    >
      <div className="p-4">
        <h3 className="text-5xl font-semibold bg-gradient-to-r from-[#e0c3fc] via-[#8ec5fc] to-[#a1c4fd] bg-clip-text text-transparent">
          お客様の声
        </h3>
        <p className="text-slate-500 my-4">
          様々な業界のお客様にTransceiverをご利用いただいています。
          導入後の効果や感想をご紹介します。
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  );
};

const SelectBtns = ({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#e0c3fc] via-[#8ec5fc] to-[#a1c4fd]"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#e0c3fc] via-[#8ec5fc] to-[#a1c4fd]"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({
  testimonials,
  selected,
  setSelected,
}: {
  testimonials: Testimonial[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  Icon,
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}: Testimonial & {
  position: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const gradients = [
    "from-[#e0c3fc] to-white",
    "from-[#d3caf7] to-white",
    "from-[#c6d1f3] to-white",
    "from-[#b9d8ee] to-white",
    "from-[#acdfea] to-white",
    "from-[#a1c4fd] to-white",
  ];
  const background = `bg-gradient-to-br ${gradients[position % 6]}`;
  const color = "text-black";
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className={`absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between ${background} ${color} overflow-hidden`}
    >
      <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end">
        <Icon className="text-black opacity-5" style={{ fontSize: "400px" }} />
      </div>
      <div className="relative z-10">
        <p className="text-lg lg:text-xl font-light italic mb-8">
          "{description}"
        </p>
        <div>
          <span className="block font-semibold text-lg">{name}</span>
          <span className="block text-sm">{title}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default UserStories;
