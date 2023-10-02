import { useRecord } from "../../context/record";

export const GoldMedal = () => {
  return <div className="gold-medal">金牌</div>;
};

export const SilverMedal = () => {
  return <div className="sliver-medal">銀牌</div>;
};

export const BrownMedal = () => {
  return <div className="brown-medal">銅牌</div>;
};

export const CompleteMedal = () => {
  return <div className="complete-medal">完成</div>;
};

export const Display = () => {
  const { medal } = useRecord();
  if (!medal) {
    return <p className="correct-text">未有紀錄</p>;
  }
  switch (medal) {
    case "Gold":
      return <GoldMedal />;
    case "Silver":
      return <SilverMedal />;
    case "Brown":
      return <BrownMedal />;
    default:
      return <CompleteMedal />;
  }
};

export const Medal = () => {
  return (
    <div className="info-container ">
      <p className="label">歷史最佳獎牌</p>
      <div className="m-auto pt-2 pb-2 w-fit">
        <Display />
      </div>
    </div>
  );
};
