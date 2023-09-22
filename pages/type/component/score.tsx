import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

import "@/scss/component/score.scss";

const Timer = () => {
  return <div className="timer-container">00: 00</div>;
};

const Reset = () => {
  return (
    <Button
      shape="circle"
      className="reset-btn-color "
      icon={<ReloadOutlined className="reset-icon-color" />}
    />
  );
};

const Language = () => {
  return (
    <div className="language-container">
      <p className="label">當前語言</p>
      <select className="language-select">
        <option className="language-option">Javascrpit</option>
      </select>
    </div>
  );
};

const Correct = () => {
  return (
    <div className="correct-container">
      <p className="label">正確字數</p>
      <p className="correct-text ">333</p>
    </div>
  );
};

const GoldMedal = () => {
  return <div>Suppose Gold medal</div>;
};

const SilverMedal = () => {
  return <div>Suppose Silver medal</div>;
};

const BrownMedal = () => {
  return <div>Suppose Brown medal</div>;
};

const Medal = () => {
  return (
    <div className="medal-container">
      <p className="label">獲得獎牌</p>
      <p>尚未完成</p>
    </div>
  );
};

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
