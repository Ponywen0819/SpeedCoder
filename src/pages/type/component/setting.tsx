import { Button } from "antd";
import { useType } from "./context";

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
  const type_context = useType();

  const handleSetting = () => {
    type_context?.setKeyboard(!type_context.enable_keyboard);
  };

  return (
    <div className="setting-container">
      <p className="setting_label">顯示鍵盤</p>

      <Button type="text" className="setting-btn" onClick={handleSetting}>
        {type_context?.enable_keyboard ? "關閉鍵盤" : "開啟鍵盤"}
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