import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

export const Timer = () => {
  return (
    <div className="info-container timer-container  ">
      00: 00
      <Button
        shape="circle"
        className="reset-btn-color "
        icon={<ReloadOutlined className="reset-icon-color" />}
      />
    </div>
  );
};
