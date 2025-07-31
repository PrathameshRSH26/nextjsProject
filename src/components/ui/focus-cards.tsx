"use client";

import React, { useState } from "react";
import { cn } from "@/utils/utils";

type CardType = {
  title: string;
  src: string;
  description?: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-40 md:h-80  transition-all duration-300 ease-in-out shadow-lg",
        hovered !== null && hovered !== index && "blur-[1px] scale-[0.98]",
        hovered === index && "scale-[1.02] shadow-xl"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 transition-opacity duration-300 ease-in-out",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {card.title}
          </h3>
          {card.description && (
            <p className="text-neutral-200 text-sm md:text-base">
              {card.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white ">
          Featured Courses ....
        </h2>
        <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card
              key={`${card.title}-${index}`}
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
}