import { Timer } from "./timer";
import { Reset } from "./reset";
import { Language } from "./language";
import { Correct } from "./correct";
import { Medal } from "./medal";

export const Score = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex align-items-center gap-3">
        <Timer />
        <Reset />
      </div>
      <Language />
      <Correct />
      <Medal />
    </div>
  );
};
