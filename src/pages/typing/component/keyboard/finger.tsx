import { useType } from "../../context";

const LeftHand = () => {
  const { active_group } = useType();
  return (
    <div>
      <div
        className={`little_finger ${
          active_group[1] ? "finger-active" : ""
        }`}></div>
      <div
        className={`ring_finger ${
          active_group[2] ? "finger-active" : ""
        }`}></div>
      <div
        className={`middle_finger ${
          active_group[3] ? "finger-active" : ""
        }`}></div>
      <div
        className={`forefinger ${
          active_group[4] ? "finger-active" : ""
        }`}></div>
      <div className={`thumb`}></div>
      <div className={`dorsal`}></div>
    </div>
  );
};

const RightHand = () => {
  const { active_group } = useType();
  return (
    <div>
      <div className={`thumb ${active_group[9] ? "finger-active" : ""}`}></div>
      <div
        className={`forefinger ${
          active_group[5] ? "finger-active" : ""
        }`}></div>
      <div
        className={`middle_finger ${
          active_group[6] ? "finger-active" : ""
        }`}></div>
      <div
        className={`ring_finger ${
          active_group[7] ? "finger-active" : ""
        }`}></div>
      <div
        className={`little_finger ${
          active_group[8] ? "finger-active" : ""
        }`}></div>
      <div className={`dorsal`}></div>
    </div>
  );
};

export const Hands = () => {
  return (
    <div className="hands-container">
      <LeftHand />
      <RightHand />
    </div>
  );
};
