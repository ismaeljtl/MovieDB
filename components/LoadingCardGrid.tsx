import React from "react";
import LoadingCard from "./LoadingCard";

const LoadingCardGrid: React.FC<{ numCards: number }> = ({ numCards }) => {
  const cards = Array.from({ length: numCards });
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
};

export default LoadingCardGrid;
