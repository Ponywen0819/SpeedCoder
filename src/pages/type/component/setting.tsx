import { useState } from "react";
import { useType } from "./context";
import Button from "react-bootstrap/Button";
import { Sliders } from "react-bootstrap-icons";
import ListGroup from "react-bootstrap/ListGroup";

const KeyboardLayout = () => {
  return (
    <ListGroup.Item>
      <p className="text-start fs-6">鍵盤布局</p>
      <select className="setting-layout-select">
        <option className="setting-layout-option">QWERTY</option>
      </select>
    </ListGroup.Item>
  );
};

const KeyboardEnable = () => {
  const type_context = useType();

  const handleSetting = () => {
    type_context?.setKeyboard(!type_context.enable_keyboard);
  };

  return (
    <ListGroup.Item>
      <div className="setting-container">
        <p className="setting_label">顯示鍵盤</p>

        <Button className="setting-btn" onClick={handleSetting}>
          {type_context?.enable_keyboard ? "關閉鍵盤" : "開啟鍵盤"}
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export const Setting = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="d-flex flex-column gap-3 setting-btn">
      <div>
        <Button
          variant=""
          size="sm"
          className="ms-auto d-block"
          onClick={() => setCollapsed((old) => !old)}>
          <Sliders />
        </Button>
      </div>
      <div className="position-relative">
        <ListGroup
          className="collapsed-container position-absolute"
          style={{
            height: collapsed ? "0px" : "400px",
          }}>
          <KeyboardLayout />
          <KeyboardEnable />
        </ListGroup>
      </div>
    </div>
  );
};
