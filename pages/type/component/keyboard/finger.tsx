import "@/scss/component/hands.scss";

const LeftHand = () => {
  return (
    <div>
      <div className="little_finger"></div>
      <div className="ring_finger"></div>
      <div className="middle_finger"></div>
      <div className="forefinger"></div>
      <div className="thumb"></div>
      <div className="dorsal"></div>
    </div>
  );
};

const RightHand = () => {
  return (
    <div>
      <div className="thumb"></div>
      <div className="forefinger"></div>
      <div className="middle_finger"></div>
      <div className="ring_finger"></div>
      <div className="little_finger"></div>
      <div className="dorsal"></div>
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
