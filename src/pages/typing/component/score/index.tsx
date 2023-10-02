import { Timer } from "./timer";
import { Language } from "./language";
import { Correct } from "./correct";
import { Medal } from "./medal";

export const Score = () => {
  return (
    <div className="score-sub-item pt-3">
      <Timer />
      <Language />
      <Correct />
      <Medal />
    </div>
  );
};
