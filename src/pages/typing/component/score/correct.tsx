import { useRecord } from "../../context/record";

export const Correct = () => {
  const { best } = useRecord();
  return (
    <div className="info-container ">
      <p className="label">歷史最佳正確字數</p>
      {best ? (
        <p className="correct-text">{best}</p>
      ) : (
        <p className="correct-text">未有紀錄</p>
      )}
    </div>
  );
};
