import { Timer } from "./timer";
import { Reset } from "./reset";
import { Language } from "./language";
import { Correct } from "./correct";
import { Medal } from "./medal";

export const Score = () => {
  return (
    <div className="score-sub-item ">
      <Timer />
      <Language />
      <Correct />
      <Medal />
    </div>
  );
};
