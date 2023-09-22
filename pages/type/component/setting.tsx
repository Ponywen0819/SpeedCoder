import { Button } from "antd";
import "@/scss/component/setting.scss";

const KeyboardLayout = () => {
  return (
    <div className="setting-container">
      <p className="setting_label">鍵盤布局</p>
      <select className="setting-layout-select">
        <option className="setting-layout-option">QWERTY</option>
      </select>
    </div>
  );
};

const KeyboardEnable = () => {
  return (
    <div className="setting-container">
      <p className="setting_label">顯示鍵盤</p>
      {/* <button>關閉鍵盤</button> */}
      <Button type="text" className="setting-btn">
        關閉鍵盤
      </Button>
    </div>
  );
};

export const Setting = () => {
  return (
    <div className="d-flex flex-column gap-3 ">
      <h1 className="setting-heading">設定</h1>
      <KeyboardLayout />
      <KeyboardEnable />
    </div>
  );
};
